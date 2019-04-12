# Tips on Writing BadJavaScript

## Coercion

Coercion is going to be your best freind on making your code more unreadable. Here are a few examples to help you out!

### ===

In javascript if we want to check if something is equal we use the '===' statement. This is great and short however it is readable. Obviously something we don't want in our BadJavaScript code.

How do we get around this?

There are two ways one with numbers, and one with strings.

#### Numbers

In javascript any number that is not 0 is true. From that we can devise if two numbers are ===. given that we have two numbers 1, 2. The most practical way to test them is with subtraction.

1 - 2 = -1 

or 

2 - 1 = 1

Either way javascript will say this is true. 

```JavaScript

if (1-2){
  return 'the numbers are not equal'
}
return 'the numbers are equal'

```

##### Strings

This is a little more complicated as === makes comparisions trivial. The best way I could think of would to use localeCompare()

```JavaScript

let a = 'test'.localCompare('test')
// a equals 1 which is true.
let b = 'test'.localCompare('t')
// b equales 0 which is false

```

This works however it is readable. we could use regex to make it less so, I mean who actually learns regex :-)

```JavaScript

let text1 = 'test';
let text2 = 'test';
text2.search(new RegExp(`^${text1}$`,'g')) //Will return 0 if it matches and -1 if there are no matches
//by specifying our our regex and using it inline our code becomes more complicated and less readable.
//fortunatly -1 is true and 0 is false so we need to use ! to flip that.

```

