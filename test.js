let name = 'Вася';
function sayHi() {
  console.log(name);
}

setTimeout(function() {
  let name = 'Петя';
  sayHi();
}, 1000);
