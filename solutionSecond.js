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

function calculateGradeAverageByName(name) {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.name === name) {
      let gradeSum = 0;
      const grades = student.grades;

      for (let j = 0; j < grades.length; j++) {
        gradeSum += grades[j];
      }

      const gradeAverage = gradeSum / grades.length;
      return gradeAverage;
    }
  }

  return null;
}

console.log(calculateGradeAverageByName("John"));

function getStudentsWithHighAverage() {
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

let studentsWithHighAverage = getStudentsWithHighAverage();
console.log(studentsWithHighAverage);

function addHobbyToStudent(studentName, hobby) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      students[i].hobbies.push(hobby);
      console.log(`Added hobby '${hobby}' to ${studentName}`);
      return;
    }
  }
  console.log(`Student ${studentName} not found`);
}

addHobbyToStudent("john", "coding");
addHobbyToStudent("Alice", "photography");
addHobbyToStudent("Jane", "drawing");

function updateStudentInformation(studentName, updatedInfo) {
  let found = false;

  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      found = true;

      if (updatedInfo.name) {
        students[i].name = updatedInfo.name;
      }
      if (updatedInfo.age) {
        students[i].age = updatedInfo.age;
      }
      if (updatedInfo.grades) {
        students[i].grades = updatedInfo.grades;
      }
      if (updatedInfo.hobbies) {
        students[i].hobbies = updatedInfo.hobbies;
      }

      console.log(`Updated information for ${studentName}`);
      break;
    }
  }

  if (!found) {
    console.log(`Student ${studentName} not found`);
  }
}

// Example usage:
updateStudentInformation("john", { name: "John Doe", age: 30 });
updateStudentInformation("Alice", {
  grades: [95, 90, 92],
  hobbies: ["swimming", "reading"],
});
updateStudentInformation("Jane", { name: "Jane Smith" });
