const $card = document.getElementById("card")


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

    /********** LLAMADO A TITULO / NOMBRE  *********/
    let nombre=pokemon.name.toUpperCase();
    $card.children[1].children[0].innerHTML=nombre


    /********** LLAMADO A DESCRIPCION *********/
       
    let link="";
    link=pokemon.species.url
    console.log(link)

    fetch(link)
    .then(function (response){
            response.json()
            .then(function(descripcion){
                /* console.log(descripcion.flavor_text_entries)      */   
                /* console.log(descripcion.flavor_text_entries[index].language.name) */

                for (let index = 0; index < 200 ; index++) {
                   
                    if(descripcion.flavor_text_entries[index].language.name == "es"){
                        /* console.log(descripcion.flavor_text_entries[index]); */
                        let $description = descripcion.flavor_text_entries[index].flavor_text;
                        $card.children[1].children[1].innerHTML=$description
                        index=200;
                    } 
                    
                }
            })
        }) 
    
}