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
// The name and properties:
console.log(student.name);
console.log(student.age);
// The result of calling the method:
student.studentInfo();