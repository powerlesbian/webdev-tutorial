const myName = 'Anthony';

console.log(myName.length);
console.log(myName[1]);

for (let i = 0; i < myName.length; i++) {
  const char = myName[i];
  console.log(char);
}

console.log(myName.indexOf('t'));
console.log(myName.indexOf('z'));

console.log(myName.slice(0, 3));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.replace('Ant', 'Mant'));

const sentence = myName + ' is awesome!';
console.log(sentence);
const anotherSentence = `${myName} is really really awesome`;
console.log(anotherSentence);
