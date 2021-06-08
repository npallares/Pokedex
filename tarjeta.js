const $tituloIndex = document.getElementById("card_index")
const $card = document.getElementById("card")
const $titulo = document.getElementById("titulo")
const $descripcion = document.getElementById("descripcion")
const $idPokemon = document.getElementById("idPokemon")
const $attack = document.getElementById("attack")
const $defense = document.getElementById("defense")
const $speed = document.getElementById("speed")
const $cuadroImagen = document.getElementById("cuadro_imagen")



const consultarPokemon = (id) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
        response.json()
        .then(function(pokemon){
            mostrarPokemon(pokemon)
            
        })
    })
}

const random =()=>{  
    let primerId = Math.round(Math.random() *150)
    consultarPokemon(primerId)
}

random()

function mostrarPokemon(pokemon){

    /*********  LLAMADO A IMAGEN  **********/
    let link_img = pokemon.sprites.other.dream_world.front_default;
    $card.children[0].children[0].setAttribute("src",link_img)    

    /********** LLAMADO A NOMBRE / ID  *********/
    
    let nombre=pokemon.name.toUpperCase();
    $titulo.innerHTML=nombre;
    /* $tituloIndex.innerHTML=nombre; */

    /* console.log(pokemon.order) */
    $idPokemon.innerHTML=`# ${pokemon.order}`

    /********** LLAMADO A DESCRIPCION *********/
       
    let link="";
    link=pokemon.species.url
    /* console.log(link) */

    fetch(link)
    .then(function (response){
            response.json()
            .then(function(descripcion){
                /* console.log(descripcion.flavor_text_entries)      */   
                /* console.log(descripcion.flavor_text_entries[index].language.name) */

                for (let index = 0; index < 200 ; index++) {
                   
                    if(descripcion.flavor_text_entries[index].language.name == "es"){
                        /* console.log(descripcion.flavor_text_entries[index]); */
                        let description = descripcion.flavor_text_entries[index].flavor_text;
                        $descripcion.innerHTML=description
                        index=200;
                    } 
                    
                }
                
                // Seteo color de fondo
                let bgColor=descripcion.color.name
                $cuadroImagen.classList.add(`bgcolor-${bgColor}`)

                // Seteo ataque, defensa y velocidad
                /* console.log(pokemon.stats[1].base_stat) */
                /* console.log(pokemon.stats) */
                $attack.innerHTML=pokemon.stats[1].base_stat
                $defense.innerHTML=pokemon.stats[2].base_stat
                $speed.innerHTML=pokemon.stats[3].base_stat
            })
    }) 

    /* console.log(pokemon) */
    
}