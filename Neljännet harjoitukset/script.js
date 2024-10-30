//Tehtävä 1: Scrabble Calculator
function calculateScrabbleScore() {
  const word = document.getElementById('scrabbleWord').value.toUpperCase();
  const scores = {
      "A": 1, "E": 1, "I": 1, "N": 1, "S": 1, "T": 1,
      "Ö": 2, "Ä": 2, "K": 2, "L": 2,
      "U": 3, "M": 3,
      "Y": 4, "H": 4, "J": 4, "P": 4, "R": 4, "V": 4,
      "D": 7, "Ö": 7,
      "B": 8, "F": 8, "G": 8,
      "C": 10
  };
  let score = 0;
  for (let letter of word) {
      if (scores[letter] !== undefined) {
          score += scores[letter];
      } else {
          score += 12;  // For letters not in the list
      }
  }
  document.getElementById('scrabbleResult').innerText = `Sanan pisteet ovat: ${score}`;
}

//Tehtävä 2: Lotto Number Generator
function generateLottoNumbers() {
  let lottoNumbers = [];
  while (lottoNumbers.length < 7) {
    let num = Math.floor(Math.random() * 99) + 1;  // Random number between 1-99

    let isDuplicate = false;
    for (let i = 0; i < lottoNumbers.length; i++) {
      if (lottoNumbers[i] === num) {
        isDuplicate = true;  
        break; 
      }
    }
    if (!isDuplicate) {
      lottoNumbers.push(num);
    }
  }
  document.getElementById('lottoResult').innerText = `Lottorumerot: ${lottoNumbers.join(", ")}`;
}

//Tehtävä 3: 2D Array to Table
function generateTable() {
  const array2D = [
      [document.getElementById('row1col1').value, document.getElementById('row1col2').value, document.getElementById('row1col3').value, document.getElementById('row1col4').value],
      [document.getElementById('row2col1').value, document.getElementById('row2col2').value, document.getElementById('row2col3').value, document.getElementById('row2col4').value],
      [document.getElementById('row3col1').value, document.getElementById('row3col2').value, document.getElementById('row3col3').value, document.getElementById('row3col4').value],
      [document.getElementById('row4col1').value, document.getElementById('row4col2').value, document.getElementById('row4col3').value, document.getElementById('row4col4').value],
      [document.getElementById('row5col1').value, document.getElementById('row5col2').value, document.getElementById('row5col3').value, document.getElementById('row5col4').value]
  ];
  let table = document.getElementById('arrayTable');
  table.innerHTML = '';
  for (let i = 0; i < array2D.length; i++) {
      let row = '<tr>';
      for (let j = 0; j < array2D[i].length; j++) {
          row += '<td>' + array2D[i][j] + '</td>'; 
      }
      row += '</tr>'; 
      table.innerHTML += row; 
  }
}

//Tehtävä 4: Card Deck Simulation
function drawCards() {
  let suits = ['♠', '♥', '♦', '♣'];  
  let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let deck = [];

  for (let i = 0; i < suits.length; i++) { 
      for (let j = 0; j < values.length; j++) {  
          deck.push(values[j] + suits[i]);  
      }
  }
  deck.sort(function() { return 0.5 - Math.random(); }); 
  let hand = deck.slice(0, 5); 
  document.getElementById('cardResult').innerText = hand.join(', ');
}