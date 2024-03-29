// STRING SLICING

// const fullName = "daniel san pedro";

// let firstName = fullName.slice(0, 6);

// console.log(firstName)

// results as follows:
// daniel

// const fullName = "daniel san pedro";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7, 16);

// console.log(firstName)
// console.log(lastName)

// results as follows:
// daniel
// san pedro

// const fullName = "daniel san pedro";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7, 16);

// let firstChar = firstName.slice(0, 1);
// by using a negative number you start at the end
// let lastChar = lastName.slice(-5)

// console.log(firstChar, lastChar)

// results as follows:
// d pedro

// const fullName = "daniel san pedro";

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// console.log(firstName)

// results as follows:
// daniel

// const fullName = "daniel san pedro";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName)

// results as follows:
// daniel
// san pedro

// const email = "daniel@emial.com";

// let username = email.slice(0, email.indexOf("@"));

// console.log(username);

// results as follows:
// daniel

const email = "daniel@email.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

// results as follows:
// daniel
// email.com
