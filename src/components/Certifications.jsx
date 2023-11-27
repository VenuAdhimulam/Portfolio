import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Certificate from "./Certificate";
import { certifications } from "../data";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 0 65px 65px 65px;
  margin: 20px 65px 65px 65px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Certifications = () => {
  return (
    <Container>
      <Title>Certificates</Title>
      <CardsContainer>
        {certifications.map((item) => (
          <Certificate item={item} key={item.id} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Certifications;
