import {  SearchOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, mobileLandScape } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edfbee;
  position: relative;
  border-radius: 15px;
  box-shadow: 0.9px 0.9px 0.9px rgba(0.7, 0.7, 0.7, 0.7);

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.1);
  }

  ${mobile({ width: "100px", height: "100px" })}
  ${mobileLandScape({ width: "100px", height: "100px" })};
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  ${mobile({ width: "75px", height: "75px" })}
  ${mobileLandScape({ width: "75px", height: "75px" })}
`;

const Image = styled.img`
  height: 50%;
  z-index: 2;
  border-radius: 39%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Certificate = ({ item }) => {
  return (
    <Container onClick={() => window.location = item.link}>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <SearchOutlined/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Certificate;
