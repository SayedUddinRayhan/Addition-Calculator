let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let submit_btn = document.querySelector("#submit_btn");
let result = document.querySelector("#result");

submit_btn.addEventListener('click', function(){
  
  let sum = parseInt(num1.value) + parseInt(num2.value);

  result.innerText = sum;
  
  
})

