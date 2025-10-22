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
