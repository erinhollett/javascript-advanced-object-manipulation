// Part 1: Understanding and Creating Objects //
// 1.1 Create an object to represent a student with properties: //
let student = {
    name: "Erin",
    age: 26,
    enrolled: true,
    courses: ["CPAN116", "CPAN111", "CPAN113", "CPAN133", "CPAN134"],
    studentInfo: function() {
      console.log(`Student name: ${this.name}, Age: ${this.age}, Is the student enrolled: ${this.enrolled}, Courses Enrolled in: ${this.courses} `);
    },
    addCourse: function(courseName) {
      this.courses.push(courseName);
    },
    getTotalCourses: function() {
      return this.courses.length;
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

// 3.2 Use destructuring to extract the name and courses properties from the student object:
let scores = [85, 92, 78, 90];
console.log("Logging the first two scores:")
console.log(scores[0]);
console.log(scores[1]);

// Part 4: The Spread Operator: //
// 4.1 Clone the student object using the spread operator:
console.log("Copied Object:")
let copiedObj = {...student};
console.log(copiedObj);
// 4.2 Add a new property (e.g., graduationYear) to the cloned object and log it:
console.log("Modified Copied Object:")
let copiedObg = {...student, gradYear: 2026};
console.log(copiedObg);

// 4.3 Merge two arrays:
let newCourses = ["CPAN144", "CPAN121", "CPAN112", "CPAN131"];
student.courses = [...student.courses, ...newCourses];
console.log(`New courses: ${student.courses}`);

// Part 5: Object Methods: //
// 4.1 Add a method to the student object to dynamically add a new course to the courses array:
console.log("Adding a new course (GNED101)")
student.addCourse("GNED101");
//4.2: Add another method to calculate and return the total number of courses:
console.log("Getting the method to get total student courses");
console.log(student.getTotalCourses());