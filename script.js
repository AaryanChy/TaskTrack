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
    <button class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7e1c1c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>
   

    </div>
    
       </div>`;

    const card = document.querySelectorAll(".card");
    card.forEach((item) => {
      setTimeout(() => {
        item.style.opacity = 1;
      }, 100);
    });

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
