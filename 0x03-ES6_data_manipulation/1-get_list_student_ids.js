export default function getListStudentIds(idArray) {
  if (Array.isArray(idArray)) {
    return idArray.map((item) => item.id);
  }
  return [];
}
