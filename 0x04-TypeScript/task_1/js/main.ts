// Teacher interface definition
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional properties
}

// Director interface that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage as specified in the assignment
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Additional examples to demonstrate the interface
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  department: 'Mathematics',
  salary: 50000,
};

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);

// Director interface example
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Additional director example to demonstrate the interface
const director2: Director = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  location: 'New York',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  numberOfReports: 25,
};

console.log(director2);
