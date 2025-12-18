import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Dashboard() {
  const [dados, setDados] = useState([]);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    async function carregarTudo() {
      const { data: gold, error: goldError } =
        await supabase.from("inscricoes_gold").select("*");

      const { data: rankData, error: rankError } =
        await supabase.from("inscricoes_rank").select("*");

      if (goldError) console.error(goldError);
      else setDados(gold);

      if (rankError) console.error(rankError);
      else setRank(rankData);
    }

    carregarTudo();
  }, []);

  // TOTAL DE INSCRIÇÕES
  const totalInscricoes = dados.reduce(
    (acc, item) => acc + item.total_inscricoes,
    0
  );

  // Aula mais procurada
  const aulaMaisProcurada =
    dados.length > 0
      ? dados.reduce((max, item) =>
          item.total_inscricoes > max.total_inscricoes ? item : max
        )
      : null;

  // SLIDES — soma geral
  const totalQuerSlide = dados.reduce(
    (acc, item) => acc + item.total_pessoas_receber_slide,
    0
  );

  const totalNaoQuerSlide = totalInscricoes - totalQuerSlide;

  return (
    <>
      <Header />

      <section className="dashboard-page">
        <h2>Dashboard de Inscrições 📊</h2>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total de Inscrições</h3>
            <p>{totalInscricoes}</p>
          </div>

          {aulaMaisProcurada && (
            <div className="card">
              <h3>Aula Mais Procurada</h3>
              <p>{aulaMaisProcurada.aula}</p>
            </div>
          )}
        </div>

        <div className="charts">

          {/* GRÁFICO 1 – Pessoas por Aula */}
          <div className="chart">
            <h3>Pessoas Únicas por Aula</h3>
            <Bar
              data={{
                labels: dados.map((d) => d.aula),
                datasets: [
                  {
                    label: "Pessoas únicas",
                    data: dados.map((d) => d.total_pessoas_unicas_aula),
                    backgroundColor: "#8e44ad",
                  },
                ],
              }}
            />
          </div>

          {/* GRÁFICO 2 – Receber Slide */}
          <div className="chart">
            <h3>Quem deseja receber o slide?</h3>
            <Pie
              data={{
                labels: ["Quer slide", "Não quer slide"],
                datasets: [
                  {
                    data: [totalQuerSlide, totalNaoQuerSlide],
                    backgroundColor: ["#27ae60", "#c0392b"],
                  },
                ],
              }}
            />
          </div>
        </div>

        {/* RANKING */}
        <div className="ranking">
          <h3>🏆 Ranking de Participantes</h3>

          <table className="rank-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Aulas Frequentadas</th>
              </tr>
            </thead>

            <tbody>
              {rank.map((pessoa, index) => (
                <tr key={index}>
                  <td>{pessoa.posicao}</td>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.email}</td>
                  <td>{pessoa.aulas_frequentadas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
           </section>
    </>
  );
}
