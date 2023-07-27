console.log("test");

// let, const
let age = 30;
age = 31;
console.log(age);

const age2 = 20;
// const age4; SyntaxError
// age2 = 30; TypeError
console.log(age2);

// String, number, Boolean, null, undefined
const firstName = "John";
const age3 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let e;

// concatenation
console.log("My name is " + firstName + " and I am " + age);
// template string
const hello = `My name if ${firstName} and I am ${age}`;
console.log(hello);

// string methods
const s = "Hello World";
const s2 = "crash, course, for, beginners";
console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleLowerCase());
console.log(s2.split(", "));

// arrays
const arr = new Array(1, 2, 3, 4, 5);
const arr2 = ["apples", "orange", "pears"];
const arr3 = ["apples", "orange", 10, false];
console.log(arr);
console.log(arr2);
console.log(arr3);

arr2["grapes"];
console.log(arr2);
// arr2 = []; TypeError - Assignment to constant variable.

arr2.push("mangos"); //[... ,x]
arr2.unshift("strawberries"); //[x, ...]

arr2.pop("mangos"); //[... ,del]
arr2.shift("strawberries"); //[del, ...]

// is array?
console.log(Array.isArray(arr));

//array element index
console.log(arr2.indexOf("orange"));

// Objects

const person = {
  firstName2: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
// dot notation
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// bracket notation
console.log(person["address"]["city"]);
document["createElement"]("pre");

//destructuring assignment
const { firstName2, lastName } = person;
console.log(`${firstName} ${lastName}`);
const {
  address: { city },
} = person;
console.log(city);

//adding key - value
person.email = "a@mail.com";
console.log(person);

// array of an objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompeted: true,
  },
  {
    id: 2,
    text: "Take in trash",
    isCompeted: true,
  },
  {
    id: 3,
    text: "Take off trash",
    isCompeted: false,
  },
];
console.log(todos);

// convert it to an JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//loop through array

// for loop
for (let index = 0; index < todos.length; index++) {
  const element = todos[index].text;
  console.log(element);
}

// for of loop
for (const iterator of todos) {
  console.log(iterator.isCompeted);
}

// forEach, map, filter
todos.forEach((todo) => {
  console.log(todo.text);
});

//map
const todosText = todos.map((todo) => todo.text);
console.log(todosText);

//filter
const todosCompleted = todos
  .filter((todo) => todo.isCompeted === true)
  .map((todo) => todo.text);
console.log(todosCompleted);

// conditions
const v = 4;
const t = 10;

// strict equality (===) with types checking
if (v === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// and (&&), both operands are true
const b = 6;
const n = 11;

if (b > 5 && n > 10) {
  console.log("b is more than 5 or n is more than 10");
}

// Conditional (ternary) operator
const m = 11;
const color = m > 10 ? "red" : "blue";

console.log(color);

//switch
const color2 = "green";

switch (color2) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue!");
    break;
}

// functions

function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(4, 5);

function addNums2(num1 = 1, num2 = 3) {
  console.log(num1 + num2);
}
addNums2(4, 10);

function addNums3(num1, num2 = 1) {
  console.log(num1 + num2);
}
addNums3(4);

const addNums4 = (num1 = 1, num2 = 3) => num1 + num2;
console.log(addNums4());

// OOP

// OBJECTS

// Object constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Instantiate object
const person1 = new Person("John", "Doe", "4-3-1987");
const person2 = new Person("Smith", "Dohn", "1-2-1983");

console.log(person1.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// PROTOTYPES
function NewPerson(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

NewPerson.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

NewPerson.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const newPerson1 = new NewPerson("John", "Doe", "2-11-1989");
const newPerson2 = new NewPerson("mr.", "Andersen", "1-2-1983");

console.log(newPerson1.getBirthYear());
console.log(newPerson2.getFullName());

// ES6 CLASSES
class ThePerson {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const thePerson1 = new ThePerson("mr", "Sid", "1-01-2021");
const thePerson2 = new ThePerson("mr.", "Som", "3-12-1999");

console.log(thePerson1.getBirthYear());
console.log(thePerson2.getFullName());

// DOM --------------------------------------------------
// single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));
console.log(document.querySelector(".msg"));

// multiple element
console.log(document.querySelectorAll(".item")); // node-list with array methods
console.log(document.getElementsByClassName("item")); // HTML Collection (can not use array methods!)
console.log(document.getElementsByTagName("li")); // HTML Collection (can not use array methods!)

// --------
const items = document.querySelectorAll(".item");
const ul = document.querySelector(".items");
const btn = document.querySelector(".btn");

items.forEach((item) => console.log(item));
// ul.remove(); //from DOM
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello!";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

btn.style.background = "red";
btn.style.border = "none";

// Events

// click, mouseover, mouseout...
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // console.log("click");
//   // console.log(e.target);
//   // console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
// });

// --------------------
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
