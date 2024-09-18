import fs from 'fs';

/**
 * Reads the student data from a CSV file.
 * @param {String} dataPath - The path to the CSV file containing student data.
 * @returns {Promise} - A promise that resolves to an object containing student groups by field.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if the dataPath is provided, if not reject with an error.
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // If the dataPath is provided, read the file.
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      // Reject the promise if there is an error reading the file.
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      // Process the file if data is available.
      if (data) {
        // Split the file content into lines, trimming any extra spaces.
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');

        // Initialize an empty object to store student groups by field.
        const studentGroups = {};

        // Get the field names (e.g., firstname, lastname, etc.) from the first line (header) of the file.
        const dbFieldNames = fileLines[0].split(',');

        // Extract the student property names (everything except the last field).
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        // Loop through each line of student records (excluding the header).
        for (const line of fileLines.slice(1)) {
          // Split each line into individual student properties (e.g., firstname, lastname, age, field).
          const studentRecord = line.split(',');

          // Extract student property values excluding the last field (which is the field of study).
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);

          // Get the field of study (e.g., CS, SWE) from the last column.
          const field = studentRecord[studentRecord.length - 1];

          // If the field is not yet a key in studentGroups, initialize it as an empty array.
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }

          // Map student property names to their corresponding values.
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);

          // Push the student data (as an object) into the corresponding field group.
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        // Resolve the promise with the student groups.
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
