let r='32'
let cena='150'

function PricePizza(r){
    return (`${(r**2 *Math.PI)}`);

}
let info=PricePizza(r);
console.log(`cena pizze po cm2 je ${info/cena} RSD`);


