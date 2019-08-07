# :mortar_board: Tips on Writing IJScript

Welcome to the tips section hopefully this will help you write some aweful javascript code.

JavaScript is a VERY quirky language, and I am going to run through some tips that will let you write some of the worst Javascript.

## preword 

There are some advanced topics in the following tips some things you may want to be well versed in.

- [Implicit coercion](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23)
- [ES6](https://www.w3schools.com/js/js_es6.asp)
- [Code Golf](https://dev.to/healeycodes/answered-what-the-heck-is-code-golf-48pi)

This tips page will try to go into some in depth info on some of these topics but if you find some of them too complex please take a read from one of the links above.

## :arrow_right: Functions

Arrow Functions or Lambda Functions will serve as the base of our IJS experience.

```JavaScript
const example =()=>()
```
Fun facts about Arrow functions

1. These functions always have an implicit returns (this removes the need to use `return`) 
2. Any thing requiring a block scope will throw an error (for/while/switch/function...) (the only exception is an object but it must be wrapped in ())
3. Everthing must be written as an expression. (this means Statements and semicolons are illegal `let i = 1;`)
4. All default variables must be written into the parameters of the function (Thank you ES6)

```JavaScript

const a = () =>('tomato')
// always returns tomato due to implicit returns
const b = () =>(let c = 'test')
// will throw an error
const d = () =>(for(){})
// will throw an error
const e = () =>(a < b? 1:2)
// `if` and such must be written as an expression
const f = (a=10) =>(a)
// perfect
```

## :capital_abcd: Coercion
 
Coercion is probably the best part of JavaScript, It makes perfectly readable code into a almagamation off odd symbols and cryptic information. Let us see what coercion can do for us! So how can we use it to make our code shorter and more unreadable.

There are two types of coercion in JavaScript: Explicit and Implicit.

Knowing both of these will be important in this section.

### === 

In javascript if we want to check if something is equal we use `==` or the `===` statement. This should be avoided when writing IJS as there are many shorter ways of checking equality in JS.

#### Numbers

In javascript during operations any number that is not 0 is `true`. This is because of implicit coercion.

From this statement we can put together a plan to check if two numbers are equal. Given that we have two numbers (1, 2). The most practical way to test for equality is to use subtraction.

* Note: A normal location that uses implicit coercion is an `if` statement, however we will not have access to these while writing IJS. Instead we will have to use explicit coercion in places where implicit coercion does not happen.

```JavaScript

console.log(!(a-b)) 
// this will log true because of the explicit coercion

```

###### the `^` operator or bitwise XOR 

`^` can also be used in this instance and is much shorter than a explicit conversion. 

XOR works by comparing the bits between two numbers if the numbers bits are the same it returns 0. 

* Note: XOR does not work with strings

```

let x = 3;
// x^3  = 0
// 7^6 = -1
 
```

##### Strings

Strings are a lot more complicated as `===` makes comparisions trivial. There are also a number of built in string functions that 
these comparision simple. We don't want simple, We want unreadable and cryptic code!

We could loop throught the string and compare them but that is gonna be hard to compare string with out loops, and we can't use `for` or `while`.

What if I told you that JavaScript had a built in operator that loops through a string without use a string function or loop?

Introducing `>` and its brother `<`!

You have probably used these guys before without even thinking about what they actually do (in the context of a string). 

```JavaScript
let n = ['bx', 'aa' ,'ab', 'a1']

n.sort((a,b) => a < b);

```
During an operation that compares two `Strings` JavaScript will loop through both strings comparing each letter.

This is perfect! So if we compare two strings and they are equal, they will be neither greater than or less than each other.

We can use this to put together this code:

```JavaScript
let a = 'test';
let b = 'Test'

(a < b || b < a)
// equals true

//this can be rewritten in many different ways
(a > b || b > a)
(b > a || a > b)

```

### Bool/String/Number Coercion

Remember that JavaScript is a weakly typed language. There are Two ways to convert different data types to other data types, Implicit and Explicit conversions.

#### To Strings

The `+` operater is the easiest and fastest way to convert any data type into a string. Another way is to use template literals as this could be considered less readable at some point.

```JavaScript

let a = false

let b = a+''
//b = 'false'

let c = `${a}`
c = 'false'
```

#### To Numbers

This is where it gets a little more complicated, because the JS compiler will automatically trigger implicit conversions in certian cases including: 

- comparison operators (`>`, `<`, `<=`,`>=`)
- bitwise operators ( `|` `&` `^` `~)
- arithmetic operators (`-` `+` `*` `/` `%`). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
- unary `+` operator
- loose equality operator `==` (incl. `!=`). 
- Note that `==` does not trigger numeric conversion when both operands are strings.


```JavaScript

+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit

+undefined     //NaN
+" 12 "        //12
+"\n"          //0
+false         //0
+true          //1
+null          //0
```

JavaScript will trim whitespaces from string before converting it to a number. (This includes `\n` and `\t`)


```Javasctipt
 +'   1   '+''
 // this a an alternative to string.trim()
```

Remember that NaN !== NaN or anything else, this is important because if you implicitly convert something to a number and JS spits out NaN all comparisions will fail.

When applying `==` to `null` or undefined, numeric conversion does not happen. `null` equals only to `null` or `undefined`, and does not equal to anything else.


#### To Bool

JavaScript implicitly converts values into bools in two cases. The first being logical contexts, and the second is triggered by logical operators. (`||` `&&` `!`)

```JavaScript

if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator

```

Logical operators such as `||` and `&&` do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.

```JavaScript

let x = 'hello' && 123;    // x === 123
let y = true && 'apple';   // y === apple
let z = false && 'orange'; // z === false

```

Empty arrays and Objects are converted to true as well. (Arrays are converted to true in general). The following always convert to false.

```JavaScript

!!('')      // false
!!0         // false
!!(-0)      // false
!!(NaN)     // false
!!(null)    // false
!!undefined // false
!!false     // false

```

## :traffic_light: If/Switch

### Ternary Statements

Because we are using concise arrow functions any statements that require a block scope are off limits.

So instead we need to write our if statements as expressions. Luckily JavaScript has a built in way of doing this with ternary
expressions.

```JavaScript

let a = 0;
let b = 1;
let c = 0;

let d = a?a:b?a:c
// what could d be? nobody knows! *its a... d = a*
```

Reading through different style guides you will notice that ternary statements are often frowned upon. Most guides will say to exclude them and some guides will advise that you can use them but do not nest them. But they are the best use case for IJS.

### Overloading `&&`/`||`

If you need quick if statements you can use `&&` or `||`. Javascript has this fun quirk where the second value in a comparision with these operators is always returned. This can be a valuable substitute for `if` statements.

```JavaScript

let a = true&&'apples';
// a === 'apples'

let b =- false||'grapes';
// b = 'grapes'

//we get some fun times when you chain them together for if else statments

let c = a && (false||b);

// what do you think c equals? its 'grapes'!

```

It is worth remembering that both sides of the comparison are evaluated before the comparison is evaluated. 

### check if a string is empty or a number is 0

A usefull tool is checking if a string is empty, this can be accomplished by overloading the `||` operator.

```JavaScript
n||0  ~  n.length === 0
```

if `n` is a non empy string or non zero number this expression will return `n` or zero which is false. 

### The Comma operator `,`

`,` is an operator? like `>` or `&&`? Yes!

What would you say `console.log(5, 10)` prints? 

`5 10` is the correct answer, how about `console.log((5, 10))`?

You would think `(5, 10)` but in fact it prints `10`.

Why? well JavaScript actually has something called the `comma operator` and it always return the farthest right item in an expression.

For instance `(1, 3, 4)` will always evaluate to `4`.

this is also referred to as chaining. Remember everything in the expression is evaluated!

```JavaScript
let a = 'apples';

// this will run but what will it return?

let d = (c&&(a||b), a+1)

//'apples1' weird right...

function example(a){
 return (a<5&&(a+=5)), a;
}

// If your answer was return `a+5` when a < 5 is true and return a when a >=5 then you are correct. Everything in the comparision is 
// evaluated only if a < 5 is true. however a is always evaluated because the compiler evaluates from left to right. Crazy right?

```

You can use this chain expressions together inside of a concise arrow function like so

```JavaScript
let r = (a=1) => (a+1, a)
// a = 2 when called
```

### switch/case
 
Well at this point it should be obvious why we cannot use `switch` statements. The curly bois `{}` refuse to do their job inside of concise functions.

So allow me to introduce you to the expressive `MapSwitch`!

```JavaScript

let a = 'sdkjfhslkhfd';

let b = ({0:'a',1:'e'}[a]||'o')
//a === 'o'  

```

The overloaded `||` is used to define a defualt statement for the switch.

This can also be expressed using an array when working with numbers

```JavaScript
let a = 10

let b = ['s','h',1][a/5]||'0'

```

In this instance the result of dividing a by 5 is used to access the index in the array. if a/5 has a remainder or the index is not specified the default is returned.

## for/of/in
  
Fortunatly there is a couple ways to iterate through things without for loops. 
 
### Iterators
 
Iterators are a fun exercise in writing unreadable code, they perfectly obfuscate what your code is doing. So what if I told you we can Iterate any thing that can be turned into an array in javascript?
 
Both `Array.prototype.values()` and `Array.prototype.entries()` return a iterator that contains the values of a string or array.
 
These are very obscure functions and it goes without saying iterators are very hard to keep up with.  
 
Let me introduce you to the equivalant of prototype.length but with Iterators
 
 ```Javascript
 
 const t=(e,d=[...e].values(),c=0)=>(r=>!(r)?c:t(e,d,c+1))(d.next().value)
 
 ```
 
 `Array.prototype.values()` is a nice little bit of code that returns an `Iterator Object` with one property, `next()`. When next hits the end of an array its value is returned as `undefined`. Using IIFE we can create functions that Iterate with out parameter or variables for an index.
 
### Recursion

Iterators are great but they add a little more overhead to a function that plain old recursion can solve in a shorter amount of code.

The same function above with recursion

```Javascript

const t=(e,c=0)=>(e[c]+c+1?t(e,-~c):c)

```

It is pretty obvious which one wins in terms of length.

This example is a good starting point for writing any IJS function that needs to loop through an array or string.

## :straight_ruler: Length Of Arrays/Strings

Normally we would use Object.length in order to find the length of arrays or strings.

But that's just not gonna work here. we need something more.... crafty.

what about string prototpye functions?

```JavaScript
let test = "ipsum";

let length = test.lastIndexOf("");
//length now equals the length of the string.
```

How does this work? well it's kind of apparent. JS starts at the end of the string searching for `""`. And Imagine that its at the end of the string!. 

This is kind of readable, would anyone suggest this instead of length? No. And unfortunately this is a string prototype function which means it wont work on Arrays.

Object.keys() is another way to hanlde the length issue. In JS Arrays and Strings are both objects which have keys. For both Arrays and strings, Their keys are indexes. So we can do something like this:

```JavaScript
  let a = +Object.keys('I am a text').pop()+1;
  //this will give you the length of a string or array
  //NOTE THAT THESE ARE KEYS WHICH START AT 0, SO IT IS NECCESARY TO ADD 1 TO GET THE ACTUAL LENGTH 
```

How does this work? Object keys returns an array of keys [1,2,3,4] for each index of a String or Array. Array.prototype.pop() returns the value of the last index of an array. then + coerces the returned item into a number.

This is being crafty however the comparision in length of code bewteen this and Object.length is quite large, so it is up to the writer if they want shorter or less readable code in this instance.

A shorter way is to abuse our friend coercion while using some funky math

```
// Given i is our index
// and a is our array or string

a[i]+i+1 

vs.

a[i] >= a.length

```

This equation will equal true until i exceeds the lenght of the array, at that point a[i] = undefined and in JS undefined + any number equals NaN. Which is false in any logical context.

## :cherries: Variable Names

For some reason the javascript allow unicode gliphs for 'Identifiers'.

For the purposes of IJS these formats are a little to long (\u0061, \u{61} both being 6 characters long)

what we really want are the glyphs that take up one character and are not very readable.

Note* while this is neat and can add some obfuscation to your code `ʘ` is just as unreadble as `a` in instances where you cannot tell what the variable is any. Also you can use character from other languages such as `ε` and `草` 

Glyphs examples:

`☉, ⊙, ಠ, ∏, Π, П`

Full list of [Glyohs](https://en.wikipedia.org/wiki/List_of_Unicode_characters)

```JavaScript 

let ಠ_ಠ = 6;

console.log(ಠ_ಠ)
// 6

```

Quick aside about Emojis.

Currently we can use Emojis as Keys in objects because they are strings. 

```Javscript
let obj = {'🧡': 'hello'}

console.log(obj['🧡'])
// hello

```

Not super useful but it adds a level of ugliness in our code.

## :eyes: Obfuscation

one of the core tenants of IJS is writing JavaScript that is harder to read. There are multiple instances where we can use math to write code that does the exact same thing in the same amount of characters or less.

### Even or Odd?

Normally we would use modulo`%` in order to determine if an number is even or odd. instead we can use bitwise operator to check, the logic will be inverted though.

```JavaScript 

n%2 === ! n|1 

n%3 === n|1

n%2 === ! n&1

```

### :sushi: x+1 x-1

I hate writing x+1 in my code, don't you?

I mean its obvious we are adding 1 to an item.

Here is a neat little trick to remove that problem:

```JavaScript

let j = -~1
// j = 2

let k = ~-1
// k = 0

```

I want to say I understand how this works but I don't so here's a link to the [resource](https://www.geeksforgeeks.org/add-1-to-a-given-number/)

### :golf: Code Golfing

If you've never heard of it, it is crazy to see some of the stuff people come up with

There are tons of replacements for common things 

Like being able to replace alot of mathematical expressions like so

```JavaScript

//Math.ceil(n)
  n%1?-~n:n

//Math.floor(n)
  ~~n
  0|n

//Math.abs(n)
  n<0?-n:n

//Math.round(n)
  n+.5|0

//Math.min(x,y)
  x<y?x:y

//Math.max(x,y)
  y<x?x:y

//check if a letter is uppercase
  'X'<{}
  'x'<{}
```

Heres the source that I ripped this from [here](https://codegolf.stackexchange.com/questions/2682/tips-for-golfing-in-javascript)


## Conclusion

This is all I have currently, I can't cover every possible situation. This has been an interesting adventure and if you have followed it all the way through I would like to thank you.

Go forth and code poorly.
