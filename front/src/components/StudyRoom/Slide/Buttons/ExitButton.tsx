import styled from "styled-components";

export default styled.button`
  width: 85px;
  height: 32px;
  border-radius: 27px;
  background-color: #ff4a73;
  padding: 20px;

  font-family: GmarketSans;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2px;
  /* letter-spacing: normal; */
  text-align: center;
  color: #ffffff;

  border: none;

  transition: color 0.5s ease;

  :hover {
    color: #ccc;
  }

  :focus {
    outline: none;
  }
`;
