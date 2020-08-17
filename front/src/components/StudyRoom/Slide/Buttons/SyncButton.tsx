import styled from "styled-components";

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;
  background-color: transparent;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/32A6BEF7-84D6-4712-A143-B2D0FA9C0B14.svg");
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
