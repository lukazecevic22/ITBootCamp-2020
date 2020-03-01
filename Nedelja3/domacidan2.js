//PRVI NACIN

// let r='32'
// let cena='150'

// function PricePizza(r){
//     return (`${(r**2 *Math.PI)}`);

// }
// let info=PricePizza(r);
// console.log(`cena pizze po cm2 je ${cena/info} RSD`);


//DRUGI NACIN

function pizza(r, cena){
    P=r**2*Math.PI
    cm=cena/P
    }
    pizza(32, 150);
    console.log(cm)