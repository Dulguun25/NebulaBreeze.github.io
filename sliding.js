const initSlider = () => {
    const boxList = document.querySelector(".container-slider .courses");
    const slideButtons = document.querySelectorAll(".container-slider .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = boxList.clientWidth * direction;
            boxList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

}

initSlider();