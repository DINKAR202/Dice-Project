import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p><li>Select any number</li></p>
                <p><li>Click on dice image</li></p>
                <p><li>after click on dice if selected number is equal to dice number you will got same point as dice{" "}</li></p>
                <p><li>If you get wrong guess then 2 points will be dedcuted</li> </p>
            </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #f8f1f1;
    padding: 20px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;

    }
`;