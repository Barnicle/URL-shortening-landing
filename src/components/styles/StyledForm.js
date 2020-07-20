import styled from "styled-components";
const StyledForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
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
    min-width: 200px;
    border-radius: 10px;
    padding: 15px;
    border: 1px solid transparent;
  }
  button {
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 15px;
    white-space: nowrap;
    margin: 0;
    margin-left: 2rem;
  }
  @media (max-width: 568px) {
    flex-flow: column;
    width: 100%;
  }
`;
export default StyledForm;
