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

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher function implementation
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
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

// Test the printTeacher function
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe"));
console.log('printTeacher("Jane", "Smith"):', printTeacher("Jane", "Smith"));
console.log('printTeacher("Bob", "Johnson"):', printTeacher("Bob", "Johnson"));
