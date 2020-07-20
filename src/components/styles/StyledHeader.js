import styled from "styled-components";
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  place-items: center;
  padding-left: 5rem;
  padding-right: 5rem;

  .dropBtn {
    display: none;
  }
  h2 {
    font-size: 2rem;
  }
  .drop_content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    font-size: 1.4rem;
    color: ${(props) => props.theme.gray};
  }
  .drop_content a {
    margin: 5px;
  }
  .drop_content hr {
    display: none;
  }
`;
export default StyledHeader;
