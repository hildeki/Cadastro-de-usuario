const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

cep.addEventListener("blur", async () => {

  const cepLimpo = cep.value.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    alert("CEP inválido");
    return;
  }

  try {

    const response = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    const data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado");
      return;
    }

    rua.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;

  } catch (error) {

    console.log("Erro ao buscar CEP", error);

  }

});

function salvarDados() {

  const dadosFormulario = {

    nome: nome.value,
    email: email.value,
    cep: cep.value,
    rua: rua.value,
    bairro: bairro.value,
    cidade: cidade.value,
    estado: estado.value

  };

  localStorage.setItem(
    "usuario",
    JSON.stringify(dadosFormulario)
  );

}

// ==========================
// CARREGAR DADOS
// ==========================
function carregarDados() {

  const dados = localStorage.getItem("usuario");

  if (dados) {

    const usuario = JSON.parse(dados);

    nome.value = usuario.nome || "";
    email.value = usuario.email || "";
    cep.value = usuario.cep || "";
    rua.value = usuario.rua || "";
    bairro.value = usuario.bairro || "";
    cidade.value = usuario.cidade || "";
    estado.value = usuario.estado || "";

  }

}

// ==========================
// SALVAR AUTOMATICAMENTE
// ==========================
document.addEventListener("input", salvarDados);

// ==========================
// CARREGAR AO ABRIR
// ==========================
window.addEventListener("load", carregarDados);