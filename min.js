const mySet = new Set([1,1,2,2,3,3,4,5,5]);

console.log(mySet.size) //5

console.log(mySet.has(4)) //true 
mySet.add(`Javascript`)
console.log(mySet.has(`Javascript`)) //true 
console.log(mySet.delete(`Javascript`)) //true  NB this is case sensetive
console.log(mySet) //this output the whole set in the console 
console.log(mySet.clear()) //undefined
console.log(mySet.size) //0