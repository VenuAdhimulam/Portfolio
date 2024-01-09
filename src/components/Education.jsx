import React from "react";
import styled from "styled-components";
import { eduObj } from "../data";
import { mobile, mobileLandScape } from "../responsive";
import Education_Logo from "../images/education_Logo.svg";
import { Paper } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 50px;
  margin: 0px 50px;
  ${mobile({ padding: 0, margin: "15px"})};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })};
  ${mobileLandScape({ display: "none" })};
`;

const Image = styled.img`
  height: 70%;
  width: 70%
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  ${mobile({ "font-size": "40px",   marginBottom: "0px"})}
  ${mobileLandScape({ "font-size": "40px" })}
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.66);
  text-align: justify;
`;

const CourseTypo = styled.p`
  margin: 10px 0px;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 2px;
`;

const TitleDiv = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin: 15px 0px;
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;

const BodyDiv = styled.div`
  border-radius: 8px;
  margin: 0px 0px;
`;

const BoxDiv = styled.div`
  display: flex;
  margin: 30px 5px;
  border-right: 6px solid #c1eec6;
  border-left: 6px solid #c1eec6;
  padding: 15px;
  border-radius: 8px;
  // box-shadow: 0.8px 0.8px 0.8px rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 12px 0 rgba(53, 53, 53, 0.3);
`;

const DescDiv = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LogoDiv = styled.div`
  flex: 0.5;
  // height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: ${(props) => props.size};
  ${mobile({ width: "100px" })};
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    margin: "30px 5px",
    padding: "15px",
    borderRadius: "8px",
    // boxShadow: "0.8px 0.8px 0.8px rgba(0, 0, 0, 0.4)",
    boxShadow: "0 3px 12px 0 rgba(53, 53, 53, 0.3)",

    // borderRight: "4px solid #c1eec6",
    borderLeft: "4px solid #edfbee",
    background: "linear-gradient(90deg, #edfbee, #FFF, #FFF)",
    "&:hover": {
      transition: "all 0.4s ease",
      transform: "scale(1.1)"
    }
  },
}));

const Education = () => {  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="education">
      <Slide>
        <InfoContainer>
          <TitleDiv>
            <Title>Education<span style={{color: "#c1eec7"}}></span></Title>
          </TitleDiv>
          <BodyDiv>
            {eduObj.map((item) => (
              <Paper variant="elevation" className={classes.paper}>
                <DescDiv>
                  <Desc>{item.degree}</Desc>
                  <CourseTypo>{item.stream}</CourseTypo>
                  <Desc>{item.university}</Desc>
                  <Desc>{item.tenure}</Desc>
                </DescDiv>
                <LogoDiv>
                  <Logo src={item.logo} size={isMobile ? "80px !important" : item.logoSize}/>
                </LogoDiv>
              </Paper>
            ))}
          </BodyDiv>
        </InfoContainer>
        <ImgContainer>
          <Image src={Education_Logo} />
        </ImgContainer>
      </Slide>
    </Container>
  );
};

export default Education;
