let znakPolje = document.querySelector('#vrsta-promene');
let tekstPolje = document.querySelector('#opis-promene');
let iznosPolje = document.querySelector('#iznos-promene')
let dugme = document.querySelector('#dugme-unos')
let ukupanIznos = document.querySelector('#ukupno');
let container = document.querySelector('#container');
let prikazPrihoda = document.querySelector('#prikaz-prihodi');
let prikazRashoda = document.querySelector('#prikaz-rashodi');

let prihod = 0;
let rashod = 0;
let budzet = 0;
let procenat = 0;

dugme.addEventListener('click', (e) => {
    e.preventDefault();
    if (tekstPolje.value.trim() == "") {
        alert("Morate uneti nesto");
        tekstPolje.value = "";
        return
    }
    if (iznosPolje.value.trim() == "" || iznosPolje.value <= 0) {
        alert("Morate uneti broj veci od nule")
        iznosPolje.value = "";
        return;
    }
    let znak = znakPolje.value;
    let opis = tekstPolje.value;
    let iznos = parseInt(iznosPolje.value);
    if (znak == 'prihod') {
        dodajPrihod(opis, iznos);
    }
    else {
        dodajRashod(opis, iznos, budzet)
    }
    tekstPolje.value = "";
    iznosPolje.value = "";
})
const dodajPrihod = (opis, iznos) => {
    prihod += iznos;
    budzet += iznos;
    let ispis = document.createElement('div')
    ispis.id = "prikaz-prihoda";
    ispis.innerHTML = `${opis} ${iznos}`
    prikazPrihoda.appendChild(ispis)
    ukupanIznos.innerHTML = rHTML(budzet, prihod, rashod)
    let obrisiPromenu = document.createElement('button');
    obrisiPromenu.innerHTML = 'OBRISI';
    obrisiPromenu.id = "dugme-brisanje"
    ispis.appendChild(obrisiPromenu);
    obrisiPromenu.addEventListener('click', () => {
        budzet -= iznos;
        prihod -= iznos;
        ukupanIznos.innerHTML = rHTML(budzet, prihod, rashod)
        ispis.remove();

    })
    procenat = 0;
}

const dodajRashod = (opis, iznos, budzet) => {
    rashod += iznos;
    procenat = iznos / budzet * 100;
    budzet -= iznos;
    let ispis = document.createElement('div')
    ispis.id = "prikaz-rashoda";
    ispis.innerHTML = `${opis} Iznosi: ${iznos}`
    prikazRashoda.appendChild(ispis)
    ukupanIznos.innerHTML = rHTML(budzet, prihod, rashod)
    let obrisiPromenu = document.createElement('button');
    obrisiPromenu.innerHTML = 'OBRISI';
    obrisiPromenu.id = "dugme-brisanje"
    ispis.appendChild(obrisiPromenu);

    obrisiPromenu.addEventListener('click', () => {
        budzet += iznos;
        rashod -= iznos;
        procenat = iznos / budzet * 100
        ukupanIznos.innerHTML = rHTML(budzet, prihod, rashod)
        ispis.remove();
    })
    procenat = 0;
}

const rHTML = (budzet, prihod, rashod, procenat) => {
    return `<H1>Dostupan budzet u Martu 2020</H1>
<div id="saldo">${prihod - rashod}</div>
<div id="trenutno-stanje">
    <div id="trenutno-prihodi">
        <p>Prihod:</p>
        <p>+${prihod}</p>
    </div>
    <div id="trenutno-rashodi">
        <p>Rashod:</p>
        <p>-${rashod} ${procenat}%</p>
    </div>
</div>`
}