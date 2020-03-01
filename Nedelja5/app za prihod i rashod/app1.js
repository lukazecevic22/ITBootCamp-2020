trenutniIznos = '';
trenutniTekst = '';


//==========Srednji Deo===========//

let unosTeksta = document.querySelector('#text1');
let unosIznosa = document.querySelector('#iznos');
let btn = document.querySelector('#submit');
let select = document.querySelector('#plusMinus');

// let listsaPrihoda11=document.querySelector('.listaPrihoda1')
// let prihodPlus1=document.querySelector('#prihodPlus');

unosTeksta.addEventListener('input', (e) => {
    trenutniTekst = e.target.value
    // console.log(trenutniTekst);
})
unosIznosa.addEventListener('input', (e) => {
    trenutniIznos = e.target.value
    // console.log(trenutniIznos);
})

btn.addEventListener('click', potvrdjenIznos)
function potvrdjenIznos(e) {
    e.preventDefault();
    if (trenutniTekst.trim() && trenutniIznos.trim() == '') {
        input.value == 'greska'
    }
    // else{
    let tekstNovac = document.getElementById('text1').value
    let iznosNovac = document.getElementById('iznos').value
    document.querySelector('#prihodPlus').innerHTML = tekstNovac + iznosNovac
    let del=document.createElement('button');
    del.addEventListener('click',obrisi)
    // prihodPlus1.appendChild(del)
    // document.querySelector('#prihodPlus').innerHTML=iznosNovac;
    // }
}

function obrisi(e) {
    e.target.parentElement.remove();
  }