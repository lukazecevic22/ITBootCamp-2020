// dan 3 zadatak 2

// zadatak5.js


// zadatak6.js

//     За првих 100 бројева исписати:
//         FizzBuzz ако је број дељив и са 3 и са 5
//         Fizz ако је број дељив само са 3
//         Buzz ако је број дељив само са 5
//         Број ако није дељив ни са 3 ни са 5

//     (1,2,Fizz,4,Buzz,...)

let=0
for(var i = 1; i <= 100; i++)
if( i % 3 ==0 && i % 5==0){
    console.log('fizzbuzz')
    
}
else if ( i % 3 ==0){
    console.log('fizz')
    
}
else if ( i % 5 ==0){
    console.log('buzz')
    
}
else{ i % 3 !=0 && i % 5 !=0
    console.log(i)
    
}
