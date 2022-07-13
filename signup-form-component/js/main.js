"use strict";

const btn = document.querySelector(".btn-form");
const formInput = document.querySelectorAll("input");
const invalidMsg = document.querySelectorAll(".invalid-msg");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    formInput.forEach((input, i) => {
        input.classList.remove("invalid");
        if (input.validity.valueMissing === true) {
            input.classList.add("invalid");
            input.placeholder = "";
            invalidMsg[i].style.display = "block";
            if (input.id === "emailAddress") {
                input.placeholder = "email@example.com";
            
            }
        }

        console.log(input);
    });
});
