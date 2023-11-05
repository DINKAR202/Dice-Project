import styled from "styled-components"
import Dice2 from '../../public/images/dice/dice_1.png'

const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="dice"
        onClick={roleDice}
      // >
      >
        {/* <img src={`../../public/images/dice/dice_1.png`} alt={`dice_${currentDice}`} /> */}
        <img src={Dice2} alt={`dice_${currentDice}`} />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dice{
      cursor: pointer;
    }

    p{
      text-align: center;
      font-size: 24px;
    }
`
