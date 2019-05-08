# :japanese_goblin: BadJavaScript

BadJS is a testament to how unreadable code can get without style guides, comments, and general best practices.

![WTF](https://media.tenor.com/images/88d97fbeb4a01f923012b103417f7cb1/tenor.gif)

Proceed with Caution. If you do get inspired [here](https://github.com/StevenDixonDev/BadJavaScript/blob/master/Tips.md) are some useful tips on writing BadJS. 

This project has concluded and it was a very interesting process learning some of the quirks of JavaScript, However I feel if I continue down this path I may find my self falling into bad practice when coding.

> "Practice makes perfect, but imperfect when practiced poorly." ~ Some old dead guy.

## :dart: Goal

Create the most unreadable answers for common "coding test" questions and have them work properly. I would like to note before I get to far that this is written as a joke and would like to point out the challenges outlined here are the exact opposite of what someone who codes in JavaScript should do.

## :mega: Rules

- [ ] using a minifier is cheating! (half the fun is writing the code! and it wont help anyways)
- [ ] Do not use line breaks or semicolons unless necessary
- [ ] How else would you write for/while loops without recursion?
- [ ] Do not declare temporary variables outside of default parameters
- [ ] Variable and Function names should not tell the reader what the variable/function does
- [ ] Outside of the scope of the question it should be almost impossible to discern what the function or answer does.
- [ ] Do not use If statements. Ternary statements are required instead. You better nest those statements if you need an if-else.
- [ ] Don't forget to ABUSE JavaScript's type coercion
- [ ] Remember it's not a hack if it works

## Example

### Challenge

Have the function G take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string “sredoC dna dlroW olleH”. 

Normal Answer:

``` JavaScript
function G(str) {  
  return str.split("").reverse().join("");       
}
```
Minified Code:

```JavaScript
 function G(str){return str.split("").reverse().join("")}
```

BadJavaScript Answer:

``` JavaScript
const _G=(s,e,n=+Object.keys(s+' ').pop())=>(!n?e:_G(s,e+s[n],n-1))
```

We can obviously tell what a normal answer does, because its readable. No comments are needed if you know what the higher order functions from String and Array do. The bad answer is almost unreadable, no brackets no higher order functions that tell us what exactly is going on in the function just pure unreadable chaos. Without any comments or the challenge notes it would take a while to decode exactly what this function does.

## :memo: Log

### Challenge :one:

#### Challenge:

Have the function take two numbers and return the greatest common factor of both numbers. For example: if params = 4 and 12, then your program should return 4. 

<details>
<summary>Normal Answer</summary>
<br>
  
```JavaScript
const _U = (num1, num2)=>{
   let lowestNumber = 0;
   let numberToReturn = 1;
   if(num1 <= num2){
     lowestNumber = num1;
   }else{
     lowestNumber = num2;  
   }
   for(let i = 0; i <= lowestNumber; i++){
     if(num1%i === 0 && num2%i === 0){
        numberToReturn = i;
     }
   }
   return numberToReturn;
}
```

Not a perfect answer in terms of speed, however it is more readable than the bad JS answer.

</details>


<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```JavaScript
  const _U=(a,b,f=+(a<b?a:b))=>(!((!(+a%f))&&!(+b%f))?_U(b,a,f-1):f)
```


</details>

---

### Challenge :two:

#### Challenge:

Have the function take the parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
  const _F=((n, g=1)=>!n?g:_F(n-1, g*n))  
```

</details>

---

### Challenge :three:

#### Challenge:

Have the function _Q(n,m) take both parameters being passed and return the string true if m is greater than n, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
  const _Q=(n,m)=>(m>n?!!+m>n:!n-m?-1:!!+m>n)+''  
```
</details>

---

### Challenge :four:

#### Challenge:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
const _Z = (a, b=a.match(/\w+/g), i=0, f="")=>(i>(+Object.keys(b).pop())?f:_Z(a, b, i+1, f+(i?' ':'')+(b[i].lastIndexOf("")>=5?[...b[i]].reduce((h,m) =>h=m+h,""):b[i]))) 
```

</details>

---

### Challenge :five:

#### Challenge:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```JavaScript
const _O = (a,b="",i=0)=>(!(i-(+Object.keys(a).pop()+1))?b:_O(a,b+({0:'(',3:') ',6:'-'}[i]||'')+a[i],i+1))
```

</details>

---

### Challenge :six:

#### Challenge:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
const _I=(a,b=[],c=[...a].entries(),i=0)=>(r=>!(r)?b.map(u=>((+Object.keys(u).pop())?u:u+'_')):_I(a,(!(i%2)?[...b,a.substr(i,2)]:b),c,i+1))(c.next().value)
```

</details>

## :tada:	Conclusion

JavaScript is a very quirky language and can be written several different ways. Not all these ways are good, but the thing to keep in mind is that readable code is always better than non-readable code. Can you use some of the stuff from above to write your code? certainly! but good luck understanding it after a week. Code like this belongs to the realm of minifiers and it should stay like that. If you have read this far I suggest forgetting everything you have read and actually pick up a widely supported style guide and study that. Is JavaScript a bad Language? I don't think so, I think it is only as bad as you make it.

### Guides on writing actual good code!

- [Air BnB Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/)
