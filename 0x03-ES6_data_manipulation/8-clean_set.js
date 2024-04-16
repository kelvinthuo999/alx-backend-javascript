export default function cleanSet(set, startString) {
  const filteredArray = Array.from(set).filter((item) => item.startsWith(startString));
  return filteredArray.join('-').replace(new RegExp(`^${startString}`), '');
}
