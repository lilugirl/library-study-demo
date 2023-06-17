const clone = require("./lib/clone");

const a = { c: 1 };

const b = clone(a);

a.c = 2;
console.log(a, b);
