import { createGlobalStyle } from 'styled-components';

/**
 * Colors
 */
export const backgroundWhite = '#FDFDFD';
export const fontBlack = '#1F1F1F';
export const primaryBlue = '#2F54D0';
export const activeBlue = '#859BE3';
export const pureWhite = '#FFFFFF';
export const overlayGray = '#0000003D';
// export const pureBlack = '#000000';
// export const borderGray = '#E8E8E8';
// export const closeGray = '#333333';
// export const lightGray = '#F8F8F8';
// export const errorRed = '#FF0000';
// export const barGray = '#D1D1D1';
// export const checkBoxGray = '#00000029';

// export const favoriteYellow = '#ECBA17';

/**
 * Font Size
 */

export const LogoFontSize = '30px';
export const HeaderFontSize = '22px';
export const RegularFontSize = '14px';

export default createGlobalStyle`        
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Poppins,serif;
  }
  button {
    cursor: pointer;
    padding: 0;
    border: none;
  }

`;
