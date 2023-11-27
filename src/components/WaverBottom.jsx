import styled from 'styled-components';
import waves from "../images/greenWavesBottom.svg";

const Spacer = styled.div`
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waves});
`;

const WaverBottom = () => {
  return (
        <Spacer />
    );
};

export default WaverBottom;