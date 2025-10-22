// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Create and render table using Vanilla JavaScript
const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// Create table header
const headerRow: HTMLTableRowElement = document.createElement('tr');
const firstNameHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader: HTMLTableCellElement = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);

// Create rows for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
