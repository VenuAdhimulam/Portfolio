import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: linear-gradient(360deg, #c1eec6, #FFF);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "15px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "100%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${mobile({ flex: "9" })}
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background: teal;
  color: white;
  ${mobile({ flex: "1" })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
