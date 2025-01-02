let read=require('readline-sync')
let choice=parseInt(read.question('1.poratta 2.fried rice 3.biriyani 4.shawarma Enter your choice'))

    switch(choice) {
    case 1:
        console.log('you have selected porotta')
        break
    case 2:
        console.log('you have selected fried rice')
        break
    case 3:
        console.log('you have selected biriyani')
        break
    case 4:
        console.log('you have selected shawarma')
        break
    default:
       console.log('invalid number')

   }
