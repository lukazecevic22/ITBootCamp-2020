

// zadatak9.js

// Исписати Марио пирамиду одређене висине:

// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####

let n=5;
let red='';
for(let i=0; i<n;i++){
red+=' '.repeat(n-i-1)+'*'.repeat(i+1)+' '+'*'.repeat(i+1)+'\n';
}
console.log(red);