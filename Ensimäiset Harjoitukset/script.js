document.getElementById('sortForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);

  let numbers;
  
  if (num1 <= num2 && num1 <= num3) {
      if (num2 <= num3) {
          numbers = [num1, num2, num3];
      } else {
          numbers = [num1, num3, num2];
      }
  } else if (num2 <= num1 && num2 <= num3) {
      if (num1 <= num3) {
          numbers = [num2, num1, num3];
      } else {
          numbers = [num2, num3, num1];
      }
  } else {
      if (num1 <= num2) {
          numbers = [num3, num1, num2];
      } else {
          numbers = [num3, num2, num1];
      }
  }

  document.getElementById('result1').innerHTML = "Annoit luvut: " + num1 + " " + num2 + " " + num3 + "<br>Järjestetyt luvut: " + numbers.join(', ');
});

//Tehtävä 2: Find the largest of five numbers
document.getElementById('maxForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById('max1').value);
  let num2 = parseFloat(document.getElementById('max2').value);
  let num3 = parseFloat(document.getElementById('max3').value);
  let num4 = parseFloat(document.getElementById('max4').value);
  let num5 = parseFloat(document.getElementById('max5').value);

  let maxNumber = num1;

  if (num2 > maxNumber) {
      maxNumber = num2;
  }
  if (num3 > maxNumber) {
      maxNumber = num3;
  }
  if (num4 > maxNumber) {
      maxNumber = num4;
  }
  if (num5 > maxNumber) {
      maxNumber = num5;
  }

  document.getElementById('result2').innerHTML = "Annoit luvut: " + num1 + " " +  num2 + " " + num3 + " " + num4 + " " + num5 + "<br>Suurin luku on: " + maxNumber;
});

//Tehtävä 3 Check if the number is even or odd
document.getElementById('evenOddForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let number = parseFloat(document.getElementById('evenOdd').value);
  
  if (number % 2 === 0) {
      document.getElementById('result3').innerHTML = "Antamasi luku: " + number +"<br>Luku on: Parillinen";
  } else {
      document.getElementById('result3').innerHTML = "Antamasi luku: " + number +"<br>Luku on: Pariton";
  }
});

//Tehtävä 4: Suggest vehicle based on age
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

  document.getElementById('result4').innerHTML = "Voit ajaa  " + vehicle;
});

//Tehtävä 5: Translate "Hei maailma" 
document.getElementById('translateForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let lang = document.getElementById('language').value;
  let translation;

  if (lang === "eng") {
      translation = "Hello World";
  } else if (lang === "swe") {
      translation = "Hej Världen";
  } else {
      translation = "Hola Mundo";
  }

  document.getElementById('result5').textContent = translation;
});
