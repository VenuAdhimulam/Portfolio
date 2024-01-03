import React from "react";
import styled from "styled-components";
import { mobile, mobileLandScape } from "../responsive";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import { experiences } from "../data";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 20px',
  },
  customTimelineItem: {
    '&.MuiTimelineItem-missingOppositeContent:before': {
      display: 'none', // This will disable the styling for missingOppositeContent
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 25px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
  margin-top: 60px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "40px" })}
  ${mobileLandScape({ "font-size": "40px" })}
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 0 65px 65px 65px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ 
    padding: 0,
    margin: 0
   })}

`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #c1eec6;
  align-items: center;

  ${mobile({ marginBottom: "20px" })}
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.img`
  width: 120px;
`;

const TechStackWrapper = styled(Grid2)`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
`;

const TechStack = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin: 10px;

  &:hover {
    transition: all 0.4s ease;
    transform: scale(1.4);
  }
`;

const Desc = styled.p`
  color: rgba(0, 0, 0, 0.66)
`;

function Experience() {
  const classes = useStyles();

  const timelineConnectorStyle = {
    backgroundColor: '#c1eec6',
    fontWeight: 300
  };
  
  const timelineDotStyle = {
    borderColor: '#c1eec6'
  };

  const paperDiv = {
    textAlign: "left",
    padding: "25px",
    borderRight: "4px solid #c1eec6",
    borderLeft: "4px solid #c1eec6",
  };

  const descTypo = {
    lineHeight: 2,
    textAlign: "justify",
    marginBottom: "10px",
    fontWeight: 500,
    letterSpacing: "3px",
    fontSize: "1.1em",
  };

  const compnayTypo = {
    fontWeight: 500,
    fontSize: "1.5em",
    letterSpacing: "2px",
    marginBottom: "5px",
  };

  const roleTypo = {
    marginBottom: "10px",
    fontSize: "1.2em",
    fontWeight: 500,
    letterSpacing: "3px",
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
  <Container id="experience">
    <Title>Experience</Title>
    <CardsContainer>
      <Timeline align={!isMobile ? "alternate" : "left"}>
        {experiences.map((item) => (
          <TimelineItem key={item.id} className={classes.customTimelineItem}>
             {!isMobile ? (
              <TimelineOppositeContent>
                <Desc variant="body2" color="textSecondary">
                  {item.date} 
                </Desc>
              </TimelineOppositeContent>
            ) : null}
            {/* {!isMobile ? ( */}
            <TimelineSeparator>
              <TimelineDot variant="outlined" style={timelineDotStyle}/>
              <TimelineConnector style={timelineConnectorStyle} />
            </TimelineSeparator>
            {/* ) : null} */}
            <TimelineContent>
              <Paper elevation={3} className={classes.paper} style={paperDiv}>
                <Wrapper>
                  <DescDiv>
                    <Desc style={roleTypo}>{item.role}</Desc>
                    <Desc style={compnayTypo}>{item.company}</Desc>
                  </DescDiv>
                  <LogoDiv>
                    <Logo src={item.img}/>
                  </LogoDiv>
                </Wrapper>
                {item.desc.points.map((point, index) => (
                  <Desc key={index} style={descTypo}>{point}</Desc>
                ))}
                {/* <TechStackContainer> */}
                <TechStackWrapper r>
                  {item.techStack.logos.map((logo, index) => (
                    <TechStack key={index} src={logo}/>
                  ))}
                </TechStackWrapper>
                {/* </TechStackContainer> */}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </CardsContainer>
  </Container>
    
  );
}

export default Experience;
