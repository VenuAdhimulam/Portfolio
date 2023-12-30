import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  LinkedIn,
  GitHub,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Hackerrank from "../images/Hackerrank_Logo.png";
import LeetCode from "../images/LeetCode_Logo.jpg";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Container = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #263238;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  letter-spacing: 2px;
  ${mobile({ alignItems: "center" })};
`;

const Logo = styled.h1`
  // flex: 1;
`;

const LogoDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const AnimatedSocialIcon = styled(SocialIcon)`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #191919;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin: 15px 0px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 0.2;
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-content: flex-end;
  ${mobile({ alignItems: "center" })};
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile({flexDirection: "column" })};
`;

const CopyRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
  border-radius: 50%;
`;

const GetSocialContainer = (history) => {
  
  const handleClick = (platform) => {
    // const paths = {
    //   LinkedIn: 'https://www.linkedin.com/in/adimulamvenugopal/',
    //   GitHub: '/github',
    //   Hackerrank: '/hackerrank',
    //   LeetCode: '/leetcode',
    // };

    // history(paths[platform]);

  };

  return (
    <SocialContainer>
      <AnimatedSocialIcon color="0a66c2" onClick={handleClick("LinkedIn")}>
        <LinkedIn />
      </AnimatedSocialIcon>
      <AnimatedSocialIcon color="010409" onClick={handleClick("GitHub")}>
        <GitHub />
      </AnimatedSocialIcon>   
      {/* <AnimatedSocialIcon color="E60023">
        <Pinterest />
      </AnimatedSocialIcon> */}
      <AnimatedSocialIcon color="263238" onClick={handleClick("Hackerrank")}>
        <Image src={Hackerrank} /> 
      </AnimatedSocialIcon>
      <AnimatedSocialIcon color="263238" onClick={handleClick("LeetCode")}>
        <Image src={LeetCode} /> 
      </AnimatedSocialIcon>
    </SocialContainer>
  );
};

const Footer = () => {
  const history = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container>
        <Contents>
          {!isMobile ?
            <Left>
              <LogoDiv>
                <Logo>Venu Adimulam</Logo>
              </LogoDiv>
              { GetSocialContainer(history)}
            </Left>
          : null }
          {/* <Center>`
            <Title>Usefuls Links</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Men's Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accesories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Ordr Tracking</ListItem>
              <ListItem>Wish List</ListItem>
              <ListItem>Wish List</ListItem>
              <ListItem>Terms</ListItem>
            </List>
          </Center> */}
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} /> +1 216 467 0834
            </ContactItem>
            <ContactItem>
              <Mail style={{ marginRight: "10px" }} /> venuadimulam01@gmail.com
            </ContactItem>
            {isMobile ? GetSocialContainer(history): null}
          </Right>
        </Contents>
        <hr/>
        <CopyRightDiv>
          <Desc>© Venu Adimulam 2023. All rights reserved.</Desc>  
        </CopyRightDiv>
      </Container>
     
    </>
  );
};

export default Footer;
