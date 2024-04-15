export default function getStudentIdsSum(newArray) {
  return newArray.reduce((sum, item) => sum + item.id, 0);
}
