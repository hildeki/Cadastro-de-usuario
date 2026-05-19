const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

cep.addEventListener("blur", async () => {
    
    const cepLimpo = cep.value.replace(/\D/g, "");
    
});