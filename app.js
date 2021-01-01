// Basic 3
// object, array, tupple
var person = {
    name: "Davin Wijaya",
    age: 26,
    hobbies: ["Sport", "Coding"],
    role: [2, "admin"]
};
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sport", 1];
console.log(person.name);
person.hobbies.forEach(function (hobby) {
    console.log(hobby.toUpperCase());
    console.log(hobby.map());
});
