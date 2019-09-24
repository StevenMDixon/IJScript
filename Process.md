# Creating a IJS Answer to an issue

This guide aims to walk someone through the though process on creating an answer using the IJS Methodology

## Steps

This methodology can be broken down into some simple steps, however this is going to feel like solving a rubik's cube a some points.

1. Locate an issue
2. Solve the problem using plain JS
3. Apply Core IJS methodology
4. Refactor until unreadable 
5. Profit

## Locating a Problem to solve

It is pretty easy to locate an issue to solve for an example, just visit your favorite code-wars style site.

For this process we are going to be using a previous example:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

## Solve the problem using plain JS

This step can be skipped once you feel conformable with the whole process.

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

The next thing is defining out parameters we know we need to accept an array (we may need to define more parameters later on but for now one is enough) a will represent the string that is passed in.

```JavaScript
l = (a) => ();
```

At this point we know we can assume we want to loop through the array that is being passed

We could just use concatenation and divide the array into the appropriate parts

```JavaScript
l = (a) => (`(${a.slice(0,3)})${a.slice(3,6)}-${a.slice(6,10)}`);
```

kind of underwhelming for an answer, what if we loop through array using recursion?

We will need an index, and an exit point.

```JavaScript
l = (a, i=0) => i >= a.length? a: l(a, i+1);
```

This looks pretty good, we stored our index as default parameter, and we are checking if its at the end by comparing the size. If the current index is larger than the array we exit the recursion.

Now we need to check the index of so we can add the correct formatting. One way to do this would be with ternary statements, however want to keep the code small so how about we just use a object with the keys set at 0,3,6.

the function will check if the current index exists in the object or it will be ''.

We are also going to need a place to store our output since we will be creating a new variable, b.

```JavaScript
l=(a, b='', i=0)=>(i >= a.length? b: l(a, b+({0:'(',3:')',6:'-'}[i]||'')+a[i], i+1))
```

This looks like it is coming along perfectly now. we have our recursion and we are creating a new string. now for some micro optimizations

## Refactor

If you haven't checked out the Tips section of this repo now is the time to check it out [Tips](Tips.md)

first thing first lets optimize our index check expression

```JavaScript
// This looks good

({0:'(',3:')',6:'-'}[i]||'')+a[i]

// but what about

(['(',')','-'][i/3]||'')+a[i]

```

Small optimization but it saves a couple bytes, Now our function looks like this

```JavaScript

l=(a, b='', i=0)=>(i >= a.length? b : l(a, b+(['(',')','-'][i/3]||'')+a[i], i+1))

```

## Refactor 

Lets do some more refactoring, I think we can save some space on our index checking expression for when we need to exit the recursion.

```JavaScript
// Currently we are using
i >= a.length

// This can be rewritten as an expression
a[i]+i+1
```

That saves us another 5 characters! but we have to invert our logic

Now our code looks a little better

```JavaScript
l=(a, b='', i=0)=>(a[i]+i+1?l(a, b+(['(',')','-'][i/3]||'')+a[i], i+1):b)
```

## Refactor

Lets run some super fun optimizations, lets obfuscate some stuff!

Replace all numbers and strings with [] or -![]

in js [] == '' and +[] == 0

```JavaScript
l=(a, b=[], i=+[])=>(a[i]+i+1?l(a, b+(['(',')','-'][i/3]||[])+a[i], i+1):b)
```

Replace all +1 with -~1

```JavaScript
l=(a, b=[], i=+[])=>(a[i]+-~i?l(a, b+(['(',')','-'][i/3]||[])+a[i], -~i):b)
```
Replace i with something else, as programmers we already know what i is just by looking at it

```JavaScript
l=(a, b=[], f=+[])=>(a[f]+-~f?l(a, b+(['(',')','-'][f/3]||[])+a[f], -~f):b)
```

Remove all white spaces

```JavaScript
l=(a,b=[],f=+[])=>(a[f]+-~f?l(a, b+(['(',')','-'][f/3]||[])+a[f],-~f):b)
```

## Profit

This is the entire process, it's a ton of work to write code like this but the more you practice the better you will become. 

Now go forth and write the most IJS code you can!

