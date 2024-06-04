//Function to run more complex http server

const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 1245;

// Function to read CSV file asynchronously
function readCSV(filename, callback) {
    const results = { students: [] };
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (data) => results.students.push(data))
        .on('end', () => {
            callback(results.students);
        });
}

// Route for /
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', (req, res) => {
    const database = req.query.database || 'database.csv'; // Default database file name
    readCSV(database, (students) => {
        const formattedData = students.filter(student => student.firstname && student.lastname); // Filter out invalid data
        const count = formattedData.length;
        const csStudents = formattedData.filter(student => student.field === 'CS');
        const sweStudents = formattedData.filter(student => student.field === 'SWE');

        const response = `This is the list of our students\nNumber of students: ${count}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.firstname).join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.firstname).join(', ')}`;
        res.send(response);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
