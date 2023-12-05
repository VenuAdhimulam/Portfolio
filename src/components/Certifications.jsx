import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Certificate from "./Certificate";
import { certifications } from "../data";

const Container = styled.div`
  display: flex;
  align-items: center;
  // background: #c1eec6;
  background: linear-gradient(180deg, #FFF, #c1eec6);
  ${mobile({ padding: "10px" })}
`;

const TitleDiv = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  // ${mobile({ fontSize: "40px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;

const CardsContainer = styled.div`
  flex: 1.5;
  display: flex;
  padding: 0 65px 65px 65px;
  margin: 20px 65px 65px 65px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin: 50px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: row;
`;

const Certifications = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <TitleDiv>
          <Title>Certificates</Title>
        </TitleDiv>
        <CardsContainer>
          {certifications.map((item) => (
            <Certificate item={item} key={item.id} />
          ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
