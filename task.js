"use strict";


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const interestRate = percent / 100 / 12; 
  const loanBody = amount - contribution;   
  

  const monthlyPayment = loanBody * (interestRate + (interestRate / (Math.pow(1 + interestRate, countMonths) - 1)));

  const totalAmount = (monthlyPayment * countMonths) + contribution;
  

  return +totalAmount.toFixed(2);
}


function displayMortgageResult() {
  const percent = document.getElementById('mortgage-percent').value;
  const contribution = document.getElementById('mortgage-contribution').value;
  const amount = document.getElementById('mortgage-amount').value;
  const countMonths = document.getElementById('mortgage-term').value;
  const resultElement = document.getElementById('mortgage-result');

  const totalAmount = calculateTotalMortgage(Number(percent), Number(contribution), Number(amount), Number(countMonths));


  resultElement.textContent = `Общая сумма выплат составит: ${totalAmount} рублей.`;
}


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('calculate-mortgage').onclick = displayMortgageResult;
});
function solveEquation(a, b, c) {
  let roots = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    roots.push((-b + sqrtDiscriminant) / (2 * a));
    roots.push((-b - sqrtDiscriminant) / (2 * a));
  } else if (discriminant === 0) {
    roots.push(-b / (2 * a));
  }


  return roots;
}

function solveAndDisplay() {
  const a = document.getElementById('coef-a').value;
  const b = document.getElementById('coef-b').value;
  const c = document.getElementById('coef-c').value;
  const resultElement = document.getElementById('result');

  if (!a || a === 0) {
    resultElement.textContent = "Коэффициент a не может быть нулем или пустым.";
    return;
  }

  const roots = solveEquation(Number(a), Number(b), Number(c));

  if (roots.length === 0) {
    resultElement.textContent = 'Уравнение не имеет вещественных корней.';
  } else if (roots.length === 1) {
    resultElement.textContent = `Уравнение имеет один корень: x = ${roots[0]}`;
  } else {
    resultElement.textContent = `Уравнение имеет два корня: x1 = ${roots[0]}, x2 = ${roots[1]}`;
  }
}


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('solve-button').onclick = solveAndDisplay;
});
