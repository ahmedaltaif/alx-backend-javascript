const { readFile } = require('fs');

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};
  let totalStudents = 0;
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const rows = data.toString().split('\n');
        for (let i = 0; i < rows.length; i += 1) {
          if (rows[i]) {
            totalStudents += 1;
            const studentData = rows[i].toString().split(',');
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
        const total = totalStudents - 1;
        console.log(`Number of students: ${total}`);
        for (const [field, count] of Object.entries(fieldCounts)) {
          if (field !== 'field') {
            console.log(`Number of students in ${field}: ${count}. List: ${studentGroups[field].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
