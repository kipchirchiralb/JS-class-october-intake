// An object in js

const student = {
  fullName: "John Doe",
  age: 21,
  isEnrolled: true,
  modules: ["Mathematics", "Physics", "Chemistry"],
  address: {
    county: "Nandi",
    subcounty: "Chesumei",
    ward: "Kapsuswa",
  },
  clan: "Mooi",
  submitAssignment: function sendingEmailAssignment(subject) {
    console.log("A simulation of submitting an assignment for " + subject);
  },
};
// An object is a collection of labeled related data, stored under one variable name
// an object has property:value pairs, separated by commas
// The values of an object can be of any data type including a function
// We use the dot notation to access the properties of an object
console.log(student.clan);
// the subcounty of the student
console.log(student.address.subcounty);

student.submitAssignment("math");
student.submitAssignment("comp");
console.log("what pattern can you see here? console and student");
//ASSIGNMENT:  Why are we not using the name of the functipon while calling it? - sendingEmailAssignment

// ARRAY is a special type of object used to store ordered/indexed collections/lists of items
console.log(student.modules[0]); // mathematics
console.log(student.modules[2]); // chemistry

console.log(typeof student);
console.log(typeof console);
console.table(student);
// Javascript comes with built-in objects like console, Math, Date, String, Array etc

console.log(Math.sqrt(56));
Math.round(4.7); // 5

// Whenever you crete and array using the array literal syntax [], you are creating an instance of the Array object / Inheriting from the Array 

// Whenever you create an object using the object literal syntax {}, you are creating an instance of the Object object / Inheriting from the Object

// Whenever you create a string using the string literal syntax "", you are creating an instance of the String object / Inheriting from the String