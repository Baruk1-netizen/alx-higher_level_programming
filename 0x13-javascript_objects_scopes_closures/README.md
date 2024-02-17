# JavaScript Objects, Scopes, and Closures

This repository contains solutions to the tasks outlined in the JavaScript curriculum on Objects, Scopes, and Closures.

## Table of Contents

- [JavaScript Objects, Scopes, and Closures](#javascript-objects-scopes-and-closures)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Tasks](#tasks)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [RESOURCES](#resources)
    - [JavaScript object basics](#javascript-object-basics)
    - [Objects as object properties](#objects-as-object-properties)
    - [Setting object members](#setting-object-members)
    - [What is "this"?](#what-is-this)
  - [Constructors](#constructors)
  - [Classes and constructors](#classes-and-constructors)
    - [Omitting constructor](#omitting-constructor)
    - [Inheritance](#inheritance)

## Description

This curriculum focuses on building foundational knowledge in JavaScript, particularly in the areas of objects, scopes, and closures. Each task is designed to reinforce concepts and skills related to object-oriented programming in JavaScript.

## Tasks

1. **Rectangle #0**
    - Define an empty class Rectangle.
    - Utilize class notation for defining the class.

2. **Rectangle #1**
    - Define a class Rectangle that takes width and height as constructor arguments.
    - Initialize instance attributes width and height with the provided values.

3. **Rectangle #2**
    - Similar to Rectangle #1, with additional checks:
      - If width or height is 0 or not a positive integer, create an empty object.

4. **Rectangle #3**
    - Define a class Rectangle with width and height attributes.
    - Implement a print() method to print a rectangle using the character 'X'.

5. **Rectangle #4**
    - Extend Rectangle #3 with additional methods:
      - rotate() to exchange width and height.
      - double() to multiply width and height by 2.

6. **Square #0**
    - Define a class Square that inherits from Rectangle.
    - Constructor takes size as an argument.

7. **Square #1**
    - Extend Square #0 with a method charPrint(c) to print the square using character c.

8. **Occurrences**
    - Implement a function to count occurrences of a given element in a list.

9. **Esrever**
    - Implement a function to reverse a list without using the built-in reverse method.

10. **Log Me**
    - Write a function to print the number of arguments already printed and the new argument value.

11. **Number Conversion**
    - Write a function to convert a number from base 10 to another base.

## Requirements

- Editors: vi, vim, emacs
- Operating System: Ubuntu 20.04 LTS
- Node.js version: 14.x
- Ensure code compliance with semistandard style rules.
- All files must be executable.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/waltertaya/alx-higher_level_programming.git
```

2. Change directory to the project folder:

```bash
cd alx-higher_level_programming/0x13-javascript_objects_scopes_closures
```

3. Install Node.js 14:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Install semistandard:

```bash
sudo npm install semistandard --global
```

## Usage

Execute the main files for each task using Node.js:

```bash
node 0-main.js
```

## Credits

This curriculum is a part of the ALX Higher Level Programming program.

## RESOURCES

### JavaScript object basics

- An object is a collection of related data and/or functionality.(consists of properties and methods)
- Empty object

```javascript
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

- Example

```javascript
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

- Accessing the properties and methods of the object

```javascript
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

- Methods above can be written in a simpler syntax:

```JS
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

### Objects as object properties

```JS
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

- Accessing the properties above using dot notation

```JS
person.name.first;
person.name.last;
```

- Accessing the properties above using bracket notation

```JS
person["age"];
person["name"]["first"];
```

### Setting object members

```JS
person.age = 45;
person["name"]["last"] = "Cratchit";
```

- Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members.

```JS
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

### What is "this"?

```JS
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

- The `this` keyword refers to the current object the code is being written inside — so in this case `this` is equivalent to `person`. So why not just write `person` instead?

- Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, `this` enables you to use the same method definition for every object you create.

## Constructors

- Using object literals is fine when you only need to create one object, but if you have to create more than one, as in the previous section, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.

- We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

```JS
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

- This function creates and returns a new object each time we call it. The object will have two members:

-- a property `name`
-- a method `introduceSelf()`.

- Note that `createPerson()` takes a parameter `name` to set the value of the `name` property, but the value of the `introduceSelf()` method will be the same for all objects created using this function. This is a very common pattern for creating objects.

- Now we can create as many objects as we like, reusing the definition:

```JS
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

- This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the `new` keyword. When you call a constructor, it will:

-- create a new object
-- bind `this` to the new object, so you can refer to `this` in your constructor code
-- run the code in the constructor
-- return the new object.

- Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this:

- Example of the constructor:

```JS
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

- To call `Person()` as a constructor, we use `new`:

```JS
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## Classes and constructors

- You can declare a class using the class keyword. Here's a class declaration for our Person from the previous article:

```JS
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

- This declares a class called `Person`, with:

-- a name property.
-- a constructor that takes a name parameter that is used to initialize the new object's name property
-- an introduceSelf() method that can refer to the object's properties using this.

- The `name;` declaration is optional: you could omit it, and the line `this.name = name;` in the constructor will create the `name` property before initializing it. However, listing properties explicitly in the class declaration might make it easier for people reading your code to see which properties are part of this class.

- You could also initialize the property to a default value when you declare it, with a line like `name = '';`.

- The constructor is defined using the `constructor` keyword. Just like a constructor outside a class definition, it will:

-- create a new object
-- bind this to the new object, so you can refer to this in your constructor code
-- run the code in the constructor
-- return the new object.

- Given the class declaration code above, you can create and use a new Person instance like this:

```JS
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

### Omitting constructor

- If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:

```JS
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

### Inheritance

- Given our `Person` class above, let's define the `Professor` subclass.

```JS

