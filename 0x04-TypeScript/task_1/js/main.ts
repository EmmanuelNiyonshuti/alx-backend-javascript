//defines teacher interface
interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string;
    [key: string]: any; //for additional properties
}

// create a teacher1 object
const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
// log teacher1 object
console.log(teacher1);

// create Directors interface that extends teacher interface
interface Directors extends Teacher {
    numberOfReports: number
}

// create director1 object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1)

// define an interface for printTeacher function
interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}
// implements printTeacher function
const printTeacher: printTeacherFunction
    = (firstName: string, lastName: string): string => 
    `${firstName.slice(0, 1)}. ${lastName}`

console.log(printTeacher("John", "Doe"));





//interface for StudentClass 
interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass implementation
class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(){
        return "Currently working"
    }
    displayName(){
        return this.firstName
    }
}
const student1 =  new StudentClass("Jane", "Doe")
console.log(student1)
