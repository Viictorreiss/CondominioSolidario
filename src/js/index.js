// var misterious = document.querySelector(".misterious");

// misterious.addEventListener("click", function() {
//     document.querySelector(".container").classList.toggle("show-menu");
// });

/* Um jeito de otimizar o código seria passar do estado de uma função direto para outra função.
Como a segunda função não possui nome, pode-se transformar em um menu function com =>
e com isso temos o mesmo resultado de maneira simplificada, como no exemplo a seguir:

document.querySelector(".misterious").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

*/

function titleWriter(element2) {
    const titleArray = element2.innerHTML.split('');
    element2.innerHTML = '';
    titleArray.forEach((letra, i) => {
        setTimeout(function() {
            element2.innerHTML += letra;
        }, 75 * i)
    });
}
const title = document.querySelector(".projeto-text-h1")
titleWriter(title)

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 75 * i)
    });
}
const types = document.querySelector(".projeto-text-p")
typeWriter(types)