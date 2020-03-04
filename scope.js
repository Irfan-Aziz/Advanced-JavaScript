let bonus=20;
function sum(first,second){
    let result=first+second+bonus;
    console.log(bonus);
    if(result>9){
        let mood="happy";//output is found if defined as var
        mood="fishy";
        mood="funky";
    }
    console.log(mood);
    return result;
}
const endi=sum(11,22);
console.log(endi);