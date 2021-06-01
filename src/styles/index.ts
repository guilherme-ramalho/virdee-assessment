import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: linear-gradient(#368CAA, #7CB7C9, #A2D3DC, #CEE8ED,  #fff);
  }
`;

export default GlobalStyle;
