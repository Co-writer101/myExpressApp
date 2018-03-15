let myFirstPromise = new Promise((resolve, reject) => {
    let a = +Math.floor(Math.random()* (3 - 1) + 1);
    // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
    // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
    // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
    setTimeout(function(){
        if (a == 1) resolve("Success!"); // Ура! Всё прошло хорошо!
        reject("Fail!")
    }, 250)
});
  
  myFirstPromise.
    then(
    (successMessage) => {
        // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
        // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
        console.log("Ура! " + successMessage);
    },
    (fail) => {
        console.log("No!" + fail);
    }
);