import React from "react";
import styled from "styled-components";
import { projectsData } from "../data";
import { mobile, mobileLandScape } from "../responsive";
import { Paper } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProjectsLogo from "../images/svg/ProjectsLogo.svg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
  padding: 0px 50px;
  margin: 25px 50px;
  ${mobile({ padding: 0, margin: "10px", marginTop: "20px"})};
  ${mobileLandScape({ padding: 0, margin: "10px", marginTop: "20px"})};
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
  height: 80%;
  width: 80%
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
  ${mobile({ "font-size": "40px" })}
  ${mobileLandScape({ "font-size": "40px" })}
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.66);
  textAlign: justify;
  marginBottom: 20px;
  fontWeight: 500;
  letterSpacing: 3px;
  fontSize: 1em;
  color: rgba(0, 0, 0, 0.66);
`;

const CourseTypo = styled.p`
  margin: 10px 0px;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  margin: 15xpx 0px;
`;

const BodyDiv = styled.div`
  border-radius: 8px;
  margin: 15xpx 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ flexDirection: "column"})};
  ${mobileLandScape({ flexDirection: "row"})};
`;

const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
  text-align: justify;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "300px",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    padding: "15px",
    borderRadius: "8px",
    // boxShadow: "0.8px 0.8px 0.8px rgba(0, 0, 0, 0.4)",
    boxShadow: "0 3px 12px 0 rgba(53, 53, 53, 0.3)",
    // borderRight: "4px solid #c1eec6",
    // borderLeft: "4px solid #c1eec6",
    background: "linear-gradient(180deg, #edfbee, #FFF, #FFF)",

    "&:hover": {
      transition: "all 0.4s ease",
      transform: "scale(1.1)"
    }
  },
}));

const TechStackWrapper = styled(Grid2)`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c1eec4;
  justify-content: center;  
`;

const TechStack = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin: 10px;

  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.3);
  }
`;

const Projects = () => {  
  const classes = useStyles();

  return (
    <Container id="projects">
        <Slide>
          <ImgContainer>
            <Image src={ProjectsLogo} />
          </ImgContainer>
          <InfoContainer>
            <TitleDiv>
              <Title>Projects<span style={{color: "#c1eec7"}}></span></Title>
            </TitleDiv>
            <BodyDiv>
              {projectsData.map((item) => (
                <Paper variant="elevation" className={classes.paper}>
                  <DescDiv>
                    <CourseTypo>{item.title}</CourseTypo>
                    <Desc>{item.desc}</Desc>
                  </DescDiv>
                  <TechStackWrapper>
                    {item.techStack.logos.map((logo, index) => (
                      <TechStack key={index} src={logo}/>
                    ))}
                  </TechStackWrapper>
                </Paper>
              ))}
            </BodyDiv>
          </InfoContainer>
        </Slide>
    </Container>
  );
};

export default Projects;
