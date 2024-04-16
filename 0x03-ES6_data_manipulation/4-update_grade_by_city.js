export default function updateStudentGradeByCity(stdlist, city, newGrades) {
  const stdbylocation = stdlist.filter((item) => item.location === city);
  const updatedGrades = stdbylocation.map((student) => {
    const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    const grade = newGradeObj ? newGradeObj.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedGrades;
}
