// Basic 3
// object, array, tupple (strict declare except push), enum

const person: {
  name: string;
  age: number;
  hobbies: ["Sport", "Coding"];
  role: [number, string];
} = {
  name: "Davin Wijaya",
  age: 26,
  hobbies: ["Sport", "Coding"],
  role: [2, "admin"],
};

person.role = [0, "admin", "user"];

let favoriteActivities: any[];
favoriteActivities = ["Sport", 1];

console.log(person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
  console.log(hobby.map());
});
