import Card from "./Card";
import styled from "styled-components";
const Cards = () => {
  const cards = [
    {
      img: "/icon-brand-recognition.svg",
      header: "Brand Recognition",
      text:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    },
    {
      img: "/icon-detailed-records.svg",
      header: "Detailed Records",
      text:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: "/icon-fully-customizable.svg",
      header: "Fully Customizable",
      text:
        "Improve brand awdreness and content discoverability through customizable links, supercharging audience engagement",
    },
  ];

  return (
    <StyledCardsWrapper>
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <StyledCards>
        {Object.keys(cards).map((el) => (
          <Card key={cards[el].name} props={cards[el]} />
        ))}
      </StyledCards>
    </StyledCardsWrapper>
  );
};
const StyledCardsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.gray};
  > p {
    max-width: 500px;
    color: ${(props) => props.theme.grayishViolet};
  }
`;
const StyledCards = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
export default Cards;
