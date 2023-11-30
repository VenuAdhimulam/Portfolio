import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Certificate from "./Certificate";
import { certifications } from "../data";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 50px;
  padding: 50px;
  background: #FFF;
  // background: linear-gradient(180deg, #fff, #fff, #c1eec6);
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

const Certifications = () => {
  return (
    <Container>
      <TitleDiv>
        <Title>Certificates</Title>
      </TitleDiv>
      <CardsContainer>
        {certifications.map((item) => (
          <Certificate item={item} key={item.id} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Certifications;
