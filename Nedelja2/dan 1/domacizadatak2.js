// zadatak2.js  - Продавница
// 1. Направити променљиву која представља цену производа коју купац жели да купи
// 2. Направити променљиву која представља количину новца коју купац има
// 3. Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", 
// а затим написати тренутно стање (остаје исто)
// 4. Ако има довољно новца, исписати: "Успешно сте купили производ", 
// а затим исписати тренутно стање (сада измењено)

let productPrice = 1000;
let buyerBalance = 1300;

if (productPrice > buyerBalance) {
	console.log('Nemate dovoljno novca');
}
else {
	buyerBalance -= productPrice;
	console.log('Uspesno ste kupili proizvod');
}

console.log(buyerBalance);