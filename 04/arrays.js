const words = ['I', 'love', 'pizza'];

console.log(words);
console.log(words[0]);
console.log(words.length);

console.log('------for------');
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(word);
}

words.push('!');

console.log('after push');
console.log(words);

words.pop();

console.log('after pop');
console.log(words)

words.unshift('Hey,');

console.log('after unshift');
console.log(words);

const str = words.join(' ');
console.log(str);

const sentence = 'this is a short sentence';
const arrSentence = sentence.split(' ');
console.log(arrSentence);

console.log('foreach');
words.forEach((word) => console.log(word));

console.log('for...of');
for (const word of words) {
  console.log(word);
}
