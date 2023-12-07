import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #c1eec6;
  // background: linear-gradient(360deg, #c1eec6, #FFF);
  // background: linear-gradient(180deg, #fff, #FFFFB9, #c1eec6);
  // background: linear-gradient(180deg, #fff, #c1eec6);
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

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
//   ${mobile({ flex: "9" })}
// `;

// const Button = styled.button`
//   flex: 2;
//   border: none;
//   background: teal;
//   color: white;
//   ${mobile({ flex: "1" })}
// `;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  // background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Input1 = styled.textarea`
  flex: 1;
  min-width: 90%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 10px 0px 0px;
  // background-color: teal;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Wrapper>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="email" />
          <Input1 placeholder="Comments" />
          <Button>Send</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
