"use strict";

const ratingList = document.querySelectorAll("li");
const btnSubmit = document.querySelector(".card__ratings-btn-submit");

const cardRating = document.querySelector(".card__ratings");
const cardSubmission = document.querySelector(".card__submission");
const SubmissionSubHeader = document.querySelector(
    ".card__submission-sub-header"
);

let currentActive;

ratingList.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        // Reseting ratings to inactive
        ratingList.forEach((reset) => {
            reset.classList.remove("active");
        });
        // Setting the clicked active
        rating.classList.add("active");
        currentActive = rating.textContent;
    });
});

btnSubmit.addEventListener("click", () => {
    if (currentActive) {
        cardRating.style.display = "none";
        cardSubmission.style.display = "block";
        SubmissionSubHeader.textContent = `You selected ${currentActive} out of 5`;
    }
});
