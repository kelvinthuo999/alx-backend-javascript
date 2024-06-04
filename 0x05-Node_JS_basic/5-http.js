const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    if (!database) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Database file not provided');
      return;
    }

    const filePath = path.resolve(database);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Cannot load the database');
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter(line => line).map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, field };
      });

      const studentCount = students.length;
      const csStudents = students.filter(student => student.field === 'CS');
      const sweStudents = students.filter(student => student.field === 'SWE');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${studentCount}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.firstname).join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.firstname).join(', ')}\n`);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
