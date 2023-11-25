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
  background: linear-gradient(180deg, #6b2e48, #6b2e48); 
  ${mobile({ display: "none" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  transition: all 1.5s ease;
  padding: 20px 60px;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  border-radius: 30px;
  padding: 20px 60px;
  // background: #fff;
`;

const SlideHearder = styled.div`
  align-items: center;
  border-radius: 30px;
  padding: 20px 60px;
  background: linear-gradient(180deg, #6b2e48, #6b2e48); 
  `;

const SlideBody = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 20px 60px;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;

const Desc = styled.p`
  margin: 5xpx 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const About = () => {
    return (
        <Container>
            <Wrapper>
                {aboutData.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                      <SlideHearder>
                        <Title>{item.title}</Title>
                      </SlideHearder>
                      <SlideBody>
                        <ImgContainer>
                            {/* <Title>{item.title}</Title> */}
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
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
