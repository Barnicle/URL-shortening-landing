import StyledButton from "./styles/StyledButton";
import HardWorking from "../../public/illustration-working";
import styled from "styled-components";
const GetStarted = () => (
  <StyledGetStarted>
    <div>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <StyledButton>Get Started</StyledButton>
    </div>
    <img
      className="front-page-img"
      src="/illustration-working.svg"
      alt="front-page-logo"
    />
  </StyledGetStarted>
);

const StyledGetStarted = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  place-items: center;
  padding: 6rem;
  div {
    h1 {
      font-weight: 700;
      font-size: 8rem;
    }
    button {
      padding: 1rem;
      border-radius: 2rem;
    }
    p {
      max-width: 50rem;
      width: 100%;
    }
  }
  .front-page-img {
    max-width: 600px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    div {
      h1 {
        font-size: 4rem;
      }
      grid-row: 2;
    }
  }
`;

export default GetStarted;
