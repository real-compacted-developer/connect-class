import styled from "styled-components";
import fullscreenImage from "./fullscreen.svg";

export default styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;

  background-image: url(${fullscreenImage});
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center center;

  border-radius: 20px;

  transition: background-color 0.5s ease;

  :hover {
    background-color: #ccc;
  }

  :focus {
    outline: none;
  }
`;
