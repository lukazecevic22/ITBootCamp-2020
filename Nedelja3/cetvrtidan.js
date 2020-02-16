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


if( count==0){
    console.log('Neispravan unos');
}



pCount1.innerHTML=poruka+vreme;

})
app.appendChild(pCount1);










