import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <p className="footer-text">
Projeto de Extensão – IFSP Araraquara | Site desenvolvido pela bolsista Yara Almeida – 2024        </p>

        <Link to="/dashboard" className="footer-link">
          📊 Ver Análise dos Dados
        </Link>
      </div>
    </footer>
  );
}
