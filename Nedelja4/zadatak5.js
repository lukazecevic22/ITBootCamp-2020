let pokemon1 = {
    name: 'Pinsir',
    sort: 'Bug',
    abilities: ['hyper cutter', 'Mold breaker'],
    characteristics: { attack: 125, defence: 100, speed: 85 }
}
let pokemon2 = {
    name: `Onix`,
    sort: `Ground`,
    abilities: [`Rock head`, `Sturdy`],
    characteristics: { attack: 45, defence: 160, speed: 70 }
}
let pokemon3 = {
    name: `Arbok`,
    sort: `Poison`,
    abilities: [`Intimidate`, `Shed Skin`],
    characteristics: { attack: 95, defence: 69, speed: 80 }
}
let pokemon4 = {
    name: `Charizard`,
    sort: `Fire`,
    abilities: [`Blaze`, `Solar power`],
    characteristics: { attack: 84, defence: 78, speed: 100 }
}



let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function sviPokemoni(pokemoni) {
    let max = pokemoni[0];
    
    for (let i = 1; i < pokemoni.length; i++) {
        if (max.characteristics.attack < pokemoni[i].characteristics.attack) {
            max = pokemoni[i];
        }
    }

    return max;
}
// console.log(sviPokemoni(pokemoni));

let wrapper=document.querySelector(".wrapper");
let prikaziPokemone=document.querySelector('#prikaz');
let najjaciPokemon=document.querySelector('#pobednik');

najjaciPokemon.addEventListener('click',pokaziNajjacegPokemona);
prikaziPokemone.addEventListener('click',pokaziSvePokemone);

function pokaziNajjacegPokemona(){
    wrapper.innerHTML="";
    let element=sviPokemoni(pokemoni)
    showPokemon(element);
}

function pokaziSvePokemone(){
    wrapper.innerHTML="";
    pokemoni.forEach(element=>{
        showPokemon(element);
    })
}

function showPokemon(element){
    let div=document.createElement("div");
    let p=document.createElement("p");
    p.innerHTML=`Opis pokemona <ul> <li> Ime: ${element.name}</li> <li> Vrsta: ${element.sort} </li> </ul>`
    div.appendChild(p);
    let img =document.createElement("img");
    img.src = `${element.name}.jpg`;
    div.appendChild(img);
    wrapper.appendChild(div);
}