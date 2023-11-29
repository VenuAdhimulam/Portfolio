import styled from "styled-components";
import React from "react";
import { aboutData } from "../data";
import { mobile } from "../responsive";
import Blob from "../images/graph.png"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  width: 100%;
  background: #c1eec6;
  // background: linear-gradient(180deg, #c1eec6, #c1eec6); 
  ${mobile({ display: "none" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 400px;
  height: 400px;
  margin: 10px;
  background-size: cover;
  padding: 30px;
  background: url(${props => props.imageUrl}) center/cover; 
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30%;
  z-index: 2;
  padding: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  padding: 20px 100px;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 30px 60px;
  background: #fff;
  box-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.4);
`;

const SlideBody = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 20px 60px;
`;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 40px;
`;

const Desc = styled.p`
  margin: 5xpx 0px;
  font-size: 23px;
  font-weight: 300;
  letter-spacing: 4px;
  text-align: justify;
`;

const About = () => {
    return (
        <Container>
            <Wrapper>
                {aboutData.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                      <SlideBody>
                        <ImgContainer imageUrl={Blob}>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
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
