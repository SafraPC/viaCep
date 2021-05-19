import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
margin:0;
padding:0;
outline:0;
box-sizing:border-box;

}
a {
text-decoration: none;
}
input,textarea {
border: 1px solid var(--color-hover-blue) !important;
transition:border 0.3s ease;
border-radius:0.2rem;
    transition:box-shadow 0.1s ease;
    :focus{
    border: 1px solid var(--color-hover-blue) !important;
    box-shadow: 0.2px 0.2px 2.5px var(--color-soft-blue);
}
}
button {
cursor: pointer;
border: 0;
background: none;
outline: 0 !important;
}
html, body, #root {
min-height: 100%;
width: 100%;
}


*, button, input,textarea {
border: 0;
background: none;
outline: 0 !important;
font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
}

body{
    font:14px 'Roboto', sans-serif;
    -webkit-font-font-smoothing: antialiased !important;
    background:#fcffff;
    color:#333;
}

:root {
    --color-primary: #fff;
  --color-soft-green: #3dad66;
  --color-soft-red: #e83f5b;
  --color-soft-blue:#668cff;

  --color-high-green: #119957;
  --color-high-red: #f51d41;
  --color-hover-blue:#8ba6f7;

  --color-blackPurple:#150f21;
  --color-blackWhite:#d6d5d2;
  --color-text: #a8a8b3;
  --font-weigth-text: 400;
  --font-size-text: 16px;
  --font-weight-between: 400;
  --font-size-between:21px;
  --font-weight-title: 700;
  --font-size-title: 28px;

}`;

export const TOASTIFY_OPTIONS={
    position: "top-right",
    autoClose: 6500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    style: { fontSize: 16}
  }