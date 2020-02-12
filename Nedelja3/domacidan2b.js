//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function largestNumber(num1,num2,num3){

    if (num1>num2 && num1>num3){
        return `${num1}`
    }
    if (num2>num1 && num2>num3 ){
    return `${num2}`;
}
    if (num3>num1 && num3>num2);
    return `${num3}`
    
}
let info=largestNumber(15,51,13);
console.log(info);



