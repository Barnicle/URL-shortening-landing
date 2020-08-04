import StyledButton from "./styles/StyledButton";
import HardWorking from "../../public/illustration-working";
import styled from "styled-components";
const PreFooter = () => (
  <StyledPreFooter>
    <h2>Boost your links today</h2>
    <StyledButton radius="10px">Get Started</StyledButton>
  </StyledPreFooter>
);

const StyledPreFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 1px solid transparent;
  height: 100%;
  padding: 5rem;
  color: white;
  background: url("/bg-shorten-desktop.svg")
    ${(props) => props.theme.darkViolet} no-repeat;
  background-size: cover;
`;

export default PreFooter;
