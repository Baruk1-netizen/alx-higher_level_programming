# Simple Intro to NodeJS Module Scope

- Update: Here are slides for this talk at OttawaJS: "Node.JS - - Module Patterns Using Simple Examples".

- Update 2: More Node.JS Module Patterns - still fairly basic but more practical examples.

- People often ask about scope and visibility in Node.JS modules. What's visible outside the module versus local to the module? How can you write a module that automatically exports an object? And so on.

- Here are six examples showing different ways of defining things in Node.JS modules.  Not all of these are recommended but they will help explain how modules and their exports work, intuitively.

## Exporting a global function

- This module defines a global function called foo. By not putting var in front of the declaration of foo, foo is global. - This is really not recommended. You should avoid polluting the global namespace.
  
```javascript
// foo.js
foo = function () {
  console.log("foo!");
}
```

Here is an app that uses it.

```javascript
// Module supplies global function foo()
require('./foo');
foo();
```

## Exporting an anonymous function

- This module exports an anonymous function.

```javascript
// bar.js
module.exports = function() {
  console.log("bar!");
}
```

Here is an app that uses it.

```javascript
// Module exports anonymous function
var bar = require('./bar');
bar();
```

## Exporting a named function

- This exports a function called fiz.

```javascript
// fiz.js
exports.fiz = function() {
  console.log("fiz!");
}
```

Here is an app that uses it.

```javascript
// Module exports function fiz()
var fiz = require('./fiz').fiz;
fiz();
```

## Exporting an anonymous object

- This exports an anonymous object.

```javascript
// buz.js
var Buz = function() {}; 

Buz.prototype.log = function () {
  console.log("buz!");
};
module.exports = new Buz();
```

Here is an app that uses it.

```javascript
// Module exports anonymous object
var buz = require('./buz');
buz.log();
```

## Exporting a named object

- This exports an object called Baz.

```javascript
// baz.js
var Baz = function() {}; 

Baz.prototype.log = function () {
  console.log("baz!");
};

exports.Baz = new Baz();
```

Here is an app that uses it.

```javascript
// Module exports object Baz
var baz = require('./baz').Baz;
baz.log();
```

## Exporting an object prototype

This exports a prototype called Qux.

```javascript
// qux.js
var Qux = function() {}; 
Qux.prototype.log = function () {
  console.log("qux!");
};
exports.Qux = Qux;
```

Here is an app that uses it.

```javascript
// Module exports a prototype Qux
var Qux = require('./qux').Qux;
var qux = new Qux();
qux.log();
```
