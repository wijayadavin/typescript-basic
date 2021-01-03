// Basic 4
// enum, any

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role { ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 200};

const person = {
  name: "Davin Wijaya",
  age: 26,
  hobbies: ["Sport", "Coding"],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["Sport", 1];

console.log(person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

function combine(input1: number | string , input2:  number | string ) {

  const result = input1 + input2;
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');