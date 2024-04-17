interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
const studentsList: Student[] = [
    { firstName: "John", lastName: "Doe", age: 20, location: "New York" },
    { firstName: "Jane", lastName: "Smith", age: 22, location: "San Francisco" },
];

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
  
    students.forEach((student) => {
      const row = table.insertRow();
      row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    });
  
    document.body.appendChild(table);
}
  
renderTable(studentsList);