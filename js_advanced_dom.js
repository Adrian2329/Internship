/* //task1-3
document.body.style.background = "red";
setTimeout(() => document.body.style.background = "green", 3000);
  const button = document.getElementById('btn')
  console.log(button);
  const ColorChanger = ()=>{
    document.body.style.background = 'orange';
  }
  button.addEventListener('click', ColorChanger);
   */
//task4
/* const list = document.getElementById("list");
const AddList =()=>{
for (let i=0;i<20;i++){
setTimeout(function(){
const li = document.createElement("li");
if (i%2) {
  li.style.background=`violet`
}
else{
  li.style.background=`#66FF99`
}
li.innerHTML=`Элемент ${i+1}`
list.append(li);
},2000);
}
}
AddList(); */

/* let i =0;
const list = document.getElementById("list");
const AddList = setInterval(()=>
{
  i++;
  if (i>20)
  {
  clearInterval(AddList);
  }
  else{
const li = document.createElement("li");
li.innerHTML=`Элемент ${i}`
list.append(li);
}
},2000); */



