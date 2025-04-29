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
**5. for ...in loop (for objects)**