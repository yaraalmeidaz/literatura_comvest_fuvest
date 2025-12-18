import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"; // <-- IMPORTANTE!

export default function Aulas() {
  
  const slidePadrao = "https://www.canva.com/design/DAG7BPPFe-Q/HasfmuToN8NUDxLyoUdzbg/edit?ui=eyJBIjp7fX0";

  const cronograma = [
    { data: "17/10", obra: "📚 REVISÃO GERAL FINAL (Todas as obras)", vestibular: "Ambos", slides: slidePadrao },
    { data: "14/10", obra: "REVISÃO 6 – Modernismo + Contemporâneo", vestibular: "Ambos", slides: slidePadrao },
    { data: "07/10", obra: "REVISÃO 5 – Realismo (Machado + Eça)", vestibular: "Ambos", slides: slidePadrao },
    { data: "30/09", obra: "REVISÃO 4 – Unicamp (Segunda metade)", vestibular: "Unicamp", slides: slidePadrao },
    { data: "23/09", obra: "REVISÃO 3 – Fuvest (Segunda metade)", vestibular: "Fuvest", slides: slidePadrao },
    { data: "16/09", obra: "REVISÃO 2 – Unicamp (Primeira metade)", vestibular: "Unicamp", slides: slidePadrao },
    { data: "09/09", obra: "REVISÃO 1 – Fuvest (Primeira metade)", vestibular: "Fuvest", slides: slidePadrao },
    { data: "02/09", obra: "A vida não é útil – Ailton Krenak", vestibular: "Unicamp", slides: slidePadrao },
    { data: "26/08", obra: "Nós matamos o cão tinhoso! – Luís Bernardo Honwana", vestibular: "Fuvest", slides: slidePadrao },
    { data: "19/08", obra: "Niketche – Paulina Chiziane", vestibular: "Unicamp", slides: slidePadrao },
    { data: "12/08", obra: "Dois irmãos – Milton Hatoum", vestibular: "Fuvest", slides: slidePadrao },
    { data: "05/08", obra: "Prosas seguidas de odes mínimas – José Paulo Paes", vestibular: "Unicamp", slides: slidePadrao },
    { data: "29/07", obra: "Romanceiro da Inconfidência – Cecília Meireles", vestibular: "Fuvest", slides: slidePadrao },
    { data: "22/07", obra: "Olhos d’água – Conceição Evaristo", vestibular: "Unicamp", slides: slidePadrao },
    { data: "15/07", obra: "Água Funda – Ruth Guimarães", vestibular: "Fuvest", slides: slidePadrao },
    { data: "08/07", obra: "Alice no país das maravilhas – Lewis Carroll", vestibular: "Unicamp", slides: slidePadrao },
    { data: "01/07", obra: "Marília de Dirceu – Tomás Antônio Gonzaga", vestibular: "Fuvest", slides: slidePadrao },
    { data: "24/06", obra: "Vida e morte de M. J. Gonzaga de Sá – Lima Barreto", vestibular: "Unicamp", slides: slidePadrao },
    { data: "17/06", obra: "A Ilustre Casa de Ramires – Eça de Queirós", vestibular: "Fuvest", slides: slidePadrao },
    { data: "10/06", obra: "Casa Velha – Machado de Assis", vestibular: "Unicamp", slides: slidePadrao },
    { data: "03/06", obra: "Quincas Borba – Machado de Assis", vestibular: "Fuvest", slides: slidePadrao },
    { data: "25/03", obra: "Canções escolhidas – Cartola", vestibular: "Unicamp", slides: slidePadrao },
    { data: "18/03", obra: "Os ratos – Dyonélio Machado", vestibular: "Fuvest", slides: slidePadrao },
    { data: "11/03", obra: "Morangos mofados – Caio Fernando Abreu", vestibular: "Unicamp", slides: slidePadrao },
    { data: "04/03", obra: "Alguma Poesia – Carlos Drummond de Andrade", vestibular: "Fuvest", slides: slidePadrao }
  ];

  return (
    <>
      <Header />

      <section className="aulas-section">

        <h2>Cronograma de Leitura – Fuvest & Unicamp 2025</h2>
        <p className="aulas-sub">
          Aulas semanais com análise literária, discussão crítica e materiais de apoio.
        </p>

        <div className="aulas-grid">
          {cronograma.map((aula, index) => (
            <div key={index} className="aula-card">
              
              <div className="aula-header">
                <span className="aula-data">{aula.data}</span>
                <span className="aula-vestibular">Vestibular: {aula.vestibular}</span>
              </div>

              <div className="aula-titulo">{aula.obra}</div>

              <div className="aula-slides">
                <span>Slides: </span>
                <a 
                  href={aula.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir apresentação
                </a>
              </div>

               <Link
  to={`/inscricao?aula=${encodeURIComponent(
    `${aula.data} — ${aula.obra}`
  )}&ves=${aula.vestibular}`}
  className="btn-action"
>
  📝 Inscrever-se para esta aula
</Link>

</div>
))}
</div>

</section>
</>
);
}
