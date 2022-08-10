// https://calculator.swiftutors.com/percent-yield-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const percentYieldRadio = document.getElementById('percentYieldRadio');
const actualYieldRadio = document.getElementById('actualYieldRadio');
const theoreticalYieldRadio = document.getElementById('theoreticalYieldRadio');

let percentYield;
let actualYield = v1;
let theoreticalYield = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

percentYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Actual Yield';
  variable2.textContent = 'Theoretical Yield';
  actualYield = v1;
  theoreticalYield = v2;
  result.textContent = '';
});

actualYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Yield';
  variable2.textContent = 'Theoretical Yield';
  percentYield = v1;
  theoreticalYield = v2;
  result.textContent = '';
});

theoreticalYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Yield';
  variable2.textContent = 'Actual Yield';
  percentYield = v1;
  actualYield = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(percentYieldRadio.checked)
    result.textContent = `Percent Yield = ${computePercentYield().toFixed(2)} %`;

  else if(actualYieldRadio.checked)
    result.textContent = `Actual Yield = ${computeActualYield().toFixed(2)}`;

  else if(theoreticalYieldRadio.checked)
    result.textContent = `Theoretical Yield = ${computeTheoreticalYield().toFixed(2)}`;
})

// calculation

function computePercentYield() {
  return (Number(actualYield.value) / Number(theoreticalYield.value)) * 100;
}

function computeActualYield() {
  return (Number(percentYield.value) / 100) * Number(theoreticalYield.value);
}

function computeTheoreticalYield() {
  return Number(actualYield.value) / (Number(percentYield.value) / 100);
}