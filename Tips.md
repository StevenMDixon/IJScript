# Tips on Writing BadJavaScript

## Coercion

<details>
<summary>View</summary>
 
Coercion is going to be your best freind on making your code more unreadable. Here are a few examples to help you out!

### === or the 'Strict Equal'


In javascript if we want to check if something is equal we use the '===' statement. This is great and short however it is readable. Obviously something we don't want in our BadJavaScript code.

How do we get around this?

There are two ways one with numbers, and one with strings.

#### Numbers

In javascript any number that is not 0 is true. From that we can devise if two numbers are ===. given that we have two numbers 1, 2. The most practical way to test them is with subtraction.

1 - 2 = -1 or 2 - 1 = 1 Either way javaSricpt will evaluate it to true.

2 - 2 = 0  A number that is subtracted from itself is always 0 which is always false.

```JavaScript

if (1-2){
  if any number but 0
  return 'the numbers are not equal'
}
// if 0
return 'the numbers are equal'

```

##### Strings

Strings are a lot more complicated as === makes comparisions trivial. The best way I could think of would to use localeCompare().

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
//-1 is true and 0 is false so we need to use ! to flip that.

```

### + 

The + sign is a fun little thing in javascript. Need a integer from a string use +. Need a string from anything? use +''.

```JavaScript

let a = +"1"
//a = 1 

let b = false+""
//b = "false"

```

'+ is a very powerfull tool indeed. It allows us to use coercion effectively. 

</details>
  
## Functions

<details>
<summary>View</summary>
</details>

## If/Switch

<details>
<summary>View</summary>
</details>

## for/of/in

<details>
<summary>View</summary>
</details>

## Length Of Arrays/Strings

<details>
<summary>View</summary>


Normally we would use Object.length in order to find the length of arrays or strings. As this is bad javascript there is a better way. And its name is Object.keys(). In JS Arrays and Strings are both objects which have keys. An arrays keys are its 

```JavaScript
  
  let a = +Object.keys('I am a text').pop();
  //this will give you the length of a string or array
  //NOTE THAT THESE ARE KEYS WHICH START AT 0, SO IT IS NECCESARY TO ADD 1 TO GET THE ACTUAL LENGHT 
 
```

How does this work? Object keys returns an array of keys [1,2,3,4] for each index of a String or Array. Array.prototype.pop() returns the last index of an array. then + makes sure the returned item is an integer.

</details>


