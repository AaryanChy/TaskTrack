const button = document.querySelector(".add");
const section = document.querySelector(".section");
const input = document.querySelector(".input");
const container = document.querySelector(".container");
const errorMessage = document.querySelector("#error-message");

const taskArray = [];

const storeTask = () => {
  taskArray.push(input.value);
  console.log(taskArray);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    section.innerHTML += `<div class= "card">
    <div class="taskSection">
    <h1>${input.value}</h1>
    </div>
    <div class="buttonSection">
    <button class="button"><?xml version="1.0" ?><svg height="25" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg></button>
   

    </div>
       </div>`;
    const card = section.lastChild;
    card.classList.add("animate");
    storeTask();
    input.value = "";
    errorMessage.innerHTML = "";

    //since there will be multiple buttons created of same class we use querySelectorAll
    const deleteBtn = document.querySelectorAll(".button");
    //now foe each button created we add eventListener
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target.closest(".button");
        if (button) {
          const card = button.closest(".card");
          if (card) {
            card.remove();
            storeTask();
          }
        }
      });
    });
  } else {
    errorMessage.innerHTML = "Please enter a task.";
  }
});
