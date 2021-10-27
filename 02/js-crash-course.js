var myName = "anthony";
let age = 35;
age = 34;
const isTeaching = true;
const isSleeping = false;

if (isTeaching) {
  console.log('Anthony likes to teach!');
} else if (isSleeping) {
  console.log('Anthony is sleeping');
} else {
  console.log('No on knows what Anthony is doing...');
}

if (age >= 30 && myName === 'anthony') {
  console.log('Anthony is an old man');
}

const hobbies = ['reading', 'video games', 'teaching'];
console.log(hobbies);

console.log(`first element: ${hobbies[0]}`);
console.log(hobbies.length);
hobbies.push('running');

for (let i = 0; i < hobbies.length; i++) {
  const hobby = hobbies[i];
  console.log(`in a for loop: ${hobby}`);
}

const person = {
  name: 'pete',
  age: 40,
  isTeaching: false,
  isSleeping: true,
};

console.log(`the person's name is ${person.name} and their age is ${person['age']}`);

function add(x, y) {
  return x + y;
}

const result = add(1, 2);
console.log(result);
