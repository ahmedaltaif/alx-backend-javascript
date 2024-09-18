import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(databasePath)
      .then((studentsByField) => {
        const responseMessages = ['This is the list of our students'];

        const compareStrings = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
          if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
          return 0;
        };

        for (const [field, students] of Object.entries(studentsByField).sort(compareStrings)) {
          responseMessages.push([
            `Number of students in ${field}: ${students.length}.`,
            'List:',
            students.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        res.status(200).send(responseMessages.join('\n'));
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((studentsByField) => {
        let responseText = '';

        if (Object.keys(studentsByField).includes(major)) {
          const students = studentsByField[major];
          responseText = `List: ${students.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
