
    // Исписати Марио пирамиду одређене висине:

    // За n = 5
    
    //     #
    //    ## 
    //   ###
    //  ####   
    // #####
    
    let n=5;
    let row='';

    for(i=0; i<n; i++){

    let row1=' '.repeat(n-1-i)+'#'.repeat(i+1)
    console.log(row1);
    }
    