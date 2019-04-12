# BadJavaScript
A Testament to how bad JS can get without style guides, comments, or just general best practices.


## Goal

Create the most unreadable answers for common "coding test" questions and have them work properly. I would like to note before I get to far that this is written as a joke and would like to point out the challenges outlined here are the exact opposite of what someone who codes in javascript should do.


## Challenge

- [ ] Do not use semicolons unless necessary
- [ ] Do not use line breaks
- [ ] Function should try to be recursive this is not neccesary for some challenges.
- [ ] Do not declare temporary variables outside of default paramaters
- [ ] Variable and Function names should not tell the reader what the variable/function does.
- [ ] Oustide of the scope of the question it should be almost impossible to discern what the function or answer does.
- [ ] Do not use If statements. Ternary statements are required instead. You better nest those statments if you need an if-else.
- [ ] Don't forget to ABUSE JavaScript's type coercion


## Example

### Challenge

Have the function G take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

Normal Answer:

``` JavaScript
function G(str) {  
  return str.split("").reverse().join("");       
}
```
BadJavaScript Answer:

``` JavaScript
const _G=(s,e,n=+Object.keys(s+' ').pop())=>(!n?e:_G(s,e+s[n],n-1))
```

We can obviously tell what a normal answer does, because its readable. No comments are needed if you know what the higher order functions from String and Array do. The bad answer is almost unreadable, no brackets no higher order functions that tell us what exactly is going on in the function just pure unreadable chaos. Without any comments or the challenge notes it would take a while to decode exactly what this function does.

## Log

### Day one 

#### Challenge:

Have the function take two numbers and return the greatest common factor of both numbers. For example: if params = 4 and 12, then your program should return 4. 

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
  const _U=(a,b,f=+(a<b?a:b))=>(!((!(+a%f))&&!(+b%f))?_U(b,a,f-1):f)
```
</details>

---

### Day two

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

### Day three

#### Challenge:

Have the function _Q(n,m) take both parameters being passed and return the string true if m is greater than n, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 

<details>
<summary>BadJavaScript Answer</summary>
<br>
  
```Javascript
  const _Q=(n,m)=>(m>n?!!+m>n:!n-m?-1:!!+m>n)+''  
```
</details>


