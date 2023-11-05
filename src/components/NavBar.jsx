import styled from "styled-components"

const NavBar = () => {
  return (
    <>
        <Top>
                <h1>Dice Game</h1>
        </Top>
    </>
  )
}

export default NavBar

const Top = styled.div`
    position: absolute;
    width: 93%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 15px 50px;
    opacity: 0.5;
    background-color: hsla(120, 100%, 50%, 0.5);
    color: black !important;
    font-family: 'Roboto', sans-serif;
`;