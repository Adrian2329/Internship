/* //task1
for(let i=0;i<=100;i++){
  if(i%2){
    console.log(i);
  }
  else {
   console.log(100-i);
  }
} */

/* //task2

function fibonacci(n) {
  if(n < 2) {
      return n;
  }
  else {
      return fibonacci(n-1) + fibonacci(n - 2);
  }
}
const num=7

if(num <=0) {
      console.log(0);
}
else {
    for(let i = 0; i < num; i++) {
        console.log(fibonacci(i));
    }
} */

/* //task3
const factorial =(n)=>{
  if(n>1){
  return n*factorial(n-1);
}
else{
  return 1
}
}
console.log(factorial(8)); */

/* //task4
for(let i=0;i<100;i++){
console.log(i*i);
} */

/* //task5 
const n=prompt("Let n=")
for(let i=2;i<n;i++){
  if(!(n%i)){
    console.log(i);
  }
} */