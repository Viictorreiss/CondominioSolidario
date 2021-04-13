var misterious = document.querySelector(".misterious");

misterious.addEventListener("click", function(){
   document.querySelector(".container").classList.toggle("show-menu");
});

/* Um jeito de otimizar o código seria passar do estado de uma função direto para outra função.
Como a segunda função não possui nome, pode-se transformar em um menu function com =>
e com isso temos o mesmo resultado de maneira simplificada, como no exemplo a seguir:

document.querySelector(".misterious").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

*/