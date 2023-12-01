import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import mainLogo from "../images/main_Logo.svg";
import Resume from "../pdfs/VenuAdimulam.pdf";

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 70%;
`;

const InfoContainer = styled.div`
  flex: 1;
  // padding: 50px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
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

const Button = styled.a`
  border: 4px solid #c1eec6;
  background-color: #c1eec6;
  cursor: pointer;
  font-weight: 500;
  font-size: 1em;
  text-decoration: none;
  color: #000;
  display: flex;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 20px;

  &:hover {
    background-color: white;
    transition: all 1s ease;
  }
`;

const Slider = () => {  
  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <>
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={mainLogo} />
              </ImgContainer>
              <InfoContainer>
                <Greeting>{item.greeting}</Greeting>
                <Title>Venu<span style={{color: "#add6b2"}}> Adimulam</span></Title>
                <Desc>{item.desc}</Desc>
                <Button href={Resume} target="_blank">View Resume</Button>
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
