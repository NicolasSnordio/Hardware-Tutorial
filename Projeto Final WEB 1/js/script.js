
// para fazer uma função em dois items separados uso o container sinalizando o estado em que o menu esta sendo exibindo formatanfo todos os elementos da pagina para se entender que o menu esta sendo exibido.
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});