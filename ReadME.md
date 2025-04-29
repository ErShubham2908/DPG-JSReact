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