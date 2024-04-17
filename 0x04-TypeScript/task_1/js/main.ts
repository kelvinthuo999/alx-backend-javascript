interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
  
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
  
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
  
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class Student implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
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