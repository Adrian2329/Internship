//task5
const btnMinus = document.getElementById("minus");
const input = document.getElementById("input");
const btnPlus = document.getElementById("plus");
const Minus =()=>{
  if(input.value>0){
  input.value=Number(input.value)-1;
}
else{
btnMinus.disabled=true;
}
if(input.value<9){
  btnPlus.disabled=false;
}
}
const Plus =()=>{
  if(input.value<9){
  input.value=Number(input.value)+1;
}  
else{
btnPlus.disabled=true;
}
if(input.value>0){
  btnMinus.disabled=false;
}
}
btnMinus.addEventListener('click',Minus)
btnPlus.addEventListener('click',Plus)