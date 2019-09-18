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
  const u=(a,b,f=+(a<b?a:b))=>(!((!(+a%f))&&!(+b%f))?u(b,a,f-1):f)
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
  const f=((n, g=1)=>!n?g:f(n-1, g*n))  
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
  const q=(n,m)=>(m>n?!!+m>n:!n-m?-1:!!+m>n)+''  
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
const z=(a, b=a.match(/\w+/g), i=0, f="")=>(i>(+Object.keys(b).pop())?f:z(a, b, i+1, f+(i?' ':'')+(b[i].lastIndexOf("")>=5?[...b[i]].reduce((h,m) =>h=m+h,""):b[i]))) 
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
const o=(a,b="",i=0)=>(!(i-(+Object.keys(a).pop()+1))?b:o(a,b+({0:'(',3:') ',6:'-'}[i]||'')+a[i],i+1))
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
const i=(a,b=[],c=[...a].entries(),i=0)=>(r=>!(r)?b.map(u=>((+Object.keys(u).pop())?u:u+'_')):i(a,(!(i%2)?[...b,a.substr(i,2)]:b),c,i+1))(c.next().value)
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

### Challenge :eight:

#### Challenge: 

Write a function that checks if the input string is a palendrome. Palendromes are strings that are the same forwards as backwards such as `racecar` or `madam`

<details>
<summary>Normal Answer</summary>
<br>
  
```Javascript
function p(word, i = 0, is = true){
	if(i == word.length) return true;
  if(is == false){
  return false; 
  }
  else return  p(word, ++i, word[i] == word[word.length-1-i])
}
```

</details>

<details>
<summary>IJScript Answer</summary>
<br>
  
```Javascript
r=(w,i=0,t=1)=>w[i]+i+1?r(w,-~i,t^1?!1:w[i]==w[+Object.keys(w).pop()-i]):r
```

</details>

---




## Non-problem related examples


### Simple Calculator

``` JavaScript

const t = (o,n1,n2) => ({'m': n1*+n2,'a': +n1+(+n2),'s': n1-+n2,'d': n1/+n2,'p': (n1**+n2)}[o[0]] || 'undefined operator')

```

### FizzBuzz

```
f=(n,g='')=>(n%3||(g+='fizz'),(n%5||(g+='buzz')),g||n)
```
