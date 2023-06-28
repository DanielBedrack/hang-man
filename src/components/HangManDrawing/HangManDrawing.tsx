import './HangManDrawing.scss'

const Head = (
  <div className='head'></div>
)
const Body = (
  <div className='body'></div>
)
const Right_Arm = <div className="right-arm"></div>;
const Left_Arm = <div className="left-arm"></div>;
const Right_Leg = <div className="right-leg"></div>;
const Left_Leg = <div className="left-leg"></div>;

const BODY_PARTS = [Head, Body, Right_Arm, Left_Arm, Right_Leg, Left_Leg]

type HangManDrawingProps = {
  numberOfGuesses: number
};

const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div className="draw">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hang-bar"></div>
      <div className="upper-bar"></div>
      <div className="vertical-bar"></div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default HangManDrawing
