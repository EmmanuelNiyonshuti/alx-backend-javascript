interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "Kigali"
};
let student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    location: "Musanze"
};

console.log(student1, student2)
let studentsList: Student[] = new Array(student1, student2)


const container = document.createElement("div")
container.id = "table_container"
document.body.appendChild(container)

const table = document.createElement("table")

const headerRow = document.createElement("tr")
const th1 = document.createElement("th")
th1.textContent = 'first Name';
const th2 = document.createElement("th")
th2.textContent = "location"

headerRow.appendChild(th1)
headerRow.appendChild(th2)


table.appendChild(headerRow)

studentsList.forEach(student => {
    const row = document.createElement("tr")
    const td1 = document.createElement("td")
    td1.textContent = student.firstName
    const td2 = document.createElement("td")
    td2.textContent = student.location

    row.appendChild(td1)
    row.appendChild(td2)

    table.appendChild(row)
});
container.appendChild(table)
