export default function hasValuesFromArray(newArray, newSet) {
  return newArray.every((item) => newSet.has(item));
}
