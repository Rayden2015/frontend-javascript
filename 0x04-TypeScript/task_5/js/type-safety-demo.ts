// Type Safety Demonstration with Brand Convention

interface MajorCredits {
  credits: number;
  _brand: 'major';
}

interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major' as const
  };
}

// This will cause a TypeScript error:
const majorSubject: MajorCredits = { credits: 3, _brand: 'major' };
const minorSubject: MinorCredits = { credits: 2, _brand: 'minor' };

// ERROR: Argument of type 'MinorCredits' is not assignable to parameter of type 'MajorCredits'
// const result = sumMajorCredits(majorSubject, minorSubject); // ❌ COMPILE ERROR!

// This works correctly:
const anotherMajorSubject: MajorCredits = { credits: 4, _brand: 'major' };
const result = sumMajorCredits(majorSubject, anotherMajorSubject); // ✅ WORKS!
