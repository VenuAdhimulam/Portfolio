import { Badge } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import git from "../images/svg/git-branch.svg";

const Container = styled.div`
  height: 60px;
  padding-left: 140px; 
  padding-right: 140px; 
  // border-bottom: 1px solid black;
  // background: #c1eec6;
  color: #000;
  // background: linear-gradient(250deg, #c1eec6, #FFF, #FFF);

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SeacrhContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItems = styled.div`
  fonyt-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {

    text-decoration: 1px solid underline;
    text-decoration-color: #add6b2;
    transform: scale(1.1);
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Img = styled.img`
  width: 30px;
`;

// const span = styled.span`
//   color: teal;
// `;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={git}/>
          <Logo>
            <strong>Port<span style={{color: "#add6b2"}}>Folio</span></strong>
          </Logo>
        </Left>
        <Center>
          
        </Center>
        <Right>
          <MenuItems>Home</MenuItems>
          <MenuItems>About</MenuItems>
          <MenuItems>Skills</MenuItems>
          <MenuItems>Experience</MenuItems>
          <MenuItems>Projects</MenuItems>
          <MenuItems>Contact</MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
