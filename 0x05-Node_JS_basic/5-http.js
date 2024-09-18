const http = require('http');
const { readFile } = require('fs');

const serverHost = '127.1.1.1';
const serverPort = 1245;

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
        const studentTotal = totalEntries - 1;
        result += `Number of students: ${studentTotal}\n`;
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

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((result) => {
      const output = result.slice(0, -1);
      res.end(output);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

server.listen(serverPort, serverHost, () => {
});

module.exports = server;
