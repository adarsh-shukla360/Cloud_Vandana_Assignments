function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");

  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

const inputSentence =
  "Welcome to Cloud Vandana as an Associate Software Engineer";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
