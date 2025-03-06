/*******************************************************
 * Word Sprint (Anagram Challenge)
 * 
 * NEW Features:
 * 1. Loads words from a JSON array (≥ 3 letters).
 * 2. Segments them by length:
 *    - Easy3_4:    3-4 letters
 *    - Medium5_6:  5-6 letters
 *    - Hard7_8:    7-8 letters
 *    - Insane9Up:  9+ letters
 * 3. Starts each round with 15 seconds until the 
 *    player has solved 10 words, then 10 seconds.
 * 4. Shows correct answer if guess is wrong or time out, 
 *    then automatically goes to next round.
 *******************************************************/

/* ------------ Selectors ------------ */
const scrambledLetters = document.getElementById("scrambledLetters");
const answerInput      = document.getElementById("answerInput");
const timerDisplay     = document.getElementById("timer");
const scoreDisplay     = document.getElementById("score");
const streakDisplay    = document.getElementById("streak");
const startBtn         = document.getElementById("startBtn");
const retryBtn         = document.getElementById("retryBtn");
const correctAnswerDiv = document.getElementById("correctAnswer");

/* ------------ Game Variables ------------ */
let wordsEasy3_4    = [];
let wordsMed5_6     = [];
let wordsHard7_8    = [];
let wordsInsane9Up  = [];

let currentWord      = "";
let timer            = null;
let timeRemaining    = 15;  // Start with 15 seconds
let baseTime         = 15;  // This will switch to 10 after 10 correct words
let score            = 0;
let streak           = 0;
let isGameActive     = false;
let solvedWordsCount = 0;   // Tracks how many words have been solved correctly

/* ------------ Load Word List (Async) ------------ */
async function loadWords() {
  try {
    // If your JSON file is named words_filtered.json, update the path as needed:
    const response = await fetch("words_filtered.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 'data' should be a JSON array of strings, e.g. ["cat","apple","banana", ...]
    const data = await response.json();

    // Sort words into buckets by length
    data.forEach(word => {
      const w = word.trim().toLowerCase();
      const len = w.length;
      if (len >= 3) {
        if (len <= 4) {
          wordsEasy3_4.push(w);
        } else if (len <= 6) {
          wordsMed5_6.push(w);
        } else if (len <= 8) {
          wordsHard7_8.push(w);
        } else {
          wordsInsane9Up.push(w);
        }
      }
    });

    console.log("Easy (3-4):", wordsEasy3_4.length);
    console.log("Medium (5-6):", wordsMed5_6.length);
    console.log("Hard (7-8):", wordsHard7_8.length);
    console.log("Insane (9+):", wordsInsane9Up.length);

    // Enable the Start button once words are loaded
    startBtn.disabled = false;
  } catch (error) {
    console.error("Failed to load words:", error);
  }
}

/* ------------ Difficulty Selection ------------ */
/**
 * Picks a new word from the correct "bucket" based on how many 
 * correct words the user has solved so far.
 */
function pickNewWord() {
  // Example progression:
  //   solvedWordsCount 0-4  => Easy (3-4 letters)
  //   solvedWordsCount 5-9  => Medium (5-6 letters)
  //   solvedWordsCount 10-14 => Hard (7-8 letters)
  //   solvedWordsCount 15+  => Insane (9+ letters)
  let bucket = [];

  if (solvedWordsCount < 5) {
    bucket = wordsEasy3_4;
  } else if (solvedWordsCount < 10) {
    bucket = wordsMed5_6;
  } else if (solvedWordsCount < 15) {
    bucket = wordsHard7_8;
  } else {
    bucket = wordsInsane9Up;
  }

  // If the chosen bucket is empty (unlikely with a large list), fallback to any non-empty bucket
  if (bucket.length === 0) {
    const allBuckets = [wordsEasy3_4, wordsMed5_6, wordsHard7_8, wordsInsane9Up];
    const nonEmpty = allBuckets.filter(b => b.length > 0);
    bucket = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
  }

  const randomIndex = Math.floor(Math.random() * bucket.length);
  currentWord = bucket[randomIndex];
}

/**
 * Shuffle letters of a word
 */
function shuffleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j  = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

/**
 * Display scrambled word
 */
function displayScrambledWord() {
  let scrambled = shuffleWord(currentWord);

  // If it accidentally matches the original, reshuffle
  while (scrambled === currentWord) {
    scrambled = shuffleWord(currentWord);
  }

  scrambledLetters.textContent = scrambled.split("").join(" ");
}

/* ------------ Game Flow ------------ */
function startGame() {
  // Make sure we have at least some words loaded
  if (
    wordsEasy3_4.length === 0 &&
    wordsMed5_6.length === 0 &&
    wordsHard7_8.length === 0 &&
    wordsInsane9Up.length === 0
  ) {
    alert("Word list not loaded yet!");
    return;
  }

  // Reset variables
  score            = 0;
  streak           = 0;
  solvedWordsCount = 0;
  baseTime         = 15;  // Start with 15s
  timeRemaining    = baseTime;
  isGameActive     = true;

  updateScoreDisplay();
  timerDisplay.textContent = `Time: ${timeRemaining}`;

  startBtn.classList.add("hidden");
  retryBtn.classList.add("hidden");
  correctAnswerDiv.classList.add("hidden");

  pickNewWord();
  displayScrambledWord();

  answerInput.value = "";
  answerInput.focus();

  if (timer) clearInterval(timer);
  timer = setInterval(countdown, 1000);
}

/**
 * Main countdown logic
 */
function countdown() {
  timeRemaining--;
  timerDisplay.textContent = `Time: ${timeRemaining}`;
  if (timeRemaining <= 0) {
    // Time ran out => show correct word, then next
    failRound("Time's up!");
  }
}

/**
 * Called when user fails to guess or guesses incorrectly
 * 1. Show correct answer
 * 2. Reset streak
 * 3. Move to next word after short delay
 */
function failRound(reason) {
  clearInterval(timer);
  timer = null;

  // Show correct answer
  correctAnswerDiv.textContent = `Correct word was: ${currentWord}`;
  correctAnswerDiv.classList.remove("hidden");

  // Reset streak
  streak = 0;
  updateScoreDisplay();

  // After 2 seconds, load next word
  setTimeout(() => {
    nextRound();
  }, 2000);
}

/**
 * Move to the next word
 */
function nextRound() {
  correctAnswerDiv.classList.add("hidden");
  pickNewWord();
  displayScrambledWord();

  // If solved >= 10 words, reduce time from 15 to 10
  if (solvedWordsCount >= 10) {
    baseTime = 10;
  }

  timeRemaining = baseTime;
  timerDisplay.textContent = `Time: ${timeRemaining}`;

  answerInput.value = "";
  answerInput.focus();

  timer = setInterval(countdown, 1000);
}

/**
 * Check player's guess (on Enter)
 */
function checkAnswer() {
  if (!isGameActive) return;

  const userGuess = answerInput.value.trim().toLowerCase();
  if (userGuess === currentWord) {
    // Correct guess
    clearInterval(timer);
    timer = null;

    score++;
    streak++;
    solvedWordsCount++;
    updateScoreDisplay();

    // If solved >= 10 words, reduce baseTime
    if (solvedWordsCount >= 10) {
      baseTime = 10;
    }

    // Move on to the next word
    nextRound();
  } else {
    // Incorrect => show correct answer, then next
    failRound("Incorrect guess");
  }
}

/**
 * Update score and streak
 */
function updateScoreDisplay() {
  scoreDisplay.textContent  = `Score: ${score}`;
  streakDisplay.textContent = `Streak: ${streak}`;
}

/**
 * End the game (unused in this continuous-play setup).
 */
function endGame() {
  isGameActive = false;
  clearInterval(timer);
  timer = null;
  scrambledLetters.textContent = "Game Over!";
  retryBtn.classList.remove("hidden");
  correctAnswerDiv.classList.add("hidden");
}

/* ------------ Event Listeners ------------ */
startBtn.addEventListener("click", startGame);
retryBtn.addEventListener("click", startGame);

// Check guess on Enter
answerInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

// Initially disable Start button until words are loaded
startBtn.disabled = true;

// Load the word list as soon as the script executes
loadWords();
