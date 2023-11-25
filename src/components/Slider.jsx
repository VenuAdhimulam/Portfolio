import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Gradient } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  background: #fff;
  mix-blend-mode: hard-light;
`;

const ColorBlend = styled.div`
  background: linear-gradient(180deg, #fff, #ebfaed);
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Greeting = styled.h6`
  margin: 10px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Desc = styled.p`
  margin: 5xpx 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Slider = () => {  
  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <>
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Greeting>{item.greeting}</Greeting>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </InfoContainer>
            </Slide>
            <ColorBlend/>
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
