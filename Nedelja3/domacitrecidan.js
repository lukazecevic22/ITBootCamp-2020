//Написати функцију која исписује све елементе низа који су дељиви са 5.

let x = [1,2,3,4,5,10,15,23,1,5]
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



// function divisibleByFive(arr){
    
// }

// divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5