function test(func) {
  const tests = [{
      name: "i test",
      status: /i+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/.test(func) === false,
      error: "Function should not use i outside of quatations"
    },
    {
      name: "white space test",
      status: /\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/.test(func) === false,
      error: "Function should not include white spaces outside of quotations"
    },
    {
      name: "; test",
      status: /;/.test(func) === false,
      error: "Function should not include ;"
    },
    {
      name: "newline test",
      status: /\n|\r/.test(func) === false,
      error: "Function should not include newlines"
    },
    {
      name: "es6 function test",
      status: /=>/.test(func) === true,
      error: "Function should be ES6 arrow function"
    },
    {
      name: "concise function test",
      status: /=>{/.test(func) === false,
      error: "Function must be conscise use () instead of {}"
    },
    {
      name: "why are you using 1 or 0",
      status: /[^a-zA-Z](1|0)+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/.test(func) === false,
      error: "Function should not include 1 or 0 use [] instead"
    },
    {
      name: "+1",
      status: /(\+|\-)1/.test(func) === false,
      error: "Function should not use + or - 1 to increment or decrement, use -~n or ~-n"
    },
    {
      name: "=== test",
      status: /={2,3}/.test(func) === false,
      error: "Function should not use === or == for comparisions"
    },
    {
      name: "true|false",
      status: /(true|false)+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/.test(func) === false,
      error: "Function should not use true or false keywords use implicit or explicit conversion instead"
    },
    {
      name: ".length test",
      status: /\.length/.test(func) === false,
      error: "Function should not use .length to determine length of Arrays or Strings"
    },
    {
      name: "declarations test",
      status: /(const|let|var)+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/.test(func) === false,
      error: "wait, how are you declaring var|const|let in a concise function"
    },
    {
      name: "empty quotes",
      status: /(""|'')/.test(func) === false,
      error: "Function should not use empty quotations use [] or another alternative instead"
    },
    {
      name: ">= or <=",
      status: /(>=|<=)/.test(func) === false,
      error: "Function should not use <= or >=, find something else to use"
    }
  ];

  let failed = 0;
  console.log("Running IJS Tests...");
  tests.forEach((item, index) => {
    if (!item.status) failed++;
    console.assert(item.status, item.error);
  })

  if (failed > 0) {
    console.log(`%c${failed}/${tests.length} tests failed`, "color: red");
  } else {
    console.log("%cAll test passed", "color: green");
  }
}
