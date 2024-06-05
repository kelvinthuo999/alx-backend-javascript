// Function to read a file

const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(dataPath, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const studentGroups = {};
    const [fieldNames, ...studentRecords] = lines.map((line) => line.split(','));
    const fieldCount = fieldNames.length;
    const studentPropNames = fieldNames.slice(0, fieldCount - 1);

    studentRecords.forEach((record) => {
      const field = record[fieldCount - 1];
      const studentPropValues = record.slice(0, fieldCount - 1);
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const student = {};
      studentPropNames.forEach((propName, idx) => {
        student[propName] = studentPropValues[idx];
      });
      studentGroups[field].push(student);
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((total, group) => total + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentGroups)) {
      const studentNames = students.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
