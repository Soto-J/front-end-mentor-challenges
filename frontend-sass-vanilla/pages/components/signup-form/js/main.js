"use strict";

const btn = document.querySelector(".btn-form");
const formInput = document.querySelectorAll("input");
const invalidIcon = document.querySelectorAll(".invalid-icon");
const invalidMsg = document.querySelectorAll(".invalid-msg");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("yo: " + invalidIcon);
    formInput.forEach((input, i) => {
        // Resets inputs before checking=
        input.classList.remove("invalid");
        invalidIcon[i].style.display = "none"
        invalidMsg[i].style.display = "none";

        // Checks to see if any inputs are missing
        if (input.validity.valueMissing === true) {
            input.classList.add("invalid");
            invalidIcon[i].style.display = "block"
            input.placeholder = "";
            invalidMsg[i].style.display = "block";
            
            if (input.id === "emailAddress") {
                input.placeholder = "email@example.com";
            }
        }
    });
});
