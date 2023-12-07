import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import git from "../images/svg/git-branch.svg";
import { Link as ScrollLink } from 'react-scroll';

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
  // background: #c1eec6;
  // background: linear-gradient(250deg, #c1eec6, #FFF, #FFF);

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  position: sticky;
  padding-left: 100px; 
  padding-right: 100px; 
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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

const MenuItems = {
  fonytSize: "14px",
  cursor: "pointer",
  marginLeft: "25px",
  
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#add6b2',
    transform: 'scale(1.1)',
  },
  // ${mobile({ fontSize: "12px", marginLeft: "10px" })}
};

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
        // setNavbarColor('rgba(0,0,0,0.9)'); 
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
          <Img src={git}/>
          <Logo>
            <strong>Port<span style={{color: "#add6b2"}}>Folio</span></strong>
          </Logo>
        </Left>
        {/* <Center>
          
        </Center> */}
        <Right>
          <ScrollLink smooth={true} duration={2000} to="home" style={MenuItems}>Home</ScrollLink>
          <ScrollLink smooth={true} duration={2000} to="about" style={MenuItems}>About</ScrollLink>
          <ScrollLink smooth={true} duration={2000} to="experience" style={MenuItems}>Experience</ScrollLink>
          <ScrollLink smooth={true} duration={2000} to="education" style={MenuItems}>Education</ScrollLink>
          <ScrollLink smooth={true} duration={2000} to="certificates" style={MenuItems}>Certificates</ScrollLink>
          {/* <ScrollLink smooth={true} duration={2000} to="contact" style={MenuItems}>Contact</ScrollLink> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
