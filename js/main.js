
const myName = "Mohammed";
const myAge = 18;
const mySchool = "ROC Mondriaan";
const myCourse = "software developer";
const myClass = "B1L";
const myTeacher = "de Lange";

function showDetails() {
    console.log(`Hallo Wereld! Ik ben ${myName} en ik ben ${myAge} oud.`);
}

function showSchoolDetails() {
    console.log(`Ik volg de ${myCourse} op ${mySchool}. Ik zit in klas ${myClass} en mijn docent is ${myTeacher}.`);
}

function showFullDescription() {
    showDetails();
    showSchoolDetails();
}

showFullDescription();

function add(a, b) {
    return(a + b);
}

function subtract(a, b) {
    return(a - b);
} 

function multiply(a, b) {
    return(a * b);
}

function divide(a, b) {
    return(a / b);
}

console.log(add(3, 5));
console.log(subtract(7, 2));
console.log(divide(20, 5));
console.log(multiply(8, 4));
console.log(add(19, 42));
console.log(divide(18, 3));
console.log(subtract(17, 7));
console.log(add(18, 22));
console.log((multiply(divide(multiply(add(18, 22), subtract(19, 2)), 34), 3)));