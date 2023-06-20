import verificar from "./verificador";

const first = document.querySelector("#primera-cadena");
const form = document.querySelector("#verificar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstC = parseInt(first.textContent);
  div.innerHTML = "<p>" + verificar(firstC) + "</p>";
});
