let pokemon1 = {
    name: 'Pinsir',
    sort: 'Bug',
    abilities:['hyper cutter','Mold breaker'],
    characteristics: {attack:125, defence:100, speed:85}
}
let pokemon2 = {
name: `Onix`,
sort: `Ground`,
abilities:[`Rock head`,`Sturdy`],
characteristics: {attack: 45,defence:160,speed:70}
}
let pokemon3 = {
name: `Arbok`,
sort: `Poison`,
abilities:[`Intimidate`,`Shed Skin`],
characteristics: {attack: 95,defence:69,speed:80}
}
let pokemon4 ={
name: `Charizard`,
sort: `Fire`,
abilities:[`Blaze`,`Solar power`],
characteristics: {attack: 84,defence:78, speed:100}
}

// 3 zad
let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4];

let brzina= pokemoni.sort((a,b)=>{
    return b.characteristics.speed-a.characteristics.speed;
});

console.log(brzina);