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


// function pok(pok1,pok2,pok3,pok4){
//     return `<${pok1.abilities}><${pok2.abilities}><${pok3.abilities}<${pok4.abilities}>` //ne trb ovako. mora drugacije.
// }
// console.log(pok(pokemon1,pokemon2,pokemon3,pokemon4))

let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4];

let rez=pokemoni.map((poki)=>{
    return `${poki.abilities}`
})
console.log(rez);
