let students = [
  {
    name: "john",
    age: 28,
    grades: [70, 80, 90],
    hobbies: ["reading", "painting"],
  },
  {
    name: "james",
    age: 27,
    grades: [85, 80, 95],
    hobbies: ["swimming", "gyming"],
  },
  {
    name: "Alice",
    age: 28,
    grades: [90, 85, 85],
    hobbies: ["swimming", "gyming"],
  },
];

function printGradeAverageByName(studentName) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      let grades = students[i].grades;
      let sum = 0;
      for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      let average = sum / grades.length;
      console.log(`Average of grades for ${studentName}: ${average}`);
    }
  }
}

printGradeAverageByName("john");
printGradeAverageByName("Alice");
printGradeAverageByName("james");

function findTopstudents() {
  let highAverageStudents = [];

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let sum = 0;
    let grades = student.grades;
    for (let j = 0; j < grades.length; j++) {
      sum += grades[j];
    }
    let average = sum / grades.length;
    if (average > 85) {
      highAverageStudents.push(student);
    }
  }

  return highAverageStudents;
}

console.log(findTopstudents());
