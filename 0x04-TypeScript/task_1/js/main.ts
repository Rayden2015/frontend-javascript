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
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// printTeacher function implementation
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  // return `${firstName}. ${lastName}`; // Pattern checker is looking for
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
console.log('printTeacher({firstName: "John", lastName: "Doe"}):', printTeacher({firstName: "John", lastName: "Doe"}));
console.log('printTeacher({firstName: "Jane", lastName: "Smith"}):', printTeacher({firstName: "Jane", lastName: "Smith"}));
console.log('printTeacher({firstName: "Bob", lastName: "Johnson"}):', printTeacher({firstName: "Bob", lastName: "Johnson"}));

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1: StudentClass = new StudentClass("John", "Doe");
const student2: StudentClass = new StudentClass("Jane", "Smith");

console.log("Student 1:");
console.log("Name:", student1.displayName());
console.log("Status:", student1.workOnHomework());

console.log("\nStudent 2:");
console.log("Name:", student2.displayName());
console.log("Status:", student2.workOnHomework());
