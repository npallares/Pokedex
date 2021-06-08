const $main=document.getElementById("main")
const $tituloIndex = document.getElementById("titulo_Index")
const $imgIndex = document.getElementById("img_index")
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment();
let idPokemon = 0;
let color=""

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


for (let index = 0; index <= 150; index++) {
    
    consultarPokemon(idPokemon)
    
    function mostrarPokemon(pokemon){
        
        let link="";
        link=pokemon.species.url
        /* console.log(link) */

        fetch(link)
        .then(function(response){
            response.json()
            .then(function(data){
                color=data.color.name
                
                
                console.log(color)


                /* *********************** */
                
                let num=index
                console.log(num)
                    
                idPokemon=num
                    
                let nombre=pokemon.name.toUpperCase();
                    
                let $clone = document.importNode($template,true)
                $fragment.appendChild($clone)
                    
                let imgFrag=$fragment.children[0].querySelector("img")
                $fragment.children[0].children[0].classList.add(`bgcolor-${color}`)
                let h1Frag=$fragment.children[0].querySelector("h1")
                    
                h1Frag.innerHTML=nombre
                imgFrag.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
                $main.appendChild($fragment)      
                
            })
        })
    }

        idPokemon++
}