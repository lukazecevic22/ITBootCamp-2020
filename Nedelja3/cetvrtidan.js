/*Четврти дан

На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 
2 дугмета за наручивање одмах
Дугмићи за 'наручивање' повећавају бројач
Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку 
(Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) 
Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом 
на наручивање одмах избацује одговарајућу поруку за грешку */



let pCount = document.querySelector('#count');
let count = 0;

let btnOrder = document.querySelector('#order'); 
btnOrder.addEventListener('click', () => {
count++;
pCount.innerHTML = count;
})

let app = document.querySelector('#app');
app.appendChild(pCount); 

let pCount1 = document.querySelector('#count1');
    
pCount1.innerHTML = count;




let btnOrdernow = document.querySelector('#orderNow'); 
btnOrdernow.addEventListener('click', () => {
function msg(){
return (`dobar dan poruceno ${count} pizze,`);
}
let poruka=msg(count)
console.log(poruka);

// pCount1.innerHTML = count;
let vreme = new Date();
console.log(vreme);

pCount1.innerHTML=poruka+vreme;

})
app.appendChild(pCount1);












// let pCount1 = document.querySelector('#text');
// let vreme = new Date();
// console.log(vreme);

// pCount1.innerHTML=vreme;

// let btnOrdernow = document.querySelector('#orderNow'); 
// btnOrdernow.addEventListener('click', () => {
// pCount1.innerHTML = count;
// })
// app.appendChild(pCount1);












// let pCount1 = document.querySelector('#count1');
// let count1 = 0;

// app.appendChild(pCount1);
// let btnOrdernow = document.querySelector('#orderNow'); // ??
// btnOrdernow.addEventListener('click', (/*event*/) => {
// function pizzaorder(name){
//     return (`dobar dan ${name}`)
// }
// let msg=pizzaorder(Luka)
// console.log(msg);
   
//     pCount1.innerHTML = msg; 
// let pCount1 = document.querySelector('#count1');
// // let count1=0;
// let btnOrdernow=document.querySelector('#orderNow');
// btnOrdernow.addEventListener('click', (/*event*/ )=> {
    
// function pizzaorder(name){
//  return (`dobar dan ${name}`)
// }
// let msg=pizzaorder(`Luka`)
// console.log(msg);

//     pizzaorder.innerHTML=msg;
    
//     // count1++;
//     // pCount1.innerHTML=count1;
//     })
//     app.appendChild(pCount1)
