//ONE
function closure(outer) {

    function inner(inner1) {
        return outer + inner1;
    }
    return inner;
}
let get_func_inner = closure(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));

//TWO
function outer() {
    function create_Closure(val) {
        return function () {
            return val;
        }
    }
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        
        arr[i] = create_Closure(i);
    }

    
    return arr;
}

let get_arr = outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
