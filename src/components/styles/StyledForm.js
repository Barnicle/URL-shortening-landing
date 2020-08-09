import styled from "styled-components";
const StyledForm = styled.form`
  position: absolute;
  top: -5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: min-content;
  background: url("/bg-shorten-desktop.svg")
    ${(props) => props.theme.darkViolet} no-repeat center center;
  background-size: cover;
  object-fit: contain;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 50px;

  input {
    max-width: 600px;
    min-width: 300px;
    border-radius: 10px;
    padding: 15px;
    border: 1px solid transparent;
  }
  button {
    border: 1px solid transparent;
    min-width: 300px;
    border-radius: 10px;
    padding: 15px;
    white-space: nowrap;
    margin: 0;
    margin-left: 2rem;
  }
  @media (max-width: 568px) {
    background: url("/bg-shorten-mobile.svg")
      ${(props) => props.theme.darkViolet} no-repeat right;
    background-size: cover;
    flex-flow: column;
    border-radius: 20px;
    width: 90%;
    padding: 30px;

    button {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
export default StyledForm;
