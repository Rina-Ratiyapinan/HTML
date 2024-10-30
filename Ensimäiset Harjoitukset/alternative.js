// Tehtävä 1: Sort three numbers
document.getElementById('sortForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);
  let numbers = [num1, num2, num3];
  numbers.sort((a, b) => a - b);
  document.getElementById('result1').textContent = "Järjestetyt luvut: " + numbers.join(', ');
});

// Tehtävä 2: Find the largest of five numbers
document.getElementById('maxForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let numbers = [
      parseFloat(document.getElementById('max1').value),
      parseFloat(document.getElementById('max2').value),
      parseFloat(document.getElementById('max3').value),
      parseFloat(document.getElementById('max4').value),
      parseFloat(document.getElementById('max5').value)
  ];
  let maxNumber = Math.max(...numbers);
  document.getElementById('result2').textContent = "Suurin luku on: " + maxNumber;
});

// Tehtävä 3: Check if number is even or odd
document.getElementById('evenOddForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let number = parseFloat(document.getElementById('evenOdd').value);
  let result = (number % 2 === 0) ? "Parillinen" : "Pariton";
  document.getElementById('result3').textContent = "Luku on: " + result;
});

// Tehtävä 4: Suggest vehicle based on age
document.getElementById('vehicleForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let age = parseInt(document.getElementById('age').value);
  let vehicle;
  if (age < 16) {
      vehicle = "Polkupyörä";
  } else if (age < 18) {
      vehicle = "Mopo";
  } else {
      vehicle = "Auto";
  }
  document.getElementById('result4').textContent = "Ajoneuvo: " + vehicle;
});

// Tehtävä 5: Translate "Hei maailma" into different languages
document.getElementById('translateForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let lang = document.getElementById('language').value;
  let translation;
  if (lang === "eng") {
      translation = "Hello World";
  } else
