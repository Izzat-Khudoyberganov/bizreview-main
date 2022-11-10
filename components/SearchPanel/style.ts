import styled from "styled-components"

export const SearchPanelContent = styled.div`
  width: 850px;
  height: 100px;
  background-color: white;
  margin: 0 auto;
  margin-top: -50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 35px;
  z-index: 0;


  &:before {
    left: 0;
    content: "";
    position: absolute;
    background-color: #f5fafd;
    width: 100%;
    height: 500px;
    z-index: -1;
  }

  @media (max-width: 933px) {
    width: calc(100% - 100px);
    height: 100%;
    padding: 30px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
