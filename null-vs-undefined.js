let name;
console.log(name);//undefined
function add(num1,num2){
    console.log(num1+num2);
}
const result=add(13,82);
console.log(result);//undefined since no 'return' value
function add(num1,num2){
    console.log(num2);
}
const result=add(13);
console.log(result);//undefined since second parameter is not passed

const dean={name:"smart dude",phone: 45767};
console.log(dean.address);//undefined since dean has no "address" property
let fun=undefined;
console.log(fun);//undefined since defined as undefined

//**NULL */

let ages=[2,3,4];
console.log(ages[11]);//there is no 11th element