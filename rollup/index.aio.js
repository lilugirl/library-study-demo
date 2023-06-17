import {clone} from './dist/index.aio.js'
console.log('clone',clone)

const a={c:1}
const b=clone(a)
a.c=2
console.log(a,b)