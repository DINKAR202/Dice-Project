import styled from "styled-components"
import Dice from '../../public/images/dice-.png'
import '../App.css';
import { Button } from "./styled/Button";
import CopyRight from "./CopyRight";
import NavBar from "./NavBar";

const StartGame = ({ toggle }) => {
  return (
    <>
    <NavBar />
    <Container>
        <div>
            <img className="Dice-img" src={Dice} alt="Dice img" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button
            onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
    <CopyRight />
    </>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`