import clone from  './dist/index.esm.js'

const a={c:1}
const b=clone(a)
a.c=2
console.log(a,b)