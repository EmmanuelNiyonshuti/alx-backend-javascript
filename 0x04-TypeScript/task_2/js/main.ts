// define Director interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// define Teacher interface
interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// class Director that implements DirectorInterface
class Director implements DirectorInterface{
    workFromHome(){
        return "Working from home";
    }
    getCoffeeBreak(){
        return "Getting a coffee break";
    }
    workDirectorTasks(){
        return "Getting to director tasks"
    }
}

// class Teacher that implements Teacher Interface

class Teacher implements TeacherInterface{
    workFromHome(){
        return "Cannot work from home";
    }
    getCoffeeBreak(){
        return "Cannot have a break"
    }
    workTeacherTasks(){
        return "Getting to work"
    }
}

// define createEmployee function
const createEmployee = (salary:number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500){
        return new Teacher();
    }else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// a type predicate function to check if the employee is a Director
const isDirector = (employee: Director | Teacher):employee is Director => employee instanceof Director

// function to execute work based on the employee type
const executeWork = (employee: Director | Teacher):void => {
    if (isDirector(employee)){
        console.log(employee.workDirectorTasks());
    }else{
        console.log(employee.workTeacherTasks())
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// string literal type that allow a variable to have the value Math or History only
type Subjects = "Math" | "History";

// teachClass function
const teachClass = (todayClass: Subjects):void => {
    if (todayClass === "Math"){
        console.log("Teaching Math")
    }
    if (todayClass === "History"){
        console.log("Teaching History")
    }
}
teachClass("Math")
teachClass("History")

