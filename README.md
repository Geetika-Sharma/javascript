# Javascript
JavaScript is a widely-used programming language that is primarily used for web development, both on the client-side and server-side. It is a versatile language that allows developers to create interactive and dynamic websites. Here are some key points about JavaScript:

1. **Client-Side and Server-Side Language**: JavaScript is commonly used as a client-side language, running directly in the web browser to enhance web pages with interactive elements, user interfaces, and dynamic content. It can also be used as a server-side language through platforms like Node.js, allowing developers to build server-side applications.

2. **Syntax**: JavaScript has a C-style syntax that is similar to other programming languages like C, C++, and Java. It is an object-oriented language, but it also supports functional programming concepts.

3. **Dynamic and Weakly Typed**: JavaScript is a dynamically-typed language, which means you don't need to explicitly define variable types. It is also weakly typed, allowing variables to change their data type during runtime.

4. **Event-Driven Programming**: JavaScript is designed to work with events, enabling developers to create event-driven applications. This is particularly useful in web development, where user interactions trigger events.

5. **Libraries and Frameworks**: JavaScript has a vast ecosystem of libraries and frameworks that facilitate various tasks, such as DOM manipulation, AJAX requests, form validation, and more. Some popular libraries include jQuery, React.js, Angular, and Vue.js.

6. **Browser Compatibility**: Modern web browsers all support JavaScript, making it a cross-platform language for web development. However, browser compatibility issues can arise, and developers often use tools like Babel to transpile modern JavaScript code into older versions for broader compatibility.

7. **Security Considerations**: As JavaScript executes on the client-side, it can be vulnerable to security risks like cross-site scripting (XSS) attacks. Developers need to be cautious and follow best practices to secure their JavaScript code.

8. **JSON**: JavaScript Object Notation (JSON) is a data interchange format that is based on a subset of JavaScript. It is widely used for data exchange between servers and clients.

In summary, JavaScript is a powerful and flexible language that is fundamental to web development. It enables developers to create interactive and engaging web experiences and is continuously evolving with new language features and standards. As such, it plays a crucial role in shaping the modern web.

# Pre-requisites
Install prompt-sync

```
npm install prompt-sync
```

## Variable declaration
In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords. Each keyword has its own scoping rules and use cases.

1. Using `var`:
   The `var` keyword is the oldest way to declare variables in JavaScript. Variables declared with `var` are function-scoped or globally scoped if declared outside of a function. It is recommended to use `let` or `const` instead of `var` due to its less predictable behavior.

```javascript
var age = 30;
function printAge() {
  var age = 40; // This is a separate variable, not affecting the outer 'age'
  console.log(age); // Output: 40
}
console.log(age); // Output: 30
```

2. Using `let`:
   The `let` keyword was introduced in ECMAScript 6 (ES6) and provides block-scoping. Variables declared with `let` are only accessible within the block in which they are defined.

```javascript
let age = 30;
if (true) {
  let age = 40; // This is a separate variable, not affecting the outer 'age'
  console.log(age); // Output: 40
}
console.log(age); // Output: 30
```

3. Using `const`:
   The `const` keyword also introduced in ES6, is used to declare constants, i.e., variables that cannot be reassigned after initialization. Like `let`, `const` is block-scoped.

```javascript
const age = 30;
// age = 40; // Error: Assignment to constant variable

if (true) {
  const age = 40; // This is a separate constant, not affecting the outer 'age'
  console.log(age); // Output: 40
}
console.log(age); // Output: 30
```

It is a good practice to use `const` whenever possible for variables that should not be reassigned. If you know the variable will change, use `let`, and try to avoid using `var` due to its legacy behavior.

## Conditionals 
They are used to make decisions in your code based on certain conditions. The most common conditional statements are `if`, `else if`, and `else`. These allow you to execute different blocks of code depending on whether a condition evaluates to true or false. Additionally, you can use the ternary operator for simple conditional assignments.

1. `if` statement:
The `if` statement allows you to execute a block of code if the given condition is true.

```javascript
const age = 18;

if (age >= 18) {
  console.log('You are an adult.');
}
```

2. `else` statement:
The `else` statement is used along with `if` to execute a block of code if the initial condition is false.

```javascript
const age = 16;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}
```

3. `else if` statement:
You can use the `else if` statement to check multiple conditions, and the first true condition's block will be executed.

```javascript
const score = 85;

if (score >= 90) {
  console.log('A grade');
} else if (score >= 80) {
  console.log('B grade');
} else if (score >= 70) {
  console.log('C grade');
} else {
  console.log('Fail');
}
```

4. Ternary Operator (Conditional Operator):
The ternary operator is a shorthand way of writing simple if-else conditions for assigning values to variables.

```javascript
const isAdult = age >= 18 ? true : false;
console.log(isAdult);
```

In this example, the variable `isAdult` will be assigned `true` if the `age` is greater than or equal to 18, and `false` otherwise.

5. Switch Statement:
The `switch` statement allows you to perform multi-way branching based on the value of an expression.

```javascript
const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('It\'s the start of the week.');
    break;
  case 'Friday':
    console.log('It\'s almost the weekend!');
    break;
  default:
    console.log('It\'s a regular day.');
}
```

In this example, the code will print different messages based on the value of the `day` variable.

## `Math.random()`
The `Math.random()` function is a built-in method that generates a pseudo-random number between 0 (inclusive) and 1 (exclusive). It means that the number returned will be greater than or equal to 0 but less than 1.

Here's how you can use `Math.random()` to generate random numbers:

```javascript
// Generate a random number between 0 and 1 (exclusive of 1)
const randomNumber = Math.random();
console.log(randomNumber); // Output: 0.12345 (example, it will be a different number each time you run)

// Generate a random integer between 0 and 9 (inclusive)
const randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger); // Output: 0 to 9 (random)

// Generate a random number between a specified range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const randomNumInRange = getRandomNumber(5, 15);
console.log(randomNumInRange); // Output: A random number between 5 (inclusive) and 15 (exclusive)
```

By multiplying `Math.random()` with a range and adding the minimum value, you can generate random numbers within that range. The `Math.floor()` function is used to round the result down to the nearest integer when generating random integers.

## Iteration
In JavaScript, loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including:

1. `for` loop:
The `for` loop is the most common type of loop in JavaScript. It allows you to define an initialization, a condition, and an increment (or decrement) expression.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

2. `while` loop:
The `while` loop will repeatedly execute the block of code as long as the specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

3. `do-while` loop:
The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body will execute at least once before checking the condition.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

4. `for...of` loop:
The `for...of` loop is used to iterate over elements in an iterable object (e.g., arrays, strings, maps, sets).

```javascript
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}
```

5. `for...in` loop:
The `for...in` loop is used to loop through the keys (property names) of an object.

```javascript
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
  console.log(key, person[key]);
}
```

The `for` loop is commonly used for a fixed number of iterations, while `while` and `do-while` loops are more suitable when the number of iterations depends on a condition. The `for...of` and `for...in` loops are helpful for iterating over elements in collections or properties of objects, respectively.
