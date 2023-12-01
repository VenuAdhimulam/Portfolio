import styled from 'styled-components';
import waves from "../images/svg/BottomWaves.svg";

const Spacer = styled.div`
  aspect-ratio: 960/200;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waves});
  margin-bottom: 50px;
`;

const WaverBottom = () => {
  return (
        <Spacer />
    );
};

export default WaverBottom;