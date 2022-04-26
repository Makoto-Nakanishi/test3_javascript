
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const button = document.getElementById('container');

let target_value ="";

function buttonPressed(event){

const text = event.target.innerHTML;

let oper = ["+","-","*","/"];

 if(text == "=") {
   target_value = eval(target_value);    
 } else if(text == "AC") {
   target_value = "";
 } else if(target_value == "0"||target_value == "00") {
   target_value = text;
 } else if (target_value == (oper.includes(target_value)) && result.innerHTML.slice(-1) == (oper.includes(target_value))) { 
   target_value = text;
 } else {
   target_value = target_value + text;
 }

 result.innerHTML = target_value;

}

button.addEventListener('click', buttonPressed);















   