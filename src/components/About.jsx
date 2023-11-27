import styled from "styled-components";
import React from "react";
import { aboutData } from "../data";
import { mobile } from "../responsive";

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
  height: 100%;
  margin: 20px;
  // background: url('https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg');
  background-size: cover;
  padding: 25px;
  background-position: center;
  display: inline-block;
  overflow: hidden;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  transition: all 1.5s ease;
  padding: 20px 100px;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  border-radius: 30px;
  padding: 20px 30px;
  background: #fff;
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
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const About = () => {
    return (
        <Container>
            <Wrapper>
                {aboutData.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                      <SlideBody>
                        <ImgContainer>
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
