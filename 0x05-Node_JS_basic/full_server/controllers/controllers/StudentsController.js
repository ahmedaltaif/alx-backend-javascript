import readDatabase from '../utils';

// List of valid majors supported by the system
const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  /**
   * Handles the request to get all students grouped by their fields.
   * Reads the data from the database, organizes students by their fields, 
   * and sends a response listing the number of students in each field.
   */
  static getAllStudents(request, response) {
    // The path to the database file is passed as an argument when running the server
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    // Read the database file asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // A comparison function to sort fields alphabetically, case-insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        // Loop through each field (group) of students, sort alphabetically
        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          // Format and push the response for each field group
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }

        // Send the list of students grouped by field to the client
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        // If an error occurs, send a 500 status with the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Handles the request to get students by a specific major (CS or SWE).
   * If the major is valid, retrieves and sends the list of students 
   * in the requested major.
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    // Validate that the major is one of the accepted values (CS or SWE)
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Read the database file asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        // Check if the requested major exists in the data
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          // Format the list of students in the specified major
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }

        // Send the list of students in the requested major
        response.status(200).send(responseText);
      })
      .catch((err) => {
        // If an error occurs, send a 500 status with the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
