import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import git from "../images/svg/git-branch.svg";
import { Link as ScrollLink } from 'react-scroll';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  color: #000;
  width: 100%;
  justify-content: center;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${props => props.backgroundColor};
  ${mobile({ flexDirection: 'column', height: "auto" })}
`;

const Wrapper = styled.div`
  position: sticky;
  padding-left: 100px; 
  padding-right: 100px;
  display: flex;
  width: 100%;
  ${mobile({ flexDirection: 'column', alignItems: 'center', padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ display: 'none' })}
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
  ${mobile({ marginTop: '20px', justifyContenet: "space-between" })}
`;

const MenuItems = styled(ScrollLink)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  &:hover {
    text-decoration: underline;
    text-decoration-color: #add6b2;
    transform: scale(1.1);
  }

  ${mobile({ marginLeft: "15px" })}
`;

const Img = styled.img`
  width: 30px;
`;

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > 100) {
        setNavbarColor('white'); 
      } else {
        setNavbarColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Container style={{ backgroundColor: navbarColor }}>
      <Wrapper>
        <Left>
          <Img src={git} />
          <Logo>
            <strong>Port<span style={{ color: "#add6b2" }}>Folio</span></strong>
          </Logo>
        </Left>
        {/* <Center>
        
        </Center> */}
        <Right>
          <MenuItems smooth={true} duration={2000} to="home" >Home</MenuItems>
          <MenuItems smooth={true} duration={2000} to="about" >About</MenuItems>
          <MenuItems smooth={true} duration={2000} to="experience" >Experience</MenuItems>
          <MenuItems smooth={true} duration={2000} to="education" >Education</MenuItems>
          <MenuItems smooth={true} duration={2000} to="certificates" >Certificates</MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
