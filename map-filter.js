const numbers=[1,2,3,4,5];
/**function square(){

}
const result=numbers.map(function(element){
    return element*element;
})*/
const result=numbers.map(x=>x*x);
console.log(result);
/**filter */
const bigger=numbers.filter(x=>x>2);
console.log(bigger);
/**find */
const isThere=numbers.find(x=>x>3);
console.log(isThere);