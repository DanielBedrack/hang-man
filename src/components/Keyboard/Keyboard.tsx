import './Keyboard.scss';
import lettersList from '../../letterList.json';

const KEYS = lettersList; // Use the imported JSON object directly

type KeyBoardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  disabled
}: KeyBoardProps) => {
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.letters.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${'letter-btn'} ${isActive ? 'active' : ''} ${
              isInactive ? 'inactive' : ''
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
export default Keyboard