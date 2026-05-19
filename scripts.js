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