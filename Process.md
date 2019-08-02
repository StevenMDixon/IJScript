# Creating a IJS Answer to an issue

This guide aims to walk someone through the though process on creating an answer using the IJS Methodology

## Steps

This methodology can be broken down into some simple steps, however this is going to feel like solving a rubiks cube a some points.

1. Locate an issue
2. Solve the problem using plain JS
3. Apply IJS methodology
4. Profit

## Locating a Problem to solve

It is pretty easy to locate an issue to solve for an example, just visit your favorite code-wars style site.

For this process we are going to be using a previous example:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

## Solve the problem using plain JS

This step can be skipped once you feel confortable with the whole process.

However for this instance we are going to quickly solve the problem!

```JavaScript
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
```

Very easy to read and understand, next step!

## Replace parts of readable codes and decide code flow

We have solved the problem previously but do we want to solve the problem the same way or do we want to choose different path

In the previous code we are just using a loop to replace the 'x' in a string with the correct number. 

The first thing that we need to look at before we decide to use the same answer is how can we obscure things. format obviously will stand out when writing our code. In this instance it may be better to think of a different way to solve the problem.

The reason I stated you can skip the previous step once you get used to the process is that you may find that the answer you created may not directly translate into a IJS answer.

so the first thing we should do is create our function

```JavaScript
  l = () => ();
```

`l` is a pretty simple name and defining the function as a global variable save 3 bytes.

The next thing is defining out paramaters we know we need to accept an array (we may need to define more paramaters later on but for now one is enough)

```JavaScript
  l = (a) => ();
```

At this point we know we can assume we want to loop through the array that is being passed

We could just use concatination and divide the arrary into the appropriate parts

```JavaScript
  l = (a) => (`(${a.slice(0,3)})${a.slice(3,6)}-${a.slice(6,10)}`);
```

kind of underwhelming for an answer, what if we loop through array using recursion?

We will need an index, and an exit point.

```JavaScript
  l = (a, i=0) => i >= a.length? a: l(a, i+1);
```

This looks pretty good, we stored our index as default paramter, and we are checking if its at the end by comparing the size.

Now we need to check the index of so we can add the correct formatting. One way to do this would be with ternary statements, however want to keep the code small so how about we just use a object with the keys set at 0,3,6.

We are also going to need a place to store our output since we will be creating a new variable.


```JavaScript
l = (a, i=0, b='') => (i === a.length? b: l(a, i+1, b+({0:'(',3:')',6:'-'}[i]||'')+a[i]));
```

This looks like it is coming along perfectly now. we have our recursion and we are creating a new string. now for some micro optimizations

```JavaScript
l=(a,i=0,b='')=>(a[i]+i+1>i?l(a,-~i,b+(['(',')','-'][i/3]+a[i]||a[i])):b);
```

look at all these optimizations

1. We dont need to check the arrays length since when i is greater than 10 a[i] == undefined which is false and adding to undefined === NaN
2. All i+1 or i+=1 can be replaced with -~1
3. We saved some bytes by changing the object into an array and dividing the index by 3
4. Remove all white spaces

## Fin

This is the process that I have been using to get to the answers after a while it will feel natural. Now go forth and write the most IJS code you can!

