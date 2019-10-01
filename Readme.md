# :japanese_goblin: IJScript

![badge](https://img.shields.io/badge/Version-+!''.+!''-green)

What is IJScript? IJS is an attempt to write the most unreadable and short javascript code possible, and to develop a style of formatting code that can be reused.

This entire repo was inspired by code golf and code wars. If you don't know what code golf is check out this link [code golf](https://dev.to/healeycodes/answered-what-the-heck-is-code-golf-48pi). It is worth noting that this entire idea is a subset of Code golfing because it relies on the same core idea.

What does the ***I*** stand for in IJS? Incomprehensible, indecipherable or inconceivable.

## :dart: The Goal of IJS

Create a system of writing the most unreadable code possible. Random coding challenges will be used as examples to show of the progression of the system. If you cannot follow along or are having trouble reading the code that's the whole point. Check out the [Tips page](Tips.md) or the the [Process page](Process.md) to find out how to write IJS.

## :art: The Methodology

- All answers should be as short and unreadable as possible
    - [x] Unreadable takes priority over length
    - [x] Remove all unnecessary `[spaces, parenthesis, ;]`
    - [x] Do not use `[let, const, var]`
    - [x] Do not use `i` to represent a counter
    - [x] Stay away from prototype functions as much as possible
    - [x] `[.length]` should never be used.
- All answers must be resolved in a single lambda expression
    - [x] always use es6 arrow functions
    - [x] always use implicit returns
    - [x] define variables in the functions parameters
- Math and Coercion are your best friends
    - [x] Do not use `1||0` outside of strings 
    - [x] Do not use empty strings `''||""`
    - [x] Do not use `+1||-1`
    - [x] Do not use `==||===`
    - [x] Do not use `>=||<=`
- Do not use eval

`One of the core principles of programming is writing readable code. IJS throws that to the wind and asks "What if we just wrote code that no one could read?"`

## Example

A simple calculator function that takes three arguments:

```JavaScript
c=(o,n1,n2,a)=>({'m':n1*n2,'a':n1+n2,'s':n1-n2,'d':n1/n2,'p':(n1**+n2)}[o[+[]]]||a+' operator')
```

This is a good example of IJS. Short and otherwise unreadable code, unless given context.

![WTF](https://media.tenor.com/images/88d97fbeb4a01f923012b103417f7cb1/tenor.gif)

## :mortar_board: Testing

I have written a function to test functions written with the IJS methodology. See [test.js](test.js). These tests will ensure a writer is following the IJS methodology to a T. To use the test just pass your function without calling it and check the console output.

## :100: The Challenges

Check out the [Challenges Page](Challenges.md) for some completed challenges.

## :tada: The Conclusion

JavaScript is a very quirky language and it can be written several different ways. Not all of these ways are good, but the thing to keep in mind is that readable code is always better than non-readable code. Can you use some of the stuff from above to write your code? certainly! but good luck understanding it after a week.

If you have read this far I suggest forgetting everything you have read and actually pick up a widely supported style guide and study that. Is JavaScript a bad Language? I don't think so, I think it is only as bad as you make it.

Why did you create this _"thing"_?

I really liked the Idea of code golfing but quickly realized that it in itself is a game and has almost no place inside of a proper workplace. I also love those 60's scifi horror movies where the evil 'thing' is just some idea taken to the extreme in an impossible situation.

So this is my version of code golfing taken to an extreme. I also really like JavaScript and all the quirks that the language contains, this was a great learning experience.

### Guides on writing good code!

- [Air BnB Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/)

### Thanks

Special thanks to:

- [u/MissileEngineer](reddit.com/user/MissileEngineer) for the repl.it on representing numbers in js as negated expressions

### Contributing

If you want to contribute please open a pull request, I am always looking for ways to improve IJS.
