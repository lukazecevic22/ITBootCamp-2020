//Написати функцију која исписује све елементе низа који су дељиви са 5.

let x = [1,5,10,12,15,4,6,22,21,3,44,50,20,60,6,7,8,13]
function deljivi(arr) {
    
let arr2=[];
for (let element of arr) {
    if (element %5==0 ) {
        arr2.push(element)
    }
}
return arr2
}
console.log(deljivi(x));



