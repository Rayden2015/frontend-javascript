//Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two students
const student1: Student = {
    firstName: "Nurudin",
    lastName: "Wahab",
    age: 32,
    location: "Ghana"
};

const student2: Student = {
    firstName: "Hakim",
    lastName: "Wahab",
    age: 30,
    location: "Ukraine"
};

//Put the students in an array
const studentsList: Student[] = [student1, student2];

//Create a table and add it to the page
const table = document.createElement('table');

//Loop through the students and add a row for each
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    // Add first name cell
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    // Add location cell
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    // Add the row to the table
    table.appendChild(row);
});

//Add the table to the body of the page
document.body.appendChild(table);
