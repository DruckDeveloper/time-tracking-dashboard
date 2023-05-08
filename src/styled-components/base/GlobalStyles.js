import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    //* Primary
    --Blue: hsl(246, 80%, 60%) ;
    --Light-red: hsl(15, 100%, 70%);
    --Soft-blue: hsl(195, 74%, 62%);
    --Light-red: hsl(348, 100%, 68%);
    --Lime-green: hsl(145, 58%, 55%);
    --Violet: hsl(264, 64%, 52%);
    --Soft-orange: hsl(43, 84%, 65%);
    --White-color: #fff;

    //* Neutral
    --Very-dark-blue: hsl(226, 43%, 10%);
    --Dark-blue: hsl(235, 46%, 20%);
    --Desaturated-blue: hsl(235, 45%, 61%);
    --Pale-Blue: hsl(236, 100%, 87%);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-color: var(--Very-dark-blue);
  }
`

export { GlobalStyles }
