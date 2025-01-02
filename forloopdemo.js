//even numbers printing

for(i=2;i<=100;i=i+2){
    console.log(i)
   
}
//sum of given number

var read=require('readline-sync')

var num1=read.question('Enter the max number')
let sum;

for(i=1;i<=num1;i++){
    sum=sum+i
    console.log(i)
}