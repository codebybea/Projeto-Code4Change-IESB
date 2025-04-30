// Seleciona o formulário e o elemento de mensagem
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Adiciona evento de envio ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Valida os campos
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Por favor, preencha todos os campos!";
    formMessage.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Por favor, insira um e-mail válido!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent =
      "Mensagem enviada com sucesso! Obrigado, " + name + "!";
    formMessage.style.color = "green";
    form.reset(); // Limpa o formulário
  }
});
