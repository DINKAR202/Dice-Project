import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  
  const getDiceImage = (currentDice) => {
    // Dynamically import the image based on the currentDice value
    return import(`../../public/images/dice/dice_${currentDice}.png`);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={getDiceImage(currentDice)} alt={`dice_${currentDice}`} />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dice {
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 24px;
  }
`;
