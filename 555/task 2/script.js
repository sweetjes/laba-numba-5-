function isArrayEqual(firstArray, secondArray) {
  if (firstArray.length === secondArray.length && Array.isArray(firstArray) && Array.isArray(secondArray)) {
    for (var i = 0; firstArray.length > i; i++) {
      if (firstArray[i] === secondArray[i]) {
        return true;
      }
    }
  } else {
    return false;
  }
}