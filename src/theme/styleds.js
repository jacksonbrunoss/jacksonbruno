import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.body};
    --color: ${({ theme }) => theme.text};
    --comp: ${({ theme }) => theme.comp};
    --linear: ${({ theme }) => theme.linear};

    --color-main-a: #54549C;
    --color-main-b: #7474BF;
    --color-main-c: #348AC7;
    --color-bg-a: ${({ theme }) => theme.body};
    //--color-bg-a: #19191F;
    --color-bg-b: #34343D;
    --color-light-a: #DFDFE2;
    --color-light-b: ${({ theme }) => theme.text};
    --light: #F2F2F3;
    --color-linear-a: linear-gradient(90.49deg, #6D83F2 0%, #348AC7 111.7%);
    --color-linear-b: linear-gradient(97.74deg, #19191F 1.72%, #34343D 97.06%);
    --color-radial-a: radial-gradient(52.25% 52.25% at 50% 67.16%, rgba(52, 138, 199, 0.20) 0%, rgba(48, 48, 48, 0) 100%);

    --font-main: 'Rubik', sans-serif;
    
    --8px: 0.5rem;
    --16px: 1.0rem;
    --18px: 1.125rem;
    --24px: 1.5rem;
    --32px: 2.0rem;
    --64px: 4.0rem;

    --mobile: 40rem;
    --desktop: 73.75rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    scroll-behavior: smooth; 
  }
  body {
    margin: 0px;
    padding: 0px;
    font-size: var(--16px);
    font-family: var(--font-main);
    background: var(--bg);
    color: var(--color);
    
  }
  h1, h2, h3, h4, ul, li, p, a, span, button {
    margin: 0px;
    padding: 0px;
    font-size: var(--16px);
    text-decoration: none;
    list-style: none;
  }
  img {
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-main-c);
    border-radius: 5px;
}
`;

export default GlobalStyle;
