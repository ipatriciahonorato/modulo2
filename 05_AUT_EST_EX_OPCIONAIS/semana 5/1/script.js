function conVowUpp(str) {
  var N = str.length;

  for (var i = 0; i < N; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      document.write(str[i].toUpperCase());
    } else {
      document.write(str[i]);
    }
  }
}
 
var str = "mangueira";
conVowUpp(str);