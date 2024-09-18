const fs = require('fs');

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};

  let totalStudents = 0;
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        totalStudents += 1;

        const studentData = lines[i].toString().split(',');


        if (Object.prototype.hasOwnProperty.call(studentGroups, studentData[3])) {
          studentGroups[studentData[3]].push(studentData[0]);
        } else {
          studentGroups[studentData[3]] = [studentData[0]];
        }


        if (Object.prototype.hasOwnProperty.call(fieldCounts, studentData[3])) {
          fieldCounts[studentData[3]] += 1;
        } else {
          fieldCounts[studentData[3]] = 1;
        }
      }
    }

    const actualStudentCount = totalStudents - 1;

    console.log(`Number of students: ${actualStudentCount}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}. List: ${studentGroups[field].join(', ')}`);
      }
    }
  } catch (error) {

    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
