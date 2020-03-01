// let tasks=[]
// let counter=0;


// // OPIS POLJE
// // =================>

// let unosTeksta=document.querySelector('#text1');
// currText='';

// function dodajUnos(e){
// e.preventDefault();
// unosTeksta.value='';
// if(ime.trim()==''){
//     unosTeksta.value='Greska';
// }
// return
// }
// unosTeksta.addEventListener('input', (e) => {
//     currText = e.target.value;
//     // console.log(currText);
// })

// // PRIHOD I RASHOD
// //================>
// let prihodNovca=document.querySelector('#inc');
// let rashodiNovca=document.querySelector('#exp');
// let iznosNovca=document.querySelector('#iznos');
// let potvrdaIznos=document.querySelector('#submit');
// let listaPrihoda=document.querySelector('#listaPrihoda')

let trenutniTekst = '';
let trenutniIznos = '';

let prihodi = document.querySelector('.listaPrihoda1')
let rashodi = document.querySelector('.listaRashoda')

let unosTeksta = document.querySelector('#text1')
unosTeksta.addEventListener('input', unetiTekst)
function unetiTekst(e) {
    trenutniTekst = e.target.value;
    // console.log(trenutniTekst);  

}
let iznosNovca = document.querySelector('#iznos');
iznosNovca.addEventListener('input', unetiIznos)
function unetiIznos(e) {
    trenutniIznos = e.target.value;
    // console.log(trenutniIznos); 

}
let plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click', menjaVrednost);
function menjaVrednost() {
    let plus = document.getElementById('pozitivno');
    let minus = document.getElementById('negativno');
    if () {
        plus ==
    }
    if{
        minus !=
    }

}
let potvrdaIznos = document.querySelector('#submit');
potvrdaIznos.addEventListener('click', potrdjenIznos)
function potrdjenIznos(e) {
    e.preventDefault();
    let x = document.createElement('li')
    let t =
        x.appendChild(t)
    document.body.appendChild(x)
}


// let ukupanPrihod=document.createElement('div');
// let ukupanRashod=document.createElement('div');
let ukupanPrihod = document.querySelector('.prihod');
ukupanPrihod.addEventListener('change', ukupanPrihod1)
function ukupanPrihod1() {
    for (let i = 0; i < prihodi.length; i++) {
        return `${iznosNovca[i]}+${iznosNovca}`
    }
}


let ukupanRashod = document.querySelector('.rashod')
ukupanRashod.addEventListener('')


let ukupnaRazlika = document.createElement('p');
// ukupnaRazlika.textContent = (`Dostupan budzet ${prihod.value - rashod.value} za ${get.date} ${get.year}`)




















/*trenutniTekst = input.value;
    if (trenutniTekst.trim() == ''); {
        input.value = 'greska'
    };
    let div = document.createElement('div');
    div.innerHTML = `${trenutniTekst} ${trenutniIznos}`
    let del = document.createElement('button');
    del.id = auto;   //sta je ovo?
    del.innerHTML = 'obrisi'
    del.addEventListener('click', obrisi);
    div.appendChild(del)
    prihodi.appendChild(div); */