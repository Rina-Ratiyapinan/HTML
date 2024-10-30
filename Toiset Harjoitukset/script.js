//Ehto2lauseita1
function checkNumber() {
  const number = document.getElementById('numberInput').value;
  const resultElement = document.getElementById('result');

  if (number >= 0) {
      resultElement.textContent = "Luku on positiivinen";
  } else {
      resultElement.textContent = "Luku on negatiivinen";
  }
}


//Ehto2lauseita2
function checkDay() {
  const dayNumber = parseInt(document.getElementById('dayNumber').value);
  const dayResult = document.getElementById('dayResult');
  let day;

  switch (dayNumber) {
      case 1:
          day = "Maanantai";
          break;
      case 2:
          day = "Tiistai";
          break;
      case 3:
          day = "Keskiviikko";
          break;
      case 4:
          day = "Torstai";
          break;
      case 5:
          day = "Perjantai";
          break;
      case 6:
          day = "Lauantai";
          break;
      case 7:
          day = "Sunnuntai";
          break;
      default:
          day = "Virhe: syötä luku 1-7";
  }

  dayResult.textContent = day;
}

//Ehto2lauseita3
function checkLeapYear() {
  const year = parseInt(document.getElementById('yearInput').value);
  const leapResult = document.getElementById('leapResult');

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapResult.textContent = "Vuosi on karkausvuosi";
  } else {
      leapResult.textContent = "Vuosi ei ole karkausvuosi";
  }
}

//Ehto2lauseita4
function calculateSumAndAverage() {
  const numbersInput = document.getElementById('numbersInput').value;
  const numbers = numbersInput.split(',').map(Number);
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  document.getElementById('laskeResult').textContent = `Lukujen summa on: ${sum} ja keskiarvo on: ${average}`;
}

//Ehto2lauseita5
function calculateLause() {
  let luku = parseInt(document.getElementById("lukuInput").value);

  let lause1 = luku * 1 + 1 * luku * 1;
  let lause2 = luku * 2 + 2 * luku * 2;
  let lause3 = luku * 10 + 10 * luku * 2;

  document.getElementById("lause1Result").innerText =
      "Lause 1: " + lause1;
  document.getElementById("lause2Result").innerText =
      "Lause 2: " + lause2;
  document.getElementById("lause3Result").innerText =
      "Lause 3: " + lause3;
}
