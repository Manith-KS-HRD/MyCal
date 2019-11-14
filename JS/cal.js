

btnPlus = document.getElementById("btnPlus")
plusOperation = function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  sum = parseInt(number1.value) + parseInt(number2.value);
  result = document.getElementById("result");
  result.innerText = sum;

}

btnPlus.addEventListener("click", plusOperation)

// minusOperation
btnMinus = document.getElementById("btnMinus")
minusOperation = function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  difference = parseInt(number1.value) - parseInt(number2.value);
  result = document.getElementById("result");
  result.innerText = difference;

}
btnMinus.addEventListener("click", minusOperation)

// multipleOperation
btnMulti = document.getElementById("btnMulti")
multiOperation = function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  multiple = parseInt(number1.value) * parseInt(number2.value);
  result = document.getElementById("result");
  result.innerText = multiple;

}
btnMulti.addEventListener("click", multiOperation)

// divide number Operation
btnDivide = document.getElementById("btnDivide")
divideOperation = function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  divide = parseInt(number1.value) / parseInt(number2.value);
  result = document.getElementById("result");
  result.innerText = divide;
}
btnDivide.addEventListener("click", divideOperation)



