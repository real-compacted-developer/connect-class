import styled from "styled-components";

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;
  background-color: transparent;

  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: center center;

  border-radius: 20px;

  transition: background-color 0.5s ease;

  &:after {
    content: "지우개";
  }

  :hover {
    background-color: #ccc;
  }

  :focus {
    outline: none;
  }
`;
