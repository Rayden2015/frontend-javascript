// Teacher interface with readonly properties and index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature for additional properties
}

// Example usage as specified
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
  department: 'Mathematics',
  salary: 75000
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Chicago',
  isActive: true,
  subjects: ['Physics', 'Chemistry']
};

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
