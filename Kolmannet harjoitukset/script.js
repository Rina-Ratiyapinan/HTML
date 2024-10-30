//Tehtävä 1
function printEvenNumbers() {
  const num = parseInt(document.getElementById('evenNumber').value);
  let result = "";
  if (num % 2 === 0) {
      for (let i = 2; i <= num; i += 2) {
          result += i + " ";
      }
  } else {
      result = "Anna parillinen luku!";
  }
  document.getElementById('result1').textContent = result;
}

//Tehtävä 2
function convertToPassword() {
  let word = document.getElementById('passwordWord').value;
  let result = "";
  for (let i = 0; i < word.length; i++) {
      result += word[i];
      if (i < word.length) {
          result += 'Ö';
      }
  }
  document.getElementById('result2').textContent = result;
}

//Tehtävä 3
function checkForO() {
  let word = document.getElementById('wordWithO').value;
  let found = false;
  for (let i = 0; i < word.length; i++) {
      if (word[i] === 'ö') {
          found = true;
          break; 
      }
  }
  document.getElementById('result3').textContent = found ? "On ö-kirjain" : "Ei ole ö-kirjainta";
}

//Tehtävä 4
function calculateFactorial() {
  let num = parseInt(document.getElementById('factorialNumber').value);
  let factorial = 1;
  for (let i = num; i > 1; i--) {
      factorial *= i;
  }
  document.getElementById('result4').textContent = factorial;
}

//Tehtävä 5
function printNumbers() {
  let result = '';
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          result += 'HipHeijaa ';
      } else if (i % 3 === 0) {
          result += 'Hip ';
      } else if (i % 5 === 0) {
          result += 'Heijaa ';
      } else {
          result += i + ' ';
      }
  }
  document.getElementById('result5').textContent = result.trim();
}

//Tehtävä 6
function printFirstTen() {
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += i + ' ';
  }
  document.getElementById('result6').textContent = result.trim();
}

//Tehtävä 7
function sumFirstTen() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  document.getElementById('result7').textContent = sum;
}

//Tehtävä 8
function calculatePower() {
  let base = parseFloat(document.getElementById('base').value);
  let exponent = parseFloat(document.getElementById('exponent').value);
  let result = Math.pow(base, exponent);
  document.getElementById('result8').textContent = result;
}

//Tehtävä 9
function findMinMax() {
  let numbers = [
      parseFloat(document.getElementById('num1').value),
      parseFloat(document.getElementById('num2').value),
      parseFloat(document.getElementById('num3').value),
      parseFloat(document.getElementById('num4').value),
      parseFloat(document.getElementById('num5').value)
  ];
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  document.getElementById('result9').textContent = `Suurin: ${max}, Pienin: ${min}`;
}

//Tehtävä 10
function modifyPassword() {
  let pw = document.getElementById('passwordInput').value;
  alert(pw);

  let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'å', 'ä', 'w'];
  let temp = [];

  for (let i = 0; i < pw.length; i++) {
      let eka = pw[i];
      temp.push(eka);

      let randomIndex = Math.floor(Math.random() * array.length);
      let toka = array[randomIndex];
      temp.push(toka);
  }
  let lop = temp.join('');
  document.getElementById('result10').innerHTML = lop;
}


//Tehtävä 11
function findEvenOdd() {
  let nro1 = parseInt(document.getElementById('number1').value);
  let nro2 = parseInt(document.getElementById('number2').value);
  
  let evenSum = 0;
  let oddSum = 0;
  let evenNumbers = '';
  let oddNumbers = '';

  let startEven = (nro1 % 2 === 0) ? nro1 : nro1 + 1;

  for (let i = startEven; i <= nro2; i += 2) {
    evenNumbers += i + ' ';
    evenSum += i;
}

let startOdd = (nro1 % 2 === 0) ? nro1 + 1 : nro1;

for (let i = startOdd; i <= nro2; i += 2) {
  oddNumbers += i + ' ';
  oddSum += i;
}

document.getElementById('result11').innerHTML = 
'<p>Parilliset numerot: ' + evenNumbers.trim() + ' ja niiden summa: ' + evenSum + '</p>' +
'<p>Parittomat luvut: ' + oddNumbers.trim() + ' ja niiden summa: ' + oddSum + '</p>';
}

