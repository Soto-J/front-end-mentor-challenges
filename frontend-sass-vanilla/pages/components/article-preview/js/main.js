const btnShare = document.querySelector(".card__share");
const btnShareBack = document.querySelector(".card__footer-active-share-icon");

const activeFooter = document.querySelector(".card__footer-active");

btnShare.addEventListener("click", () => {
    activeFooter.style.display = "flex";
    console.log("hello");
});

btnShareBack.addEventListener("click", () => {
    activeFooter.style.display = "none";
});
