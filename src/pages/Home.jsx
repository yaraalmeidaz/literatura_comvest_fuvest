import React from "react";
import { Link } from "react-router-dom";
import capa from "../assets/capas_livros.png";
import Header from "../components/Header";

export default function Home() {
  // aqui você pode mudar as infos da aula quando quiser
 const ultimaAula = {
  diaSemana: "Quinta-feira",
  dia: "17",
  mes: "Outubro",
  descricao: "📚 REVISÃO GERAL FINAL (Todas as obras) — Vestibular: Ambos",
  dataCompleta: "17/10",
};


  const proximaAula = {
    titulo: "Realismo e leitura crítica em vestibulares",
    resumo:
      "Vamos revisitar trechos de Machado de Assis pensando em como a banca cobra ironia, ponto de vista do narrador e construção psicológica das personagens. Também veremos exemplos de questões da Fuvest e da Comvest.",
    chamadaHorario:
      "Encontros às segundas-feiras, no IFSP – Araraquara, em um espaço acolhedor para leitura, dúvida e revisão.",
  };

  return (
    <div className="page">
      <Header />

      <main>
        {/* HERO – imagem de livros ocupando a tela toda */}
        <section className="hero-full">
          <div className="hero-bg">
            <img
              src={capa}
              className="hero-img"
              alt="Capas de obras literárias indicadas para vestibulares"
            />
            <div className="hero-overlay" />
          </div>

          <div className="hero-content">
            <p className="hero-tag">Projeto de Extensão • IFSP – Araraquara</p>

            <h1 className="hero-title">
              Literatura para Vestibulares
            </h1>

            <p className="hero-subtitle">
              COMVEST • FUVEST • leitura guiada, contexto histórico
              e estratégias para prova em um ambiente acolhedor.
            </p>
          </div>
        </section>

        {/* BOX – texto sobre o projeto de extensão */}
        <section className="section project-section">
          <div className="project-card">
            <h2>Sobre o projeto de extensão</h2>
            <p>
              O projeto <strong>“Literatura para Vestibulares”</strong> apoia estudantes na leitura
              e na compreensão das obras obrigatórias da <strong>Comvest</strong> e da{" "}
              <strong>Fuvest</strong>. A cada encontro, trabalhamos contexto histórico,
              temas centrais, personagens, estrutura do texto e, claro, o jeito como
              as bancas costumam cobrar esses conteúdos nas provas.
            </p>
            <p>
              A ação é organizada pelo IFSP – Campus Araraquara e conta com a atuação
              da bolsista <strong>Yara Almeida</strong>, que ajuda na mediação das aulas,
              no preparo dos materiais e no acompanhamento dos estudantes.
            </p>
            <p>
              Os encontros acontecem <strong>toda segunda-feira</strong>, em um espaço pensado
              para ler com calma, discutir as obras, tirar dúvidas e construir juntos
              um estudo mais leve e organizado.
            </p>
          </div>
        </section>

        {/* CALENDÁRIO + PRÓXIMA AULA */}
        <section className="section agenda-section">
          <div className="agenda-grid">
            {/* Calendário da última aula */}
            <div className="agenda-card calendar-card">
              <h3>Última aula realizada</h3>

              <div className="calendar-widget">
                <div className="calendar-month">{ultimaAula.mes}</div>
                <div className="calendar-day">{ultimaAula.dia}</div>
                <div className="calendar-weekday">{ultimaAula.diaSemana}</div>
              </div>

              <p className="calendar-caption">
                Tema: <strong>{ultimaAula.descricao}</strong> ({ultimaAula.dataCompleta})
              </p>
              <p className="calendar-note">
                Se você perdeu esse encontro, pode conferir o cronograma e se organizar
                para as próximas aulas.
              </p>
            </div>

            {/* Box da "próxima" aula */}
            <div className="agenda-card next-class-card">
              <h3>Próxima aula</h3>

              <p className="next-class-meta">
                {proximaAula.chamadaHorario}
              </p>

              <p className="next-class-title">
                {proximaAula.titulo}
              </p>

              <p className="next-class-text">
                {proximaAula.resumo}
              </p>

              <div className="next-buttons">
                <Link to="/aulas" className="btn btn-primary">
                  Ver cronograma das aulas
                </Link>

                <Link
  to={`/inscricao?aula=${encodeURIComponent(
    `17/10 — 📚 REVISÃO GERAL FINAL (Todas as obras) — Vestibular: Ambos`
  )}`}
  className="btn btn-outline"
>
  Inscrever-se nesta aula
</Link>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
