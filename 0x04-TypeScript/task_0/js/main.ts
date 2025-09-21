interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles"
  }
];

function createStudentTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const lastNameHeader = document.createElement('th');
  const ageHeader = document.createElement('th');
  const locationHeader = document.createElement('th');
  
  firstNameHeader.textContent = 'First Name';
  lastNameHeader.textContent = 'Last Name';
  ageHeader.textContent = 'Age';
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(ageHeader);
  headerRow.appendChild(locationHeader);
  
  tbody.appendChild(headerRow);
  
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const locationCell = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = student.age.toString();
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', createStudentTable);
