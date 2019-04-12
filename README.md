# BadJavaScript
A Testament to how bad JS can get without style guides.


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

## Log

### Day one 

#### Challenge:

Have the function take two numbers and return the greatest common factor of both numbers. For example: if params = 4 and 12, then your program should return 4. 

<details>
<summary>My Answer</summary>
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
<summary>My Answer</summary>
<br>
  
```Javascript
  const _F=((n, g=1)=>!n?g:_F(n-1, g*n))  
```
</details>
