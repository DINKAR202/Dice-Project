import styled from "styled-components";

const CopyRight = () => {
  return (
    <Copy>
      <small>
        Copyright &copy; 2023 <b><a className="name" href="https://www.instagram.com/its_me_aditi65/">AditiDev.</a></b>
      </small>
    </Copy>
  );
};

export default CopyRight;

const Copy = styled.div`
  /* margin-top: -25px !important; */
  background-color: black;
  color: white;
  padding: 5px;
  text-align: center;
  margin-top: 9px;

  .name {
    color: red;
  }
`;
