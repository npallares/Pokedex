const $main=document.getElementById("main")
const $tituloIndex = document.getElementById("titulo_Index")
const $imgIndex = document.getElementById("img_index")
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment();
let idPokemon = 0;
let color=""
/* export const data_id=0; */

/* console.log($main) */



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
                
                
                /* console.log(data) */


                /* *********************** */
                
                let num=index
                /* console.log(num) */
                    
                idPokemon=num
                    
                let nombre=pokemon.name.toUpperCase();
                    
                let $clone = document.importNode($template,true)
                $fragment.appendChild($clone)
                    
                let imgFrag=$fragment.children[0].querySelector("img")
                $fragment.children[0].setAttribute("id",data.id)
                /* console.log($fragment.children[0].children[0]) */
                $fragment.children[0].children[0].setAttribute("id",data.id)
                $fragment.children[0].children[0].children[0].classList.add(`hover_index`)
                $fragment.children[0].children[0].children[0].classList.add(`bgcolor-${color}`)

                

                // Deteccion y seteo de boton para agregado del DataId 
                $fragment.children[0].children[0].children[0].children[0].children[1].setAttribute("id",data.id)

                let h1Frag=$fragment.children[0].querySelector("h1")
                    
                h1Frag.innerHTML=nombre
                
                imgFrag.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
                $main.appendChild($fragment)      
                
            })
        })
    }

        idPokemon++
}