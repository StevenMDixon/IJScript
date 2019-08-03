# :japanese_goblin: IJScript

IJS is an attempt to write the most unreadable javascript. I have spent hours looking over code golf answers and playing with javascript coercion to create a guide on writing this *style* of code. 

This entire repo was inspired by code golf. If you don't know what code golf is check out this link [code golf](https://dev.to/healeycodes/answered-what-the-heck-is-code-golf-48pi). 

What does the **I** stand for in IJS?

Incomprehensible, indecipherable or inconceivable.

## :dart: Goal

Create a system of writing the most unreadable code possible. Random Coding challenges will be used as examples to show of the progression of the system. If you cannot follow along or are having trouble reading the code check out the [Tips page](Tips.md) or the the [Process page](Process.md) to find out how to write the code.

## Methodology

- [x] All answers should be as short and unreadable as possible.
  - Even if an answer would be shorter the more unreadable answer should be used.
- [x] All answers must be resolved in a single concise arrow function
- [x] Minifiers should never be used.
- [x] Math is your best friend at the end of the day

![WTF](https://media.tenor.com/images/88d97fbeb4a01f923012b103417f7cb1/tenor.gif)

One of the core principles of programming is writing readable code. IJS throws that to the wind and asks "What if we just wrote code that no one could read?" 

## :memo: Problems

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

Not a perfect answer in terms of speed, however it is more readable than the IJScript answer.

</details>


<details>
<summary>IJScript Answer</summary>
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
<summary>IJScript Answer</summary>
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
<summary>IJScript Answer</summary>
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
<summary>IJScript Answer</summary>
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
<summary>IJScript Answer</summary>
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
<summary>IJScript Answer</summary>
<br>
  
```Javascript
const _I=(a,b=[],c=[...a].entries(),i=0)=>(r=>!(r)?b.map(u=>((+Object.keys(u).pop())?u:u+'_')):_I(a,(!(i%2)?[...b,a.substr(i,2)]:b),c,i+1))(c.next().value)
```

</details>

---

### Challenge :seven:

#### Challenge: 


Write a funciton that counts all the occuring characters(UTF-8) in string. If you have string like this `aba` then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal `{ }`

<details>
<summary>Normal Answer</summary>
<br>
  
```Javascript
function count (string) {  
  // The function code should be here
   let test = {};
   test = [...string].reduce((acc, cur)=>{
   if(acc[cur])acc[cur] +=1;
   else acc[cur] = 1;
   return acc;
   },{})
   return test;
}
```

</details>

<details>
<summary>IJScript Answer</summary>
<br>
  
```Javascript
let z=(a,o={},i=0)=>(a[i]+i+1?z(a,((o[a[i]]+=1)||(o[a[i]]=1), o),-~i):o)
```

</details>

---

## :tada:	Conclusion

JavaScript is a very quirky language and can be written several different ways. Not all these ways are good, but the thing to keep in mind is that readable code is always better than non-readable code. Can you use some of the stuff from above to write your code? certainly! but good luck understanding it after a week. Code like this belongs to the realm of minifiers and it should stay like that. If you have read this far I suggest forgetting everything you have read and actually pick up a widely supported style guide and study that. Is JavaScript a bad Language? I don't think so, I think it is only as bad as you make it.

Why did you create this *"thing"*?

I really liked the Idea of code golfing but quickly realized that it in itself is a game and has almost no place inside of a proper workplace. I also love those 60's scifi horror movies where the evil thing is just something taken to the extreme in an impossible situation.
So this is my version of code golfing taken to an extreme. I also really like JavaScript and all the quirks that the language contains, this was a great learning experience.

### Guides on writing good code!

- [Air BnB Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/)
