// Get a reference to the form and the result box
const form = document.getElementById('result-form');
const resultBox = document.getElementById('result-box');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from actually submitting
  event.preventDefault();

 // get the score from the URL
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("score");
console.log("Score:", score); // add this line to check the value of score


// display the score
const scoreTag = document.querySelector("#score");
scoreTag.innerText = score;

  // Show the result box
  resultBox.style.display = 'block';
});

const resultForm = document.querySelector('#result-form');
const nameInput = document.querySelector('#name');
const resultText = document.querySelector('#result-text');

resultForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const playerName = nameInput.value;
  const scoreElement = document.querySelector('#score');
  const score = scoreElement.textContent;
  

  // Save the player's name and score to local storage
  const players = JSON.parse(localStorage.getItem('players') || '[]');
  players.push({ name: playerName, score: score });
  localStorage.setItem('players', JSON.stringify(players));

  // Display the top player names from local storage
const topPlayers = getTopPlayers();
const topPlayersText = topPlayers.length > 0 ? 'Top players:' : '';
document.querySelector('#top-players').textContent = topPlayersText;
topPlayers.forEach((player) => {
  const p = document.createElement('p');
  p.textContent = `${player.name}: ${player.score}`;
  document.querySelector('#top-players').appendChild(p);
});

  document.querySelector('#result-box').style.display = 'block';
});

function getTopPlayers() {
  const players = JSON.parse(localStorage.getItem('players') || '[]');
  return players.sort((a, b) => b.score - a.score).slice(0, 10);
}
// Get a reference to the clear data button
const clearDataButton = document.getElementById('clear-data');

// Add an event listener for the clear data button
clearDataButton.addEventListener('click', () => {
  // Clear the local storage
  localStorage.clear();

  // Clear the top players list
  const topPlayersList = document.querySelector('#top-players');
  topPlayersList.innerHTML = '';
});

// Define some functions to calculate the values
function calculateWpm() {
  // TODO: Implement this function
  return 0;
}

function calculateCpm() {
  // TODO: Implement this function
  return 0;
}

function countMistakes() {
  // TODO: Implement this function
  return 0;
}
