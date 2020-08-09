import styled from "styled-components";

const Card = (props) => {
  const { img, header, text } = props.props;
  console.log(props.props);
  return (
    <StyledCard>
      <div>
        <img src={`${img}`} />
      </div>
      <h4>{header}</h4>
      <p>{text}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
  width: 25rem;
  max-height: 25rem;
  padding: 3rem;
  background: white;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  margin: 1rem;
  z-index: 5;

  div {
    position: absolute;
    top: -2rem;
    left: 3rem;
    padding: 1rem;
    p {
      color: ${(props) => props.theme.grayishViolet};
    }
    background: ${(props) => props.theme.darkViolet};
    border-radius: 50%;
    img {
      width: 20px;
    }
  }
`;

export default Card;
