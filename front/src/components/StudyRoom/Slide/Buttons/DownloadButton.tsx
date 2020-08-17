import styled from "styled-components";

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;
  background-color: transparent;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/1971415E-51BF-4767-961C-439D177F48B6.svg");
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
