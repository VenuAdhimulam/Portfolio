import styled from 'styled-components';
import waves from "../images/waves3.svg";

const Spacer = styled.div`
  aspect-ratio: 960/150;
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