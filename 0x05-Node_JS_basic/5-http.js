const http = require('http');
const { readFile } = require('fs');

const port = 1245;

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let output = '';
        const lines = data.split('\n').filter(line => line.trim().length > 0);
        lines.forEach((line, index) => {
          if (index > 0) {
            totalStudents += 1;
            const studentInfo = line.split(',');

            if (studentGroups[studentInfo[3]]) {
              studentGroups[studentInfo[3]].push(studentInfo[0]);
            } else {
              studentGroups[studentInfo[3]] = [studentInfo[0]];
            }

            if (fieldCounts[studentInfo[3]]) {
              fieldCounts[studentInfo[3]] += 1;
            } else {
              fieldCounts[studentInfo[3]] = 1;
            }
          }
        });

        output += `Number of students: ${totalStudents}\n`;

        for (const [field, count] of Object.entries(fieldCounts)) {
          output += `Number of students in ${field}: ${count}. `;
          output += `List: ${studentGroups[field].join(', ')}\n`;
        }

        resolve(output.trim());
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end();
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    countStudents(databaseFile)
      .then((output) => {
        res.end(output);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port);

module.exports = app;
