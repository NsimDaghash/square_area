/*
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/

function oddCount(n){
    let count_odd = 0;
    for (let i=1 ; i<=n; i++){
      if ((i % 2) == 0 ){
        count_odd = count_odd+1;
      }
    }
    return count_odd;
  }