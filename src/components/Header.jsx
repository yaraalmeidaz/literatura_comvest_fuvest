
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>A Literatura — COMVEST & FUVEST</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/aulas">Aulas</Link>
        <Link
          className="btn"
          to={`/inscricao?aula=${encodeURIComponent(
            `17/10 — 📚 REVISÃO GERAL FINAL (Todas as obras) — Vestibular: Ambos`
          )}`}
        >
          Inscreva-se
        </Link>
      </nav>
    </header>
  );
}
