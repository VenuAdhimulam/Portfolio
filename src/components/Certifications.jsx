import React from "react";
import styled from "styled-components";
import { mobile, mobileLandScape } from "../responsive";
import Certificate from "./Certificate";
import { certifications } from "../data";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #c1eec6;
  ${mobile({ padding: "30px" })}
`;

const TitleDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  ${mobile({ margin: 0, marginBottom: "40px", })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 15px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "40px" })}
  ${mobileLandScape({ fontSize: "40px" })}
`;

const CardsContainer = styled(Grid2)`
  flex: 1;
  display: flex;
  margin: 50px;
  flex-wrap: wrap;
  justify-content: center;
  ${mobile({ margin: 0 })}
  ${mobileLandScape({ margin: 20})}
`;

const Wrapper = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: row;
  ${mobile({ margin: 0, padding : 0, flexDirection: "column" })}
  ${mobileLandScape({ margin: 20, padding : 20, flexDirection: "column" })}
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-weight: 500;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.66);
  letter-spacing: 3px;
  line-height: 2;
  text-align: justify;
`;

const Certifications = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <TitleDiv>
          <Title>Certificates</Title>
          <Desc>I hold certifications from various coding platforms, demonstrating proficiency in a variety of programming languages and frameworks. Moreover, I have successfully completed certification courses on online learning platforms.</Desc>
        </TitleDiv>
        <CardsContainer>
          {certifications.map((item) => (
            <Grid2 item xs={12}> 
              <Certificate item={item} key={item.id} />
            </Grid2>
          ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
