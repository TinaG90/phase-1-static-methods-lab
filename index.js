class Formatter {
  constructor(string) {
    this.string = string;
  }
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\'\s]/g, "");
  }
  static titleize(string) {
    const words = string.toLowerCase().split(" ");
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
      "is",
    ];
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    return titleizedWords.join(" ");
  }
}

let newString = "hello the world is awesome";
const capped = Formatter.titleize(newString);
console.log(capped);
