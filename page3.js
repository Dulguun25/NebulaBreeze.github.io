function submitForm() {
    // You can add additional logic here before submitting the form
  
    document.getElementById("couponForm").submit();
}


function initializeSelection(selector) {
    const selectBtn = document.querySelector(`${selector} .select-btn`),
    items = document.querySelectorAll(`${selector} .item`),
    btnText = document.querySelector(`${selector} .btn-text`);

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        
    });
});

}


initializeSelection(".box3-div1");
initializeSelection(".box3-div2");
initializeSelection(".box3-div3");




