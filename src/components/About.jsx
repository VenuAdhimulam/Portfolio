import styled from "styled-components";
import React from "react";
import { aboutData } from "../data";
import { mobile, mobileLandScape } from "../responsive";
import Headshot from "../images/HeadShot.png";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  width: 100%;
  background: linear-gradient(180deg, #c1eec6, #c1eec6);
  overflow: hidden;
`;

const ImgContainer = styled.div`
  flex: 0.8;
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;

  ${mobile({ width: "300px", height: "auto" })};
  ${mobileLandScape({ padding: "0px", margin: "50px", width: "auto" })};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  flex: 1.2;
  ${mobile({ width: "250px", height: "auto" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  padding: 20px 100px;
  margin: 0px 50px;

  ${mobile({ padding: "0px", margin: "50px", width: "auto" })};
  ${mobileLandScape({ width: "auto" })}
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.4);

  ${mobile({ width: "80vw" })};
`;

const SlideBody = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 20px 60px;
  overflow: hidden;

  ${mobile({ flexDirection: "column", width: "100%" })}
  ${mobileLandScape({ flexDirection: "column", width: "auto" })}
`;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 40px;

  ${mobile({ 
    fontSize: "2.5rem",
    paddingBottom: "20px"
   })};
`;

const Desc = styled.p`
  margin: 5px 0px;
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: 3px;
  text-align: justify;
  border-left: 2px solid #6d9e8f;
  padding-left: 20px;

  ${mobile({ 
    fontSize: "1.2em",
    lineHeight: "1.5em",
    wordSpacing: "0.2em",
    letterSpacing: "0.2rem",
    textAlign: "start"
  })};
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        {aboutData.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <SlideBody>
              <ImgContainer>
                <Image src={Headshot} alt="Headshot" />
              </ImgContainer>
              <InfoContainer>
                <Title>About<span style={{ color: "#add6b2" }}> Me</span></Title>
                <Desc>{item.desc}</Desc>
              </InfoContainer>
            </SlideBody>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default About;