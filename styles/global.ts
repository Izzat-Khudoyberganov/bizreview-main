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

  *::selection {
    color: #fff;
    background-color: rgb(43,39,60);
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
    width: 100%;
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

.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  @media(max-width: 850px) {
    display: block;
  }
}

.accordion-item:not(:first-of-type) {
  border-top: 0;
}

.accordion-item-title {
  width: 100%;
  margin: 0;
}

.accordion-item-btn {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 0;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}

.accordion-item-btn::after {
  content: '';
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-left: auto;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: transform 0.2s ease-in-out;
}

.accordion-item.active .accordion-item-btn::after {
  transform: rotate(-180deg);
}

.accordion-item-container {
  transition: height 0.2s ease-in-out;
  overflow: hidden;
}

.accordion-item-content {
  border-top: 1px solid #cccccc;
  padding: 15px 20px;
}
`

export default GlobalStyles
