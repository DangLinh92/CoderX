function getExtensionFilename(filename) {
    // viết code ở đây.
    var arr = filename.split('.');
    return arr.pop();
  }