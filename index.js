//arrays
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const selectwho = Math.floor(Math.random() * who.length);
const randomwho = who[selectwho];

const selectaction = Math.floor(Math.random() * action.length);
const randomaction = action[selectaction];

const selectwhat = Math.floor(Math.random() * what.length);
const randomwhat = what[selectwhat];

const selectwhen = Math.floor(Math.random() * when.length);
const randomwhen = when[selectwhen];

const escuse = randomwho+" "+randomaction+" "+randomwhat+" "+randomwhen

console.log(escuse)