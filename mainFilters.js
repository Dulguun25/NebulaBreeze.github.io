
function initializeSelection(selector) {
    console.log("Initializing selection for:", selector);
    const selectBtn = document.querySelector(`${selector} .select-btn`),
        items = document.querySelectorAll(`${selector} .item`),
        btnText = document.querySelector(`${selector} .btn-text`);
        
    const defaultText = btnText.innerText;

    
    selectBtn.addEventListener("click", () => {
        console.log("Button clicked");
        selectBtn.classList.toggle("open");
    });

    
    items.forEach(item => {
        item.addEventListener("click", () => {
            console.log("Item clicked");
            item.classList.toggle("checked");

            
            const checked = document.querySelectorAll(`${selector} .checked`);
            btnText.innerText = checked.length > 0 ? `${checked.length} Selected` : defaultText;
            const selectedLevels = Array.from(document.querySelectorAll(`${selector} .item.checked`)).map(item => item.querySelector('.item-text').innerText);
            console.log("Selected levels:", selectedLevels);
            filterCourses(selectedLevels);
            
        });
    });
}

function filterCourses(selectedLevels) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const courseElementsAll = document.querySelectorAll(".courses-all .course");
            
            data['courses-all'].course.forEach((course, index) => {
                
                if (selectedLevels.includes(course.score) || selectedLevels.includes(course.level) || selectedLevels.includes(course.category) || selectedLevels.includes(course.condition)) {
                    courseElementsAll[index].style.display = 'inline-block';
                    updateCourseElement(courseElementsAll[index], course);
                } else {
                    courseElementsAll[index].style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}




initializeSelection(".container1");
initializeSelection(".container2");
initializeSelection(".container3");
initializeSelection(".container4");





