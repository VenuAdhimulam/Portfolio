import React from "react";
import styled from "styled-components";
import { eduObj } from "../data";
import { mobile } from "../responsive";
import Education_Logo from "../images/education_Logo.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  mix-blend-mode: hard-light;
  padding: 50px;
  margin: 50px;
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
  width: 70%
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.66);
`;

const CourseTypo = styled.p`
  margin: 10px 0px;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 2px;
`;

const TitleDiv = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin: 15xpx 0px;
`;

const BodyDiv = styled.div`
  border-radius: 8px;
  margin: 15xpx 0px;
`;

const BoxDiv = styled.div`
  display: flex;
  margin: 30px 5px;
  border-right: 6px solid #c1eec6;
  border-left: 6px solid #c1eec6;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0.8px 0.8px 0.8px rgba(0, 0, 0, 0.4);
`;

const DescDiv = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LogoDiv = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 130px;
`;


const Education = () => {  
  return (
    <Container>
        <Slide>
          <InfoContainer>
            <TitleDiv>
              <Title>Education<span style={{color: "#c1eec7"}}></span></Title>
            </TitleDiv>
            <BodyDiv>
              {eduObj.map((item) => (
                <BoxDiv>
                  <DescDiv>
                    <Desc>{item.degree}</Desc>
                    <CourseTypo>{item.stream}</CourseTypo>
                    <Desc>{item.university}</Desc>
                    <Desc>{item.tenure}</Desc>
                  </DescDiv>
                  <LogoDiv>
                    <Logo src={item.logo} />
                  </LogoDiv>
                </BoxDiv>
              ))}
            </BodyDiv>
          </InfoContainer>
          <ImgContainer>
            <Image src={Education_Logo} />
          </ImgContainer>
        </Slide>
    </Container>
  );
};

export default Education;
