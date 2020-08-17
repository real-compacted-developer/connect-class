import styled from "styled-components";

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;
  background-color: transparent;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/ADD43188-B49C-4E18-8659-D30C622EA40A.svg");
  background-repeat: no-repeat;
  background-size: 50px 50px;
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
