function replaceString(text, searchStr, newStr) {
  if (typeof text === 'string' && typeof searchStr === 'string' && typeof newStr === 'string') {
    if (text.indexOf(searchStr) === -1) {
      return false;
    }
    for (var i = 0; i < text.length; i++) {
      text = text.replace(searchStr, newStr);
    }
  }
  return text;
}