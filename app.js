// Basic 4
// enum, any
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Davin Wijaya",
    age: 26,
    hobbies: ["Sport", "Coding"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Sport", 1];
console.log(person.name);
person.hobbies.forEach(function (hobby) {
    console.log(hobby.toUpperCase());
});
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
function combine(n1, n2) {
    var result, n1;
    +n2;
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
