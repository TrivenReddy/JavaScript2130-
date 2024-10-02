//Rest Parameters
function myFunc(...args){
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args.length);

}
myFunc("Sindhu","Reddy","103");



//Spread syntax
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); 



