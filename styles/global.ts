import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  button {
    border: unset;
    cursor: pointer;
    padding: 8px 20px;
  }
  a {
    color: #000;
  }

.tabs {
  padding: 15px;
  text-align: center;
  width: 50%;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  outline: none;
  background: #fff;

  @media(max-width: 850px){
    padding: 10px;
    min-width: 70px;
  }
}

.active-tabs  {
  background: white;
  border-bottom: 1px solid transparent;

  
}

.active-tabs::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #FFD600;

  @media(max-width: 850px){
    width: 80%;
  }
}

button {
  border: none;
}
.content-tabs {
  flex-grow : 1;
}

.content {
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;
}

.content h2 {
  padding: 0px 0 5px 0px;
}

.content hr {
  width: 100px;
  height: 2px;
  background: #222;
  margin-bottom: 5px;
}

.content p {
  width: 100%;
  height: 100%;
}

.active-content {
  display: block;

  
}

`

export default GlobalStyles
