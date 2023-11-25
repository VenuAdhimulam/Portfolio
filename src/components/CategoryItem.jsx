import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "40vh",
    background: "rgba(255, 255, 255, 0.5)",
  })};
`;

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const Text = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 800;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  background: white;
  padding: 10px;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      <Text>

      </Text>
    </Container>
  );
};

export default CategoryItem;
