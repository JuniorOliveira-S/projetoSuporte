document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-suporte");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      abrirChamado();
    });
  }
});

function abrirChamado() {
  const nome = document.getElementById("campo-nome").value.trim();
  const email = document.getElementById("campo-email").value.trim();
  const departamento = document.getElementById("campo-departamento").value;
  const tipo = document.getElementById("campo-tipo").value;
  const problema = document.getElementById("campo-problema").value.trim();

  if (!nome || !email || !departamento || !tipo || !problema) {
    mostrarMensagem("erro", "⚠️ Preencha todos os campos obrigatórios antes de abrir o chamado.");
    return;
  }

  esconderMensagens();

  // Sem envio por WhatsApp/Email e sem backend PHP.
  document.getElementById("form-suporte").reset();
  mostrarMensagem("sucesso", "✅ Chamado registrado localmente. A equipe entrará em contato internamente.");
}

function mostrarMensagem(tipo, texto) {
  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");

  if (tipo === "erro") {
    erro.textContent = texto;
    erro.style.display = "block";
    sucesso.style.display = "none";
  } else {
    sucesso.textContent = texto;
    sucesso.style.display = "block";
    erro.style.display = "none";
  }
}

function esconderMensagens() {
  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");
  if (erro) erro.style.display = "none";
  if (sucesso) sucesso.style.display = "none";
}
