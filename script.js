const button = document.querySelector(".add");
const section = document.querySelector(".section");
const input = document.querySelector(".input");

button.addEventListener("click", (e) => {
  e.preventDefault();

  section.innerHTML += `<div class= "card">
  <h1>${input.value}</h1>
  </div>`;
  input.value = " ";
});
