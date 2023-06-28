import './HangManWord.scss'



type HangmanWordProps = {
  guessesdLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangManWord = ({
  guessesdLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              visibility:
                guessesdLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessesdLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangManWord
