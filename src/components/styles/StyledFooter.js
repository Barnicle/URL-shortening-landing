import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  background: ${(props) => props.theme.darkBlue};
  padding: 2rem;
  color: white;

  .footer_links {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10rem;
    white-space: nowrap;
    h4 {
      margin-bottom: 1rem;
    }
  }
  .footer_links div {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  .footer_icons {
    svg {
      margin: 5px;
    }
    a:hover svg path {
      fill: ${(props) => props.theme.cyan};
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    place-items: center;
    .footer_links {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-gap: 1rem;
    }
    .footer_links div {
      align-items: center;
    }
  }
`;
export default StyledFooter;
