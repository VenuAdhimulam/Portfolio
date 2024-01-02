import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import styledComponent from "styled-components";
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { techData } from "../data";
import { mobile, mobileLandScape } from "../responsive";

// const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: "50%",
  color: theme.palette.text.secondary,
}));

const ImgContainer = styledComponent.div`
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;

  ${mobile({ width: "300px", height: "auto" })};
  ${mobileLandScape({ padding: "0px", margin: "50px", width: "auto" })};
`;

const Image = styledComponent.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export default function TechStack() {
  return (
    <Box sx={{ width: 500, minHeight: 500 }}>
      <Masonry columns={4} spacing={2}>
        {techData.map((ele, index) => (
          <Item key={index} sx={{ height: ele.height }}>
            <ImgContainer>
              <Image src={ele.img} alt={ele.title} />
            </ImgContainer>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}