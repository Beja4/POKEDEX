
    
const listaPokemon = document.querySelector("#listapokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemones = []; 

for (let index = 1; index <= 151; index++) {
    fetch(URL + index)
        .then((response) => response.json())
        .then(data => {
            pokemones.push(data); 

           
            if (pokemones.length === 151) {
               
                pokemones.sort((a, b) => a.id - b.id);
                
                
                pokemones.forEach(pokemon => mostrarPokemon(pokemon));
            }
        });
}


function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join("");

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="pokemon">
            <p class="pokemon-id-back">${pokeId}</p>
            <div class="pokemon-img">
                <img src="${poke.sprites.other['official-artwork'].front_default}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">${pokeId}</p>
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="status">${poke.height}m</p>
                    <p class="status">${poke.weight}kg</p>
                </div>
            </div>
        </div>`;

    listaPokemon.append(div);
}


botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;
    listaPokemon.innerHTML = ""; 
    pokemones.forEach(pokemon => {
        const tipos = pokemon.types.map(type => type.type.name);
        if (tipos.some(tipo => tipo.includes(botonId))) {
            mostrarPokemon(pokemon);
        }
    });
}));










// const getPokemon = (limit) =>{
//     let allPokemon = []
// const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
// axios.get(url)
// .then((response)=>{
//     let infoPokemons = response.data.results
//     // console.log(infoPokemons);
//     infoPokemons.forEach((pokemon)=> {
//         axios.get(pokemon.url)
//         .then((moreInfoPokemon)=> {
//             // console.log(moreInfoPokemon.data.types)

//             let infoindividualPokemon = {
//                 nombre: moreInfoPokemon.data.name,
//                 tipo: moreInfoPokemon.data.types.map((tipo)=>tipo.type.name),
//                 urlImage:moreInfoPokemon.data.sprites.front_default
//                 }
            
// // console.log(infoindividualPokemon);
//                 allPokemon.push(infoindividualPokemon)
            
                
//             })
//         })
//         console.log(allPokemon);

//     })
//     .catch((error)=>console.log(error.message))

//     setTimeout (
//         () =>{
//             createCards(allPokemon)
//         },1000)
    
// }


// let createCards = (pokemons) => {
// let pokemonsContainer =  document.querySelector(".pokemon-todos")
// pokemons.forEach((pokemon) =>{
//     let card = document.createElement("div")
//     let title = document.createElement("p")
//     let image = document.createElement("img")

//     card.append(title,image);
//     pokemonsContainer.append(card)

//     title.innerText = pokemon.nombre
//     image.src = pokemon.urlImage

//     card.setAttribute("class","card")


// })

// }
// //las promesas se componen
// // de resolve y reject.
// //a traves de los theny  los catch definimos 
// //los valores de resolve y reject.
// //.json lo convierte en un objeto
// const fetchUrlPromise = (url) => {
//     return new Promise((resolve, reject)=>{
//         fetch(url)
//         .then(response=>{
//             if(response.ok){
//                 return response.json()
//             }else{
//               throw new Error('La solicitud no respondio con ok')  
//             }
//         })
//         .then(data=>resolve(data))
//         .catch(error=>reject(error))
//     })
// }

// fetchUrlPromise('https://pokeapi.co/api/v2/pokemonlimit=150')
// .then(pokemones=>console.log(pokemones))
// .catch(error=>console.log(error))




// const listaPokemon =document.querySelector("#listapokemon")
// const botonesHeader = document.querySelectorAll(".btn-header")
// let URL = "https://pokeapi.co/api/v2/pokemon/";
// const pokemones = []
// for (let index = 1; index <= 151; index++) {
//     fetch(URL + index)
//         .then((response) =>response.json())
//         .then(data => mostrarPokemon(data));
       
// }

// function mostrarPokemon(poke){

//     let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);

//     tipos = tipos.join(``);


//     let pokeId =poke.id.toString();
//     if (pokeId.length === 1){
//         pokeId = "00" + pokeId;
//     } else if (pokeId.length === 2){
//         pokeId = "0" + pokeId;
//     }

// const div = document.createElement("div")
// div.classList.add("pokemon")
// div.innerHTML = `<div class="pokemon">
//                     <p class="pokemon-id-back">${pokeId}</p>
//                     <div class="pokemon-img">
//                         <img src="${poke.sprites.other[`official-artwork`].front_default}" alt="${poke.name}">
//                     </div>
//                         <div class="pokemon-info">
//                             <div class="nombre-contenedor">
//                                 <p class="pokemon-id">${pokeId}</p>
//                                 <h2 class="pokemon-nombre">${poke.name}</h2>
//                             </div>
//                             <div class="pokemon-tipos">
//                                 ${tipos}
//                             </div>
//                             <div class="pokemon-stats">
//                                 <p class="status">${poke.height}m</p>
//                                 <p class="status">${poke.weight}kg</p>
//                             </div>
//                         </div>
//                 </div>`

//     listaPokemon.append(div);
// }

// botonesHeader.forEach(boton =>boton.addEventListener("click",(event) =>{
//     const botonId =event.currentTarget.id;

//     listaPokemon.innerHTML = "";

//     for (let index = 1; index <= 151; index++) {
//         fetch(URL + index)
//             .then((response) =>response.json())
//             .then(data =>{

//                 const tipos = data.types.map(type =>type.type.name)
//                 if(tipos.some(tipo => tipo.includes(botonId))){
//                     mostrarPokemon(data)
//                 }
//             } )
//     }

// }))

//ver como implementar promesas
 











//npm init --save para crear package JSON


















// let str = "Ramsay";

// if(str){
// console.log("hola " + str);
// }else{console.log("no recibi ningun nombre");
// }

/*si usas touppercase tendras que poner todo en mayusculas*/

// let userResponse = prompt("Dame un  dia de la semana").toUpperCase();    

// if(userResponse === "LUNES"){console.log("tengo flojera")}
// else if(userResponse ==="MIERCOLES"){console.log("ya casi es viernes")};




// let usuarioVacuna = parseInt(prompt("Danos tu edad"));

// if (usuarioVacuna <18){console.log("No te puedes vacunar")}
// else if(usuarioVacuna >18){console.log("Entrale")};


// >= es IGUAL O MAYOR QUE//
// let userPoint = parseInt(prompt("Ingresa tus puntos"));

// if (userPoint<150){
//     console.log("Usted tiene accseso a una tarjeta Standard.")}

// else if(userPoint >= 150 && userPoint<300){
//     console.log("Usted tiene acceso a la tarjeta gold!")}

// else if (userPoint>=300){
//     console.log("USTED PUEDE TENER PLATINUM.")};

//     let amigos = ["Hugo", "Paco", "Luis"];
// console.log(amigos[2]);


// amigos[2] ="Ramsay"
// console.log(amigos.length);

// amigos.push("Logan");
// console.log(amigos);




// let pasatiempos = "Videojuegos, gym, guitarra, peliculas, ";

// let arregloPasatiempos = pasatiempos.split(",");

// console.log (arregloPasatiempos);

// let newarregloPasatiempos = arregloPasatiempos.slice(2,4);
// console.log (newarregloPasatiempos);


// arregloPasatiempos.splice(2,1, "musica");
// console.log(arregloPasatiempos);



// let persona = {Nombre: "David",
// Edad: 31,
// esMayordeEdad: true,
// pasatiempos: ["Videojuegos", "Fiesta", "metalcore", "Smashbros"],

// }


// let { Nombre, Edad, esMayordeEdad } = persona;
// console.log(persona.pasatiempos[3]);

// console.log(`Hola me llamo ${persona.Nombre} y tengo ${Edad} años`);


// let frutas = ["manzana", "pera", "naranja"];
// let verduras =["tomate","pepino", "cebolla"];

// let listaCompras = verduras.concat(frutas);

// console.log(listaCompras);

// console.log(frutas[0]); 

// let ClienteFruta = prompt("Ingresa una fruta").toLowerCase();

// if (ClienteFruta === "manzana")
//     console.log("Que gusto tan malo");
// else if(ClienteFruta ==="pera")
//     console.log("retirate por favor");
// else if(ClienteFruta === "mango")
//     console.log("Bien comprado.");
// else if(ClienteFruta === "naranja")
//     console.log("eso no esta a la venta");

// else
// console.log("Fruta no reconocida.")



// let Usercloath = prompt("Cómo está el clima hoy? te sugiero qué vestir.").toLocaleLowerCase();

// if (Usercloath === "frio")
//     console.log("Deberías usar una chamarra Armani");
// else if(Usercloath === "caliente")
//     console.log("te sugerio un short American Eagle.");

// else if (Usercloath === "no se")
//     console.log("Tal vez deberías irte a la segura y usar un pantalón con playera y una hoodie por si acaso.");

// // else
// // console.log("Me quedé sin sugerencias, good luck");

// // let clienteDescuento = prompt("quieres un descuento? Ingresa tus puntos")

// // if(clienteDescuento<100)
// //     console.log("Tiendes derecho a un descuento de 5%.");
// // else if(clienteDescuento>=100 && clienteDescuento <=200)
// //     console.log("Tienes acceso a un descuento del 10%");
// // else if(clienteDescuento >=200 && clienteDescuento <=500 ) 
// //     console.log("Tienes un 25% de descuento.");

// // else
// // console.log("ingresa una cifra valida.");

// let numero = parseInt(prompt("dame un numero"));

// while(numero<30){
// numero += parseInt(prompt("dame otro numero"));
// console.log(numero);
// }

// let i = 0
// let arr = []
// while(i<=100){
//     arr.push(i);
//     i ++;

// }
// console.log (arr);

// let pasatiempos = "Videojuegos, gym, guitarra, peliculas, ";

// let arregloPasatiempos = pasatiempos.split(",");

// console.log (arregloPasatiempos);


// for(let i = 0; i > arregloPasatiempos.length; i++){
// console.log(arregloPasatiempos[i]);
// }


// for (let i = 0; i <= 10; i+=2){
//     console.log(arregloPasatiempos)
//     console.log(i);
// }

// let contador = 0;
// for (let index = 0; index <= 4; index++){ //cada que se repite el proceso, se le suma a uno el index wey//

//     contador = contador + index;

//     console.log(contador);


// }

// function suma(a,b){
//     return a + b;

// }
//  console.log(suma(100,2));

 


/*
let numero = 5;

if(numero){
    console.log("el valor es mayor a 0" + numero);
}else{ console.log("el valor es 0");}

let

*/

