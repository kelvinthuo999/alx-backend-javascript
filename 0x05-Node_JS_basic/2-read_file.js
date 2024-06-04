//Function to read a file

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    const students = {};
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field in students) {
        students[field].push(firstname);
      } else {
        students[field] = [firstname];
      }
    });

    const totalStudents = Object.values(students).reduce((acc, cur) => acc + cur.length, 0);

    console.log(`Number of students: ${totalStudents}`);

    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
