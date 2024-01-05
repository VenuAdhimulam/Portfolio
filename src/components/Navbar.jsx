import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import git from "../images/svg/git-branch.svg";
import { Link as ScrollLink } from 'react-scroll';
import { mobile, mobileLandScape } from "../responsive";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  ${mobileLandScape({ padding: '10px 0px' })}
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
  letter-spacing: 2px;
  ${mobile({ fontSize: "24px" })}
`;

const Right = () => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  ...{ mobile: { marginTop: '20px', justifyContent: "space-between" } }
});

const MenuItems = styled(ScrollLink)`
  font-size: 1em;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 400;
  position: relative;
  letter-spacing: 2px; 

  &:after {
    content: '';
    display: block;
    background-color: #add6b2; 
    height: 3px;
    width: 0;
    position: absolute;
    bottom: -5px;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:hover:after {
    width: 100%;
  }

  ${mobile({ letterSpacing: "2px" })}
`;


const Img = styled.img`
  width: 30px;
`;

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState('#effbf1');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > 100) {
        setNavbarColor('white'); 
      } else {
        setNavbarColor('#effbf1');
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
        {!isMobile ? (
         <Grid item xs={6} sx={Right}>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-70} to="home" >Home</MenuItems>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-120} to="about" >About</MenuItems>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-20} to="experience" >Experience</MenuItems>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-100} to="projects" >Projects</MenuItems>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-20} to="education" >Education</MenuItems>
          <MenuItems smooth={true} duration={2000} spy={true}  offset={-20} to="certificates" >Certificates</MenuItems>
       </Grid>
        ) : (
          <>
            <Grid item xs={6} sx={{ ...Right, ...{ display: "flex", marginTop: '20px', justifyContent: "space-evenly" } }}>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-150} to="home" >Home</MenuItems>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-100} to="about" >About</MenuItems>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-70} to="experience" >Experience</MenuItems>
            </Grid>
            <Grid item xs={6} sx={{ ...Right, ...{ display: "flex", marginTop: '20px', justifyContent: "space-evenly" } }}>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-110} to="projects" >Projects</MenuItems>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-90} to="education" >Education</MenuItems>
              <MenuItems smooth={true} duration={2000} spy={true} offset={-120} to="certificates" >Certificates</MenuItems>
            </Grid>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
