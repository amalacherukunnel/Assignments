num = Number(prompt("enter the number of even/odd number required and check whether the number is odd/even: "));
if(num==0){
  console.log("invalid input, please enter any natural number")
}
else{
    const fnum = 2;
        
    console.log("sequence of even numbers using 'for loop' are given below");
        for(let i = 0; i<=num-1; i++){
           let result = fnum + 2*i;
          console.log(result);
        }
       
        console.log("sequence of odd numbers using 'for loop' are given below");
    
        const fnum1 = 1;
        for(let j = 0; j<=num-1; j++){
           let result10 = fnum1 + 2*j;
          console.log(result10);
        }
      console.log("sequence of even numbers using 'while loop' are given below");
    
        
         let feven1 = 2
        let count = 0;
        while(count < num){
          let result3 = feven1 + 2 * count;
          console.log(result3);
          count++;
        }
      console.log("sequence of odd numbers using 'while loop' are given below");
    
        
         let fodd1 = 1
        let count1 = 0;
        while(count1 < num){
          let result4 = fodd1 + 2 * count1;
          console.log(result4);
          count1++;
        }
    
      console.log("sequence of even numbers using 'do while loop' are given below");
    
    
         let feven2 = 2;
        let count2 = 0;
        do{
         
           let result5 = feven2 + 2 * count2;
          console.log(result5);
          count2++;
         }while(count2 < num);
    
      console.log("sequence of odd numbers using 'do while loop' are given below");
    
        
         let fodd2 = 1;
        let count3 = 0;
        do{
          if(num==0){
            break;
          }
           let result6 = fodd2 + 2 * count3;
          console.log(result6);
          count3++;
         }while(count3 < num);
    
    
    switch(num % 2){
      case 0 :console.log(num + " is even");
        break;
      case 1: console.log(num + " is odd");
        break;
        default : console.log("invalid input");
    }
      }