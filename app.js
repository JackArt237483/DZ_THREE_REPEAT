// 1) task

for(let i = 1; i <= 100; i++) {
  if( i % 20 === 0 & i % 9 === 0){
    console.log(i ,'FizzBizz')
  }  else if ( i % 9 === 0 ) {
    console.log(i, "Fizz") 
  }  else if ( i, 20=== 0) {
    console.log(i, 'Bizz')
  } else {
    console.log(i)
  }
} 


// 2)Task

var askNumber =+ prompt('Enter any number from 2 to 10?')


if(askNumber < 2 || askNumber > 10) {
   alert('You write not correct number: Please try again ))))')
} else {
  for(var i = 1; i <= 10; i ++) {
     console.log( askNumber + 'x' + i + '=' + askNumber * i)
  }
}


// 3)Task 


var bankCard =  ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961",]
var visaCount = 0

for(var i = 0; i < bankCard.length ; i ++ ) {
  if(bankCard[i].startsWith('4')) {
    visaCount ++
  }
}

console.log("Карт Visa" + ' ' +visaCount + " из"  +   " " + bankCard.length)


// for( var i = 0; i < bankCard.length; i ++ ) {
//   var clientCard = bankCard[i]
//   if(clientCard.startsWith("4")) continue;
//   console.log('КАРТ VISA' , i  + " из 7")
//   break
// }