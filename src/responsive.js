import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};

export const mobileLandScape = (props) => {
  return css`
    @media only screen and (max-device-width: 844px) and (orientation: landscape) {
      ${props}
    }
  `;
};

// export const mobilePortrait = (props) => {
//   return css`
//     @media only screen and (max-device-width: 768px) and (orientation: portrait) {
//       ${props}
//     }
//   `;
// };
