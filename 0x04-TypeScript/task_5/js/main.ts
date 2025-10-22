// Brand Convention & Nominal Typing Implementation

// Interface for Major Credits with brand property
interface MajorCredits {
  credits: number;
  _brand: 'major';  // Brand property for nominal typing
}

// Interface for Minor Credits with brand property  
interface MinorCredits {
  credits: number;
  _brand: 'minor';  // Brand property for nominal typing
}

// Function to sum Major Credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major' as const
  };
}

// Function to sum Minor Credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor' as const
  };
}

// Example usage and testing
const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };

const minorSubject1: MinorCredits = { credits: 2, _brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, _brand: 'minor' };

// Test the functions
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Major Credits:', totalMajorCredits);
console.log('Minor Credits:', totalMinorCredits);

// Demonstrate type safety - this would cause a compile error:
// const mixedCredits = sumMajorCredits(majorSubject1, minorSubject1); // ERROR!
