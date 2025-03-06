/*******************************************************
 * Word Sprint (Anagram Challenge)
 * 
 * - Accepts any valid anagram of the chosen word,
 *   as long as it's in the dictionary.
 * - Difficulty ramps from short words (3-4 letters),
 *   medium (5-6), hard (7-8), to insane (9+).
 * - Timer starts at 15s, drops to 10s after 10 correct words.
 * - Shows correct answer if guess is wrong or time runs out.
 *******************************************************/

/* ------------ DOM Selectors ------------ */
const scrambledLetters = document.getElementById("scrambledLetters");
const answerInput      = document.getElementById("answerInput");
const timerDisplay     = document.getElementById("timer");
const scoreDisplay     = document.getElementById("score");
const streakDisplay    = document.getElementById("streak");
const startBtn         = document.getElementById("startBtn");
const retryBtn         = document.getElementById("retryBtn");
const correctAnswerDiv = document.getElementById("correctAnswer");

/* ------------ Word Buckets ------------ */
let wordsEasy3_4    = [];
let wordsMed5_6     = [];
let wordsHard7_8    = [];
let wordsInsane9Up  = [];

/* ------------ Master Dictionary Set ------------ */
let dictionarySet = new Set(); // Will store all valid words for membership checks

/* ------------ Game Variables ------------ */
let currentWord      = "";
let timer            = null;
let timeRemaining    = 15; // Start with 15s
let baseTime         = 15; // Switches to 10 after 10 correct solutions
let score            = 0;
let streak           = 0;
let isGameActive     = false;
let solvedWordsCount = 0; // How many words the player solved correctly so far

/**
 * Load the dictionary, segment by difficulty, and build a Set for membership checks.
 */
async function loadWords() {
  try {
    // Adjust path/filename as needed
    const response = await fetch("words_filtered.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); // array of words (3-9 letters or whichever you have)

    // Store all words in a Set for quick membership checks
    dictionarySet = new Set(data);

    // Sort words into difficulty buckets by length
    data.forEach(word => {
      const w = word.trim().toLowerCase();
      const len = w.length;
      if (len >= 3 && len <= 4) {
        wordsEasy3_4.push(w);
      } else if (len <= 6) {
        wordsMed5_6.push(w);
      } else if (len <= 8) {
        wordsHard7_8.push(w);
      } else {
        wordsInsane9Up.push(w);
      }
    });

    console.log("Easy (3-4):", wordsEasy3_4.length);
    console.log("Medium (5-6):", wordsMed5_6.length);
    console.log("Hard (7-8):", wordsHard7_8.length);
    console.log("Insane (9+):", wordsInsane9Up.length);

    // Enable the Start button once dictionary is loaded
    startBtn.disabled = false;
  } catch (error) {
    console.error("Failed to load words:", error);
  }
}

/**
 * Pick a new word from the correct difficulty bucket based on solvedWordsCount
 */
function pickNewWord() {
  // Difficulty progression example:
  //   0-4   => Easy3_4
  //   5-9   => Med5_6
  //   10-14 => Hard7_8
  //   15+   => Insane9Up
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

  // Fallback if bucket is empty (unlikely if you have many words)
  if (bucket.length === 0) {
    const allBuckets = [wordsEasy3_4, wordsMed5_6, wordsHard7_8, wordsInsane9Up];
    const nonEmpty = allBuckets.filter(b => b.length > 0);
    bucket = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
  }

  const randomIndex = Math.floor(Math.random() * bucket.length);
  currentWord = bucket[randomIndex];
}

/**
 * Shuffle the letters of the puzzle word
 */
function shuffleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

/**
 * Display scrambled word
 */
function displayScrambledWord() {
  let scrambled = shuffleWord(currentWord);
  // If accidentally the same as original, reshuffle
  while (scrambled === currentWord) {
    scrambled = shuffleWord(currentWord);
  }
  scrambledLetters.textContent = scrambled.split("").join(" ");
}

/**
 * Start the game
 */
function startGame() {
  // Ensure we have words loaded
  if (
    wordsEasy3_4.length === 0 &&
    wordsMed5_6.length === 0 &&
    wordsHard7_8.length === 0 &&
    wordsInsane9Up.length === 0
  ) {
    alert("Word list not loaded yet!");
    return;
  }

  // Reset game variables
  score            = 0;
  streak           = 0;
  solvedWordsCount = 0;
  baseTime         = 15;
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
 * Timer countdown
 */
function countdown() {
  timeRemaining--;
  timerDisplay.textContent = `Time: ${timeRemaining}`;
  if (timeRemaining <= 0) {
    failRound("Time's up!");
  }
}

/**
 * Show correct answer, reset streak, move to next word
 */
function failRound(reason) {
  clearInterval(timer);
  timer = null;

  correctAnswerDiv.textContent = `Correct word was: ${currentWord}`;
  correctAnswerDiv.classList.remove("hidden");

  streak = 0;
  updateScoreDisplay();

  // After short delay, continue
  setTimeout(() => {
    nextRound();
  }, 2000);
}

/**
 * Move to the next round (pick new puzzle word, reset time, etc.)
 */
function nextRound() {
  correctAnswerDiv.classList.add("hidden");
  pickNewWord();
  displayScrambledWord();

  if (solvedWordsCount >= 10) {
    baseTime = 10; // reduce time after 10 correct solves
  }
  timeRemaining = baseTime;
  timerDisplay.textContent = `Time: ${timeRemaining}`;

  answerInput.value = "";
  answerInput.focus();

  timer = setInterval(countdown, 1000);
}

/**
 * Check if userGuess is a valid anagram of the puzzle word
 * and is in the dictionary
 */
function checkAnswer() {
  if (!isGameActive) return;

  const userGuess = answerInput.value.trim().toLowerCase();

  if (isValidAnagram(userGuess, currentWord) && dictionarySet.has(userGuess)) {
    // Correct guess
    clearInterval(timer);
    timer = null;

    score++;
    streak++;
    solvedWordsCount++;
    updateScoreDisplay();

    if (solvedWordsCount >= 10) {
      baseTime = 10; // reduce base time after 10 correct words
    }

    nextRound();
  } else {
    // Incorrect => show correct, then next
    failRound("Incorrect guess");
  }
}

/**
 * Helper function: checks if guess is an anagram of target
 * by comparing sorted letters
 */
function isValidAnagram(guess, target) {
  if (guess.length !== target.length) return false;
  const sortA = guess.split("").sort().join("");
  const sortB = target.split("").sort().join("");
  return sortA === sortB;
}

/**
 * Update score + streak UI
 */
function updateScoreDisplay() {
  scoreDisplay.textContent  = `Score: ${score}`;
  streakDisplay.textContent = `Streak: ${streak}`;
}

/**
 * End the game (unused in this continuous-play approach)
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

// Disable Start until words load
startBtn.disabled = true;

// Load words on script execution
loadWords();
