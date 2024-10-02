//setTimeout
function sayHello(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
setTimeout(sayHello, 7000, "Hello", "John")

//setInterval
let timerId = setInterval(() => alert('setInterval'), 2000);