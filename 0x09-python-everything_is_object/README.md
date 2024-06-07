# 0x09-python-everything_is_object

## 9.12. Cloning lists

If we want to modify a list and also keep a copy of the original, we need to be able to make a copy of the list itself, not just the reference. This process is sometimes called cloning, to avoid the ambiguity of the word copy.
`>>> a = [1, 2, 3] >>> b = a[:] >>> print b
[1, 2, 3]`

## enumerations

`numbers = [1, 2, 3, 4, 5]
for index in range(len(numbers)):
    numbers[index] = numbers[index]**2`

same as

`numbers = [1, 2, 3, 4, 5]
for index, value in enumerate(numbers):
    numbers[index] = value**2`

- enumerate generates both the index and the value associated with it during the list traversal. Try this next example to see more clearly how enumerate works:

## 9.14. List parameters

Passing a list as an argument actually passes a reference to the list, not a copy of the list. Since lists are mutable changes made to the parameter change the argument as well. For example, the function below takes a list as an argument and multiplies each element in the list by 2:

Functions which take lists as arguments and change them during execution are called modifiers and the changes they make are called side effects.

A pure function does not produce side effects. It communicates with the calling program only through parameters, which it does not modify, and a return value. Here is double_stuff written as a pure function:

## 9.19. Test-driven development (TDD)¶

Test-driven development (TDD) is a software development practice which arrives at a desired feature through a series of small, iterative steps motivated by automated tests which are written first that express increasing refinements of the desired feature.

Doctest enables us to easily demonstrate TDD. Let’s say we want a function which creates a rows by columns matrix given arguments for rows and columns.

We first setup a test for this function in a file named matrices.py:
`def make_matrix(rows, columns):
    """
      >>> make_matrix(3, 5)
      [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    """
if __name__ == '__main__':
    import doctest
    doctest.testmod()`

## 9.20. Strings and lists

Python has a command called list that takes a sequence type as an argument and creates a list out of its elements.
`>>> list("Crunchy Frog")
['C', 'r', 'u', 'n', 'c', 'h', 'y', ' ', 'F', 'r', 'o', 'g']`

There is also a str command that takes any Python value as an argument and returns a string representation of it.

As we can see from the last example, str can’t be used to join a list of characters together. To do this we could use the join function in the string module:

Two of the most useful functions in the string module involve lists of strings. The split function breaks a string into a list of words. By default, any number of whitespace characters is considered a word boundary:
string.join is the inverse of string.split. It takes two arguments: a list of strings and a separator which will be placed between each element in the list in the resultant string.

## 9.21. Glossary

1. aliases -
Multiple variables that contain references to the same object.
2. clone -
To create a new object that has the same value as an existing object. Copying a reference to an object creates an alias but doesn’t clone the object.
3. delimiter -
A character or string used to indicate where a string should be split.
4. element -
One of the values in a list (or other sequence). The bracket operator selects elements of a list.
5. index -
An integer variable or value that indicates an element of a list.
6. list -
A named collection of objects, where each object is identified by an index.
7. list traversal -
The sequential accessing of each element in a list.
8. modifier -
A function which changes its arguments inside the function body. Only mutable types can be changed by modifiers.
9. mutable type -
A data type in which the elements can be modified. All mutable types are compound types. Lists are mutable data types; strings are not.
10. nested list -
A list that is an element of another list.
11. object -
A thing to which a variable can refer.
12. pure function -
A function which has no side effects. Pure functions only make changes to the calling program through their return values.
13. sequence -
Any of the data types that consist of an ordered set of elements, with each element identified by an index.
14. side effect -
A change in the state of a program made by calling a function that is not a result of reading the return value from the function. Side effects can only be produced by modifiers.
15. step size -
The interval between successive elements of a linear sequence. The third (and optional argument) to the range function is called the step size. If not specified, it defaults to 1.
16. test-driven development (TDD) -
A software development practice which arrives at a desired feature through a series of small, iterative steps motivated by automated tests which are written first that express increasing refinements of the desired feature. (see the Wikipedia article on Test-driven development for more information.)

## 2.4.1   The Object Metaphor

nest = list(suits)
`from unicodedata import lookup
[lookup('WHITE ' + s.upper() + ' SUIT') for s in suits] ['♡', '♢', '♤', '♧']`
