const students=[
    {id:21,name:"Omar Sunny"},
    {id:24,name:"Maanna"},
    {id:32,name:"Dipjol"},
    {id:45,name:"Moyuri"}
];
const a=[];
for(let i=0;i<students.length;i++){
    const n=students[i].name;
   a.push(n);
}
console.log(a);
const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>40);
const smaller=students.find(s=>s.id<32);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(smaller);