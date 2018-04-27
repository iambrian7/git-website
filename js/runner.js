//import props from './js/main.js'
// import props from "./main.js";
 var myobj = {name:'brian', city:'Mtka'}
// console.log(props(myobj))
console.log(__dirname)
const {props} = require('./mainapp');
console.log(props(myobj));
console.log('dir of module')

console.log(props(module))