const first = document.querySelector("#primera-cadena");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstC = first.textContent;
  div.innerHTML = "<p>" + firstC + "</p>";
});
