import React, { Fragment } from "react";
import Card from "./Card";
import Form from "./Form";
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
    <Fragment>
      <StyledCardsWrapper>
        <Form />
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
        <StyledCards>
          <div className="green-line"></div>
          {Object.keys(cards).map((el) => (
            <Card key={cards[el].name} props={cards[el]} />
          ))}
        </StyledCards>
      </StyledCardsWrapper>
    </Fragment>
  );
};
const StyledCardsWrapper = styled.div`
  position: relative;
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
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  z-index: 5;
  .green-line {
    position: absolute;
    width: 500px;
    top: 50%;
    background: ${(props) => props.theme.cyan};
    height: 10px;
    z-index: 3;
  }
  @media (max-width: 845px) {
    flex-flow: column wrap;
    .green-line {
      transform: rotate(90deg);
    }
  }
`;
export default Cards;
