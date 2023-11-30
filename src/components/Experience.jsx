import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { experiences } from "../data";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 20px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 0 65px 65px 65px;
  margin: 20px 65px 65px 65px;
  flex-wrap: wrap;
  justify-content: space-between;
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
    borderRight: "6px solid #c1eec6",
    borderLeft: "6px solid #c1eec6"
  };

  const descTypo = {
    textAlign: "justify",
    marginBottom: "8px",
    color: "rgba(0, 0, 0, 0.66)",
    fontWeight: 500,
    letterSpacing: "3px",
    fontSize: "1em"
  };

  const compnayTypo = {
    marginBottom: "10px",
    fontWeight: 400,
    fontSize: "1.2rem",
    letterSpacing: "1.5px"
  };

  const roleTypo = {
    marginBottom: "5px",
    fontSize: "1.4rem",
    fontWeight: 600,
    letterSpacing: "1.5px"
  };

  return (
    <Container>
    <Title>Experience</Title>
    <CardsContainer>
      <Timeline align="alternate" >
        {experiences.map((item) => (
          <TimelineItem key={item.id} >
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.date} 
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" style={timelineDotStyle}/>
              <TimelineConnector style={timelineConnectorStyle} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper} style={paperDiv}>
                <Typography variant="h6" component="h1" style={roleTypo}>{item.role}</Typography>
                <Typography style={compnayTypo}>{item.company}</Typography>
                {item.desc.points.map((point, index) => (
                  <Typography key={index} style={descTypo}>{point}</Typography>
                ))}
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
