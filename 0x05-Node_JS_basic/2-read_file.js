const fs = require('fs');

function countStudents(filePath) {
  // Dictionary to store students by their field
  const studentGroups = {};
  
  // Dictionary to store the count of students in each field
  const fieldCounts = {};
  
  // Variable to keep track of the total number of students
  let totalStudents = 0;

  try {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Split the content into lines (each line represents a student record)
    const lines = fileContent.toString().split('\n');
    
    // Loop through each line
    for (let i = 0; i < lines.length; i += 1) {
      // Only process non-empty lines
      if (lines[i]) {
        totalStudents += 1;

        // Split the line into student data (name, field, etc.)
        const studentData = lines[i].toString().split(',');

        // Add the student's name to the corresponding field group
        if (Object.prototype.hasOwnProperty.call(studentGroups, studentData[3])) {
          studentGroups[studentData[3]].push(studentData[0]);
        } else {
          studentGroups[studentData[3]] = [studentData[0]];
        }

        // Increment the count of students in the corresponding field
        if (Object.prototype.hasOwnProperty.call(fieldCounts, studentData[3])) {
          fieldCounts[studentData[3]] += 1;
        } else {
          fieldCounts[studentData[3]] = 1;
        }
      }
    }

    // Subtract 1 from total students to account for the header line
    const actualStudentCount = totalStudents - 1;

    // Log the total number of students (excluding the header)
    console.log(`Number of students: ${actualStudentCount}`);

    // Log the number of students in each field and their names
    for (const [field, count] of Object.entries(fieldCounts)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}. List: ${studentGroups[field].join(', ')}`);
      }
    }
  } catch (error) {
    // Throw an error if the file cannot be loaded
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
