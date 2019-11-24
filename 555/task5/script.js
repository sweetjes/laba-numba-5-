
function check(data, expectedType) {
  if (expectedType === 'null') {
    return data === null;
  }
  if (expectedType === 'array') {
    return Array.isArray(data);
  }
  if (expectedType === typeof (data) && !(data === null) && !Array.isArray(data)) {
    return true;
  }
  return false;
}