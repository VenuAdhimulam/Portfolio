import styled from 'styled-components';
import waves from "../images/svg/TopWaves.svg";

const Spacer = styled.div`
  aspect-ratio: 960/200;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waves});
  margin-top: 50px;
`;

const Waver = () => {
  return (
        <Spacer/>
    );
};

export default Waver;