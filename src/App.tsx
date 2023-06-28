import { useState, useEffect, useCallback } from 'react';
import words from './wordList.json';
import HangManDrawing from './components/HangManDrawing/HangManDrawing';
import HangManWord from './components/HangManWord/HangManWord';
import Keyboard from './components/Keyboard/Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]; // Brings a random word
  });
  const [guessesdLetters, setGuessesdLetters] = useState<string[]>([]);

console.log(wordToGuess)
  const inCorrectLetters = guessesdLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessesdLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessesdLetters.includes(letter) || isLoser || isWinner) return;

      setGuessesdLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessesdLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessesdLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);
  
  return (
    <div className="container">
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {isWinner && 'Winner! - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>{' '}
      <HangManDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangManWord
        guessesdLetters={guessesdLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessesdLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
