document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("studentForm")?.addEventListener("submit", addStudent);
    document.getElementById("assignRoomForm")?.addEventListener("submit", assignRoom);
    document.getElementById("checkoutForm")?.addEventListener("submit", checkoutStudent);
    document.getElementById("feesForm")?.addEventListener("submit", collectFees);
    displayStudents();
    displayAvailableRooms();
});

let students = JSON.parse(localStorage.getItem("students")) || [];
let rooms = JSON.parse(localStorage.getItem("rooms")) || ["101", "102", "103", "104"];

function addStudent(event) {
    event.preventDefault();
    let name = document.getElementById("studentName").value;
    let age = document.getElementById("studentAge").value;
    students.push({ name, age, room: null, feesPaid: 0 });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student added successfully!");
    displayStudents();
}

function assignRoom(event) {
    event.preventDefault();
    let name = document.getElementById("studentNameAssign").value;
    let room = document.getElementById("roomNumberAssign").value;
    let student = students.find(s => s.name === name);
    if (student) {
        student.room = room;
        localStorage.setItem("students", JSON.stringify(students));
        alert("Room assigned!");
        displayStudents();
        displayAvailableRooms();
    }
}

function checkoutStudent(event) {
    event.preventDefault();
    let name = document.getElementById("studentNameCheckout").value;
    students = students.filter(s => s.name !== name);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student checked out!");
    displayStudents();
    displayAvailableRooms();
}

function collectFees(event) {
    event.preventDefault();
    alert("Fees collected!");
}

function displayStudents() {
    let studentList = document.getElementById("studentList");
    if (studentList) {
        studentList.innerHTML = "";
        students.forEach(student => {
            let li = document.createElement("li");
            li.textContent = `${student.name} - Room: ${student.room || "Not Assigned"}`;
            studentList.appendChild(li);
        });
    }
}

function displayAvailableRooms() {
    let roomList = document.getElementById("roomList");
    if (roomList) {
        roomList.innerHTML = "";
        rooms.forEach(room => {
            let isAssigned = students.some(student => student.room === room);
            if (!isAssigned) {
                let li = document.createElement("li");
                li.textContent = `Room ${room} is available`;
                roomList.appendChild(li);
            }
        });
    }
}
