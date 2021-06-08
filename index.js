const $main=document.getElementById("main")
const $tituloIndex = document.getElementById("titulo_Index")
const $imgIndex = document.getElementById("img_index")
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment();

console.log($main)



const consultarPokemon = (id) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
        response.json()
        .then(function(pokemon){
            mostrarPokemon(pokemon)
            
        })
    })
}


consultarPokemon(35)

function mostrarPokemon(pokemon){

    let nombre=pokemon.name.toUpperCase();
    $tituloIndex.innerHTML=nombre;
    $imgIndex.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
    
    let $clone = document.importNode($template,true)
    /* $template.querySelector("img").setAttribute("src",pokemon.sprites.other.dream_world.front_default) */
   /*  $template.querySelector("h1").setAttribute("id","hola"); */
   
     $fragment.appendChild($clone)

    let imgFrag=$fragment.children[0].querySelector("img")
    let h1Frag=$fragment.children[0].querySelector("h1")

    h1Frag.innerHTML=nombre
    imgFrag.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
    $main.appendChild($fragment)    
    
}