const person = {
  name: 'Anthony',
  age: 35,
  isTeaching: true,
  hobbies: ['reading', 'video games'],
  education: {
    highSchool: {
      name: 'some high school',
    },
    college: {
      name: 'MIT',
    }
  },
  speak: function () {
    console.log(`Hello class! My name is ${this.name}.`);
  }
}

console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.hobbies[1]);
console.log(person.education.college.name);

person.speak();

for (const key in person) {
  const value = person[key];
  console.log(key, value);
}

const keys = Object.keys(person);
console.log(keys);
