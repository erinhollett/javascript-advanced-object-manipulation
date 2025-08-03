// Part 1: Understanding and Creating Objects //
// 1.1 Create an object to represent a student with properties: //
let student = {
    name: "Erin",
    age: 26,
    enrolled: true,
    courses: ["CPAN116", "CPAN111", "CPAN113", "CPAN133", "CPAN134"],
    studentInfo: function() {
      console.log(`Student name: ${this.name}, Age: ${this.age}, Is the student enrolled: ${this.enrolled}, Courses Enrolled in: ${this.courses} `);
    }
};

// 1.2 Use console.log to output: //
// The name and age properties:
console.log("Outputting the name and age:");

console.log(student.name);
console.log(student.age);
// The result of calling the method:
console.log("Outputting the studentInfo method:");
student.studentInfo();

// Part 2: Working with JSON //

//2.1 Convert the student object into a JSON string: //
let jsonString = JSON.stringify(student);
//2.2 Log the JSON string to the console: //
console.log("Outputting the JSON string")
console.log(jsonString);

//2.3 Convert the JSON string back into a JavaScript object: //
let jsonObj = JSON.parse(jsonString);
//2.4 Log the newly created object and compare it to the original: //
console.log("Outputting the JSON object")
console.log(jsonObj)

// Part 3: Using Destructuring Assignment: //
// 3.1 Use destructuring to extract the name and courses properties from the student object:
console.log("Extracting and outputting the name and course properties");
let {name} = student;
console.log(`the Extracted name is: ${name}`);

let [c1, c2, c3, c4, c5] = student.courses;
console.log(`the Extracted courses are: ${c1}, ${c2}, ${c3}, ${c4}, ${c5}`);