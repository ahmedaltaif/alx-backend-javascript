const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};
  let totalEntries = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let result = '';
        const rows = data.toString().split('\n');
        for (let i = 0; i < rows.length; i += 1) {
          if (rows[i]) {
            totalEntries += 1;
            const studentInfo = rows[i].toString().split(',');

            if (Object.prototype.hasOwnProperty.call(studentGroups, studentInfo[3])) {
              studentGroups[studentInfo[3]].push(studentInfo[0]);
            } else {
              studentGroups[studentInfo[3]] = [studentInfo[0]];
            }

            if (Object.prototype.hasOwnProperty.call(fieldCounts, studentInfo[3])) {
              fieldCounts[studentInfo[3]] += 1;
            } else {
              fieldCounts[studentInfo[3]] = 1;
            }
          }
        }
        const totalStudents = totalEntries - 1;
        result += `Number of students: ${totalStudents}\n`;

        for (const [field, count] of Object.entries(fieldCounts)) {
          if (field !== 'field') {
            result += `Number of students in ${field}: ${count}. `;
            result += `List: ${studentGroups[field].join(', ')}\n`;
          }
        }

        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((result) => {
    res.send(['This is the list of our students', result].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port);

module.exports = app;
