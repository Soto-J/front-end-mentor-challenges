"use strict";

const ratingList = document.querySelectorAll("li");
const btnSubmit = document.querySelector(".card__btn-submit");

ratingList.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        // Reseting ratings to inactive
        ratingList.forEach((reset) => {
            reset.classList.remove("active");
        });
        // Setting the clicked active
        rating.classList.add("active");
    });
});

btnSubmit.addEventListener("click", () => {
    ratingList.forEach((rating) => {
        if (rating.classList.contains("active")) {
            console.log("Hello");
        }
    });
});
