## JavaScript
- JavaScript is a Single threaded, Synchronous language client side scripting language.

## var, let and const
- **var**
  - In JavaScript, Var, Let, and Const are keywords used to declare variables. Each keyword has its own behavior and scoping rules.
  - Var is function-scoped, meaning that a variable declared with var inside a function is accessible throughout that entire function.
  - If Var is declared outside of any function, it becomes globally scoped.
  - If you declare a variable with Var twice in the same function, the second declaration will overwrite the first.

- **Let**
  - Let is a keyword used to declare variables in JavaScript, just like Var.
  - Let is block-scoped, meaning that a variable declared with let inside a block (e.g. a loop, an if statement, or a function) is only accessible within that block.
  - If you declare a variable with Let twice in the same block, an error will be thrown.
- **Const**
  - Const is a keyword used to declare constants in JavaScript. A constant is a variable that cannot be reassigned once it has been initialized.
  - Like Let, Const is also block-scoped.
  - When you declare a constant, you must initialize it with a value.

- **Difference between var, let and const**  
  
|   **Points**    | **Var** | **Let** | **Const** |
|-------|---------|--------|-------|
|**Introduce**| Pre ES2015 | ES2015(ES6) | ES2016(ES6)|
|**Scope** | Globally scope and function scoped | Globally scope and block scope | Globally scope and block scope|
|**Hoisting** | Var is hoisted to top of its execution (either global or function) and initialized as undefined. |Let is hoisted to top of its execution (either global or block) and left uninitialized. | Const is hoisted to the top of its execution (either global or block) and left uninitialized.|
|**Redeclaration within scope** | YES | NO | NO|
|**Reassigned within scope** | YES | YES | NO |


## Scope in JavaScript
- The scope of a variable is the region of your program in which it is defined. 

**Three types of scope in JavaScript.**

- **Global Scope:** The global scope is accessible from any part of your code, including functions and other scopes. Any variable or function declared outside of a function or block of code is in the global scope. Global variables are accessible from any part of your code, but they can be modified by any part of your code as well, which can lead to unexpected behavior.

- **Local Scope:** Local scope refers to variables or functions that are declared within a function or block of code. These variables and functions are only accessible within that function or block of code. Local scope is important because it prevents naming conflicts between different parts of your code. 

- **Block Scope:** Block scope refers to variables or functions that are declared within a block of code, such as an if statement or a for loop. Block scope was introduced in ES6 with the let and const keywords. Variables declared with let or const are only accessible within the block of code they are declared in. This helps to prevent naming conflicts and can make your code easier to understand and maintain.

### Data Types
JavaScript has dynamic types, meaning variables can hold different types of data without explicitly specifying the type:

**Primitive Data Types:**

**1. Number:** Represents both integers and floating-point numbers.  
**2. String:** Represents a sequence of characters.  
**3. Boolean**: Represents true or false values.   
**4. Undefined:** Represents a variable that has been declared but not assigned a value.    
**4. Null:** Represents the intentional absence of any object value.  

**Special Data Types:**

**5. Symbol:** Represents unique identifiers.  
**6. BigInt**: Represents integers with arbitrary precision.

**Non-Premitive Data Type**
**1. Object**: Represents a collection of key-value pairs (properties and methods).  
**2. Array**: Represents a collection of elements, indexed by integers.  
**3. Function**: A reusable block of code that can be called with specific arguments.

### Operators
- Operators in JavaScript are symbols that perform operations on operands (variables or values). Here are the main types:

- **Arithmetic Operators:** Used for basic math operations.

  - Addition (+), 
  - Subtraction (-), 
  - Multiplication (*), 
  - Division (/), 
  - Remainder (%), 

- **Assignment Operators:** Assign values to variables.

    - Simple assignment (=), 
    - Addition assignment (+=), 
    - Subtraction assignment (-=), 
    - Multiplication assignment (*=), etc.

- **Comparison Operators:** Compare two values and return a boolean.

    - Equal to (==, ===), 
    - Not equal to (!=, !==), 
    - Greater than (>), 
    - Less than (<), 
    - Greater than or equal to (>=), 
    - Less than or equal to (<=).

- **Logical Operators:** Combine multiple boolean expressions.

    - Logical AND (&&), 
    - Logical OR (||), 
    - Logical NOT (!).

- **Bitwise Operators:** Manipulate bits of numbers.

  - Bitwise AND (&), 
  - Bitwise OR (|), 
  - Bitwise XOR (^), 
  - Bitwise NOT (~), 
  - Left shift (<<), 
  - Right shift (>>).

- **Unary Operators:** Operate on a single operand.

  - Unary plus (+), 
  - Unary minus (-), 
  - Logical NOT (!), 
  - typeof operator (typeof).

- **Ternary Operator:** Conditional operator that assigns a value based on a condition.

- **Syntax:** condition ? expr1 : expr2

### Conditions (Control Flow)
- In JavaScript, conditions are used to make decisions based on different conditions. They control the flow of execution within a program:

- **if Condition**  
- **if...else Statement:** Executes a block of code if a specified condition is true, otherwise executes another block of code.

```
if (condition) {
    // code block if condition is true
} else {
    // code block if condition is false
}
```
- **else if Statement:** Allows you to specify a new condition if the first condition is false.
```
if (condition1) {
    // code block if condition1 is true
} else if (condition2) {
    // code block if condition2 is true
} else {
    // code block if neither condition1 nor condition2 is true
}
```

- **Switch Statement:** Tests a variable against multiple cases and executes code based on matching cases.

```
switch (variable) {
    case value1:
        // code block if variable === value1
        break;
    case value2:
        // code block if variable === value2
        break;
    default:
        // code block if variable does not match any case
}
```
- **Ternary Operator** The ternary operator is a shorthand for an if...else statement. It evaluates a condition and returns one of two values depending on whether the condition is true or false.  
```
Syntax: 
condition ? value_if_true : value_if_false

Ex-
let result = (number % 2 === 0) ? "Even" : "Odd";
```

### Loop
- A loop is a control structure in JavaScript that allows you to repeat a block of code multiple times until a specified condition is false.  
- **Why Loop**
  - To execute code repeatedly (e.g., print numbers, process items in an array).
  - To automate repetitive tasks (e.g., generating table rows, validating form fields).
  - To iterate over arrays, strings, objects, etc.

- **Type of Loops**  
**1. for loop:** A for loop runs a block of code a specific number of times, based on a counter.  

```
Syntax
for (initialization; condition; increment) {
    // code block to execute
}

Example:
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
```
**Explanation of parts:**  
- Initialization: Set the starting value of a counter variable (e.g., let i = 0)
- Condition: The loop runs while this condition is true (e.g., i < 5)
- Increment/Decrement: Update the counter (e.g., i++ increases by 1)

**2. while loop:** A while loop repeats a block of code as long as the condition is true.  
```
Syntax
while (condition) {
    // code block to execute
}

Example

let i = 1;
while (i <= 5) {
    console.log("Number: " + i);
    i++;
}

```

**3. do ...while loop:** The do...while loop is a control structure that executes a block of code once before checking the condition — and then repeats the block as long as the condition is true.  
```
Syntax
do {
  // code block to be executed
} while (condition);

Example-
let i = 1;
do {
  console.log("Number: " + i);
  i++;
} while (i <= 5);

```

**4. for ...of loop (for arrays/iterables)**  
- **Definition:** The for...of loop is used to iterate over iterable objects such as arrays, strings, Maps, Sets, etc.  
- **Use Case:**
  - Best for looping through values in arrays or strings.
  - Cannot be used on plain objects directly (without getting their values).
```
Syntax
for (let value of iterable) {
  // code to execute
}

Example
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

```
**5. for ...in loop (for objects)**
- **Definition:** The for...in loop is used to iterate over the enumerable properties (keys) of an object.  
- **Use Case:**
  - Best for iterating over object properties.
  - Can be used on arrays, but not recommended (since order is not guaranteed).
```
Syntax
for (let key in object) {
  // code to execute
}

Example
const person = {
  name: "Alice",
  age: 25,
  city: "Delhi"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

```

### Function 
**Definition:** A function in JavaScript is a reusable block of code that performs a specific task. Functions help in organizing code, reusing logic, and making programs modular.   
```
function functionName(parameters) {
  // code to be executed
  <!-- print Value -->
  return result; // optional
}
```

- **Type of Function**
**1. Function Decleration:** A function declared with the function keyword and a name. It is hoisted, meaning you can call it before its definition.  
```
function functionName(parameters) {
  // code to execute
}
```
**2. Function Expression:**  A function assigned to a variable. It can be anonymous (no name). Not hoisted.
```
const functionName = function(parameters) {
  // code to execute
};
```
**3. Arrow Function:** A concise syntax for writing function expressions. Inherits this from its surrounding context (lexical scope).
```
const functionName = (parameters) => {
  // code to execute
};
```

**4. Anonymous Function:** A function without a name, used mostly as a callback or passed directly as an argument.  
```
function() {
  // code
}

Ex:

setTimeout(function() {
  console.log("Anonymous function executed");
}, 1000);

```

**5. Immediately Invoked Function Expression (IIFE):**  A function that runs immediately after it's defined. Used to create a private scope.   
```
(function() {
  // code
})();
```

**6. Callback Function:** A function passed as an argument to another function, and executed later.  
```
functionName(function() {
  // callback code
});
```

**7. Higher Order Function:** A higher-order function (HOF) is a function that either: Takes one or more functions as arguments, or Returns a function as its result, or both.
```
function higherOrderFunction(callbackFunction) {
  // use the callback
  callbackFunction();
}
or

function higherOrderFunction() {
  return function innerFunction() {
    // code
  };
}

Ex-

function greet(name) {
  return "Hello, " + name;
}

function processUser(callback, userName) {
  console.log(callback(userName));
}

processUser(greet, "Alice"); // Output: Hello, Alice

```

**8. Generator Function:**  A special function that can pause and resume execution using yield. Declared with function*.   
```
function* generatorFunc() {
  yield value;
}

Ex-

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

```

### Closure and Hoisting
**1. Closure:** A closure is a function that remembers the variables from its outer (lexical) scope, even after the outer function has finished executing.
- Closures allow inner functions to access variables of their parent function, even after the parent function has returned.

```
function outerFunction() {
  let outerVariable = "I'm outside!";

  return function innerFunction() {
    console.log(outerVariable);
  };
}

Ex- 
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();

increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3

```

**2. Hoisting:** Hoisting is JavaScript’s default behavior of moving declarations (variables and functions) to the top of their scope before code execution.
- Only declarations are hoisted, not initializations.
- **Note:** let and const are not hoisted the same way:
```
console.log(x); // undefined (not error)
var x = 5;

console.log(age); // ReferenceError
let age = 30;


// Function Hoisting
sayHello(); // Hello!

function sayHello() {
  console.log("Hello!");
}

```

### Array and it's Method
**- Array:** 
- An Array in JavaScript is a data structure used to store multiple values in a single variable.
- It can hold elements of any data type (numbers, strings, objects, functions, etc.).
- **Array Method**
  - **Push:** Adds one or more elements to the end of the array. 
    - Syntax `array.push(element1, element2);`
  - **Pop:** Removes the last element from the array.
    - Syntax:  `array.pop()`
  - **length:** Returns the number of elements in the array.
    - Syntax `array.length`
  - **Join:**  creates and returns a new string by concatenating all elements of an array, separated by a specified separator.
    - Ex- `let fruits = ["Apple", "Banana", "Mango"]; let result = fruits.join(" - "); console.log(result); // "Apple - Banana - Mango"`
  - **Includes:** checks if the array contains a specific value. Returns true or false.
    - Ex- `let colors = ["Red", "Green", "Blue"]; console.log(colors.includes("Green")); // true console.log(colors.includes("Purple")); // false`
  - **Sort:**  sorts the elements of an array in place and returns the sorted array. By default, it sorts alphabetically (as strings).
    - Ex- `let fruits = ["Banana", "Apple", "Mango"]; fruits.sort(); console.log(fruits); // ["Apple", "Banana", "Mango"]`
  - **Fill:** Fills all elements in an array with a static value.
    - Syntax `array.fill(value);`
  - **Slice:** Returns a shallow copy of a portion of an array.
    - Ex `let fruits = ["Apple", "Banana", "Mango"]; console.log(fruits.slice(0, 2)); // ["Apple", "Banana"]`
  - **Splice:** Changes the array by removing, replacing, or adding elements.
    - Ex: `let fruits = ["Apple", "Banana", "Mango"]; fruits.splice(1, 2, "Orange"); console.log(fruits); // ["Apple", "Orange", "Mango"]`
    - Here 1 - Start, 2 - deleteCount
  - **Find:** Returns the first element that matches the condition.
    - Ex: `let nums = [10, 20, 30]; let found = nums.find(n => n > 15); console.log(found); // 20`
  - **indexOf:** Returns the first index of a given element. Returns -1 if not found.
    - Ex: `let colors = ["Red", "Blue", "Green"]; console.log(colors.indexOf("Blue")); // 1 `
  - **Reverse:** Reverses the array in place.
    - Ex- `let nums = [1, 2, 3]; nums.reverse(); console.log(nums); // [3, 2, 1]`
  - **Shift:**  Removes the first element of an array.
    - Ex- `let items = [1, 2, 3]; items.shift(); console.log(items); // [2, 3]`
  - **Unshift:** Adds elements to the start of an array.
    - Ex- `let items = [2, 3]; items.unshift(1); console.log(items); // [1, 2, 3]`
  - **Map:**  Returns a new array by applying a function to each element.
    - Ex- `let nums = [1, 2, 3]; let doubled = nums.map(n => n * 2); console.log(doubled); // [2, 4, 6]`
  - **Filter:** Returns a new array with only elements that match a condition.
    - Ex- `let nums = [1, 2, 3, 4]; let even = nums.filter(n => n % 2 === 0); console.log(even); // [2, 4]`
  - **Reduce:** Reduces the array to a single value by accumulating results.
    - Ex- `let nums = [1, 2, 3, 4]; let sum = nums.reduce((acc, curr) => acc + curr, 0); console.log(sum); // 10`

### Object
- Represents a collection of key-value pairs (properties and methods).
- **Object Method:**
  - **Object.value():** Returns an array of a given object's own enumerable property values.
```
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
console.log(Object.keys(person));
```
  - **Object.keys():**  Returns an array of a given object's own enumerable property names.
```
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
console.log(Object.values(person)); 
```
  - **Object.assign():** Copies the values of all enumerable own properties from one or more source objects to a target object.
```
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

let additionalInfo = { country: "USA", married: false };
let updatedPerson = Object.assign({}, person, additionalInfo);

console.log(updatedPerson);
```


### Math Method
**1. Math.random():** Generates a random number between 0 (inclusive) and 1 (exclusive).
```
let randomNumber = Math.random();
console.log(randomNumber);
```

**2. Math.round():** Rounds a number to the nearest integer.
```
let roundedNumber = Math.round(3.7);
console.log(roundedNumber); // Output: 4
```

**3. Math.floor():** Rounds a number down to the nearest integer.
```
let flooredNumber = Math.floor(3.7);
console.log(flooredNumber); // Output: 3
```

**4. Math.ceil():** Rounds a number up to the nearest integer.
```
let ceiledNumber = Math.ceil(3.2);
console.log(ceiledNumber); // Output: 4
```

**5. Math.pow():** Returns the base to the exponent power, that is, `base^exponent`.
```
let powerResult = Math.pow(2, 3);
console.log(powerResult); // Output: 8 (2^3)
```

**6. Math.sqrt():** Returns the square root of a number.
```
let sqrtResult = Math.sqrt(16);
console.log(sqrtResult); // Output: 4
```

## DOM (Document Object Model) manipulation

**📌 What is the DOM?**
- The DOM (Document Object Model) represents the structure of a web page as a tree of objects.
- Each HTML element is represented as a node in the DOM tree.
- JavaScript allows us to manipulate the DOM dynamically by adding, removing, or modifying elements.

**🔹 Accessing Elements in the DOM:** To manipulate elements, we first need to select them using JavaScript.

**1️⃣ Selecting Elements by ID (getElementById):** Returns a single element with the specified id.
```
<p id="demo">Hello World</p>
<script>
    let element = document.getElementById("demo");
    console.log(element.textContent); // Output: Hello World
</script>
```

**2️⃣ Selecting Elements by Class (getElementsByClassName):**
Returns a collection (array-like) of elements with the given class.
```
<p class="text">First</p>
<p class="text">Second</p>
<script>
    let elements = document.getElementsByClassName("text");
    console.log(elements[0].textContent); // Output: First
</script>
```
**3️⃣ Selecting Elements by Tag Name (getElementsByTagName)**
Returns a collection of all elements with the given tag name (e.g., div, p).

```
<h1>Hello</h1>
<h1>World</h1>
<script>
    let headings = document.getElementsByTagName("h1");
    console.log(headings[1].textContent); // Output: World
</script>
```

**4️⃣ Selecting Elements Using Query Selectors (querySelector & querySelectorAll)**
- **querySelector(selector) →** Returns the first matching element.
- **querySelectorAll(selector) →** Returns a NodeList of all matching elements.
```
<p class="text">First</p>
<p class="text">Second</p>
<script>
    let firstElement = document.querySelector(".text");
    console.log(firstElement.textContent); // Output: First

    let allElements = document.querySelectorAll(".text");
    console.log(allElements.length); // Output: 2
</script>
```

**🔹 Modifying DOM Elements**
- Once an element is selected, we can change its content, styles, and attributes.

**1️⃣ Changing Text Content (textContent & innerHTML)**
- textContent → Changes only the text inside an element.
- innerHTML → Changes text and HTML inside an element.
```
<p id="demo">Old Text</p>
<script>
    let element = document.getElementById("demo");
    element.textContent = "New Text";
    // OR
    element.innerHTML = "<strong>New Text</strong>";
</script>
```

**2️⃣ Changing CSS Styles (style Property)**
- We can modify an element's CSS properties using JavaScript.
```
<p id="demo">Styled Text</p>
<script>
    let element = document.getElementById("demo");
    element.style.color = "red";
    element.style.fontSize = "20px";
</script>
```

**3️⃣ Changing Attributes (setAttribute & getAttribute)**
- setAttribute(name, value) → Changes an attribute value.
- getAttribute(name) → Gets an attribute value.
```
<img id="myImage" src="old.png" />
<script>
    let img = document.getElementById("myImage");
    img.setAttribute("src", "new.png"); // Change image source
    console.log(img.getAttribute("src")); // Output: new.png
</script>
```

**🔹 Handling Events in JavaScript**
- Events can be handled using different methods:

**1️⃣ Handling Click Events**
```
<button id="clickBtn">Click Me</button>

<script>
    document.getElementById("clickBtn").addEventListener("click", function() {
        alert("Button Clicked!");
    });
</script>
```

**2️⃣ Handling Mouse Events**
```
<div id="box" style="width: 200px; height: 100px; background: lightblue;"></div>

<script>
    let box = document.getElementById("box");

    box.addEventListener("mouseover", function() {
        box.style.background = "yellow";
    });

    box.addEventListener("mouseout", function() {
        box.style.background = "lightblue";
    });
</script>
```

### setTimeout & setInterval
**1. setTimeout:** setTimeout is a function that executes a function or evaluates an expression after a specified delay (in milliseconds).
- **Uses:** It's commonly used for delaying execution of code, creating animations, handling asynchronous operations, etc.
- **Ex:**
```
// Example of setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Delayed message after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");
```

**2. setInterval:** setInterval is a function that repeatedly calls a function or executes a code snippet with a fixed time delay between each call.
- **Uses:** It's used for repetitive tasks like animations, periodic updates, or polling in real-time applications.
- **Ex**
```
// Example of setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval ${count}: Executed every 1 second`);
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 executions
    }
}, 1000); // 1000 milliseconds = 1 second
```
**3. clearTimeout:** clearTimeout() is a method used to cancel a timeout that was previously set using setTimeout().
- If clearTimeout() is called before the delay completes, the scheduled function will not execute.
- **Ex:**
```
<button id="start">Start Timer</button>
<button id="cancel">Cancel Timer</button>

<script>
let timeoutId;

document.getElementById("start").addEventListener("click", () => {
    timeoutId = setTimeout(() => {
        alert("Hello after 5 seconds!");
    }, 5000);
});

document.getElementById("cancel").addEventListener("click", () => {
    clearTimeout(timeoutId);
    alert("Timer cancelled!");
});
</script>
```

## Asynchronous JavaScript
- **Asynchronous:** In JavaScript, asynchronous means that some tasks can run in the background while the rest of the code continues to execute. JavaScript is single-threaded, so it uses asynchronous behavior to handle tasks like:
  + API calls
  + Timers (setTimeout, setInterval)
  + File loading
  + User interactions

- **Synchronous Ex:** 
```
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // time-consuming loop
console.log("End");

```
- **Asynchronous Ex:**
```
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```
- **How Asynchronous Code Works in JavaScript**
  - JavaScript uses the Event Loop, Callback Queue, and Web APIs to handle asynchronous operations.
- **Common Ways to Handle Asynchronous Code**  
**1. Using Async/Await**  
**2. Using Callbacks**  
**3. Using Promises**  

### 1. Async Await
- An async keyword will be added to a function when you want that function to platform in an asynchronous way in JS.
- For this asynchronous behavior we have to write the await keyword in the line where we want the code to hold.
- **Note:** If the async keyword is not added in the function then we cannot write await in the function.
- **Ex:**
```
// Function that returns a promise after a timeout
function resolvePromise(alpha, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(alpha);
            resolve("Promise is Resolved Successfully...");
        }, timeout);
    });
}

// Async function to display vowels in order with delay
async function vowelAlpha() {
    await resolvePromise('A', 2000); // Waits for 2 seconds
    await resolvePromise('E', 3000); // Waits for 3 seconds
    await resolvePromise('I', 4000); // Waits for 4 seconds
    await resolvePromise('O', 2000); // Waits for 2 seconds
    await resolvePromise('U', 7000); // Waits for 7 seconds
}

// Start the async process
vowelAlpha();
```
### 2. Callback


- **Important Points about Callbacks**  
  - Functions are first-class citizens in JavaScript — they can be passed as values.
  - Callbacks can be synchronous or asynchronous.
  - Callback Hell: Nesting too many callbacks leads to unreadable code.
```
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Callback function executed");
});
```

### 3. Promises

```
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Success");
        }, 2000);
    });
}

fetchData().then((message) => {
    console.log("Then block:", message);
});
```