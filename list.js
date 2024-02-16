fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const courseElements = document.querySelectorAll(".container-slider .course");
        const courseElementsAll = document.querySelectorAll(".courses-all .course"); // Select all course elements under .courses-all
        
        data.courses.course.forEach((course, index) => {
            updateCourseElement(courseElements[index], course);
        });

        data['courses-all'].course.forEach((course, index) => {
            updateCourseElement(courseElementsAll[index], course); // Update course elements under .courses-all
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function updateCourseElement(element, course) {
    element.querySelector(".title").innerText = course.title;
    element.querySelector(".teacherName").innerText = course.teacherName;
    element.querySelector(".score span").innerText = course.score;
    element.querySelector(".seen span").innerText = course.seen;
    element.querySelector(".level").innerText = course.level;
    element.querySelector(".time").innerText = course.time;
    element.querySelector(".lessons").innerText = course.lessons;
    element.querySelector(".price").innerText = course.price;
    element.querySelector(".price-before").innerText = course['price-before'];
}
