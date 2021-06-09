const $main=document.getElementById("main")
const $tituloIndex = document.getElementById("titulo_Index")
const $imgIndex = document.getElementById("img_index")
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment();

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


for (let index = 0; index <= 3; index++) {
    
    let idPokemon = index;
    consultarPokemon(idPokemon)
    
    function mostrarPokemon(pokemon){
        
        let link=pokemon.species.url
        /* console.log(link) */

        fetch(link)
        .then(function(response){
            response.json()
            .then(function(data){
                
                let $clone = document.importNode($template,true)
                $fragment.appendChild($clone)
                
                //Seteo de id para el Section
                $fragment.children[0].setAttribute("id",data.id)

                //Seteo de id para A Href
                $fragment.children[0].children[0].setAttribute("id",data.id)
                
                //Seteo de estilo para Mouse Hover
                $fragment.children[0].children[0].children[0].classList.add(`hover_index`)
                
                //Seteo de color para fondo
                let color=data.color.name
                $fragment.children[0].children[0].children[0].classList.add(`bgcolor-${color}`)  
                
                // Deteccion y seteo de boton para agregado del DataId 
                $fragment.children[0].children[0].children[0].children[0].children[1].setAttribute("id",data.id)
                
                //Seteo de nombre para titulo
                let h1Frag=$fragment.children[0].querySelector("h1")
                let nombre=pokemon.name.toUpperCase();                
                h1Frag.innerHTML=nombre
                
                //Seteo de imagen                
                let imgFrag=$fragment.children[0].querySelector("img")
                imgFrag.setAttribute("src",pokemon.sprites.other.dream_world.front_default)

                //*****************************ACA*************** */
                
                //Seteo funcion para ver data
                let card = $fragment.children[0] // card
                let contenedor = card.children[0].children[0] // Contenedor
                let contenedor_box = contenedor.children[1]
                let selector = $fragment.children[0].children[0]
                let descrpcion = contenedor.children[0].children[1]
                let numeropokemon = contenedor.children[1].children[1]
                let cont = 0
                selector.addEventListener("click",(e)=>{
                    e.preventDefault()
                    if(e.target.matches(".button_index")){
                        if(cont == 0){
                        /* card.setAttribute("class","card_index alto") */
                        contenedor.setAttribute("class",`modulo_on  bgcolor-${color} alto`)

                        descrpcion.setAttribute("class","")
                        
                        contenedor_box.setAttribute("class","box_on")

                        numeropokemon.setAttribute("class","")

                        console.log(contenedor.children[1].children[1])
                        console.log(contenedor_box)
                        cont=1

                        } else{
                            contenedor.setAttribute("class",`modulo_index hover_index bgcolor-${color}`)
                            descrpcion.setAttribute("class","disp-none")
                            contenedor_box.setAttribute("class","box")
                            numeropokemon.setAttribute("class","disp-none")
                            cont=0
                        }
                    } else {
                        card.setAttribute("class","card_index")
                        console.log("chau")
                    }
                })
                
                //Agregado de $fragment al html
                $main.appendChild($fragment)
                
                let a = $main.querySelector("a")
                
                
            })
        })
        /* a */
    }
}
