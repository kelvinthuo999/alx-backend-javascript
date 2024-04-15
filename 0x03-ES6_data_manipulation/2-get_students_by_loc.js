export default function getStudentsByLocation(newArray, city) {
  if (Array.isArray(newArray)) {
    return newArray.filter((student) => student.location === city);
  }
  return [];
}
