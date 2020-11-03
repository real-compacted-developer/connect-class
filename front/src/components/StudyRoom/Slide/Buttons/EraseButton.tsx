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
  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/ECC903DE-B218-4DAE-BDE1-3024AAA62F36.svg");

  border-radius: 20px;

  transition: background-color 0.5s ease;

  :hover {
    background-color: #ccc;
  }

  :focus {
    outline: none;
  }
`;
