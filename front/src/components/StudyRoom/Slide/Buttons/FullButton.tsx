import styled from "styled-components";

export default styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 50px;
  height: 50px;
  padding: 30px;
  border: none;
  background-color: white;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/1FBB2C17-4472-4EDF-B45E-224B9BB44CA3.svg");
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
