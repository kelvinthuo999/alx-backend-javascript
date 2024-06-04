// Function to read a file

const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.trim().split('\n');
                const students = {};

                lines.forEach(line => {
                    const fields = line.split(',');
                    const field = fields[fields.length - 1].trim();

                    if (field !== 'field' && field !== '') {
                        if (!students[field]) {
                            students[field] = [];
                        }
                        students[field].push(fields[0].trim());
                    }
                });

                console.log(`Number of students: ${lines.length - 1}`);
                for (const field in students) {
                    console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
                }
                resolve();
            }
        });
    });
}

module.exports = countStudents;
