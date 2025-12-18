import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { supabase } from "../supabase";

export default function Inscricao() {
  const [showConfirm, setShowConfirm] = useState(false);

  // Pega parâmetros da URL
  const query = new URLSearchParams(useLocation().search);
  const aulaSelecionada = query.get("aula");
  const vestibular = query.get("ves"); // <-- agora funcionando!

  // ---- Obter IP do usuário ----
  async function obterIP() {
    try {
      const resp = await fetch("https://api.ipify.org?format=json");
      const data = await resp.json();
      return data.ip;
    } catch {
      return "desconhecido";
    }
  }

  // ---- Enviar formulário ----
  async function enviar(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const email_confirmacao = formData.get("email_confirmacao");
    const telefone = formData.get("telefone");
    const receber_slide = formData.get("receber_slide") === "on";

    // validar email
    if (email !== email_confirmacao) {
      alert("Os e-mails não coincidem!");
      return;
    }

    const ip_usuario = await obterIP();

    const { error } = await supabase.from("inscricoes").insert({
      nome,
      email,
      email_confirmacao,
      telefone,
      receber_slide,
      aula: aulaSelecionada,
      vestibular,     // <-- enviado corretamente!
      ip_usuario,
    });

    if (error) {
      console.error(error);
      alert("Erro ao enviar inscrição.");
    } else {
      setShowConfirm(true);
      e.target.reset();
    }
  }

  return (
    <>
      <Header />

      {/* POPUP DE CONFIRMAÇÃO */}
      {showConfirm && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Inscrição enviada! 🎉</h3>
            <p>Sua participação foi registrada com sucesso.</p>
            <button onClick={() => setShowConfirm(false)}>Fechar</button>
          </div>
        </div>
      )}

      {/* FORMULÁRIO */}
      <section className="inscricao-page">
        <div className="inscricao-container">
          <h2>Inscrição para a aula</h2>
          <p className="inscricao-sub">
            Complete seus dados para confirmar sua participação.
          </p>

          {aulaSelecionada && (
            <div className="aula-info-box">
              <p>
                <strong>Aula selecionada:</strong>
                <br />
                {aulaSelecionada}
              </p>

              <p className="aula-ves">
                <strong>Vestibular:</strong> {vestibular || "—"}
              </p>
            </div>
          )}

          <form onSubmit={enviar}>
            <label>Nome completo</label>
            <input type="text" name="nome" required />

            <label>E-mail</label>
            <input type="email" name="email" required />

            <label>Confirme seu e-mail</label>
            <input type="email" name="email_confirmacao" required />

            <label>Telefone</label>
            <input type="text" name="telefone" required />

            <label className="checkbox-line">
              <input type="checkbox" name="receber_slide" />
              Desejo receber o slide ao final da aula por e-mail
            </label>

            <button type="submit">Enviar inscrição</button>
          </form>
        </div>
      </section>
    </>
  );
}
