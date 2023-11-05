import styled from "styled-components";
import { useEffect, useState } from "react";

const RoleDice = ({ currentDice, roleDice }) => {
  const [diceImage, setDiceImage] = useState(null);

  useEffect(() => {
    // Construct the image source URL based on the currentDice value
    const imageSource = `/Dice-Project/images/dice/dice_${currentDice}.png`;

    // Preload the image to ensure it's available for rendering
    const img = new Image();
    img.src = imageSource;
    img.onload = () => {
      setDiceImage(imageSource);
    };
  }, [currentDice]);

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        {diceImage && (
          <img src={diceImage} alt={`dice_${currentDice}`} />
        )}
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
};`