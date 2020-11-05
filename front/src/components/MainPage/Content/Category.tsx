import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  padding: 65px 110px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: "Gmarket Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #34363b;
`;

const Text = styled.p`
  margin-top: 20px;

  font-family: "Gmarket Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #9a9fac;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;

  .active {
    background-color: #346bff;
    color: #ffffff;
    border: solid 1.5px #346bff;
    font-weight: bold;
  }
`;

const Button = styled.button`
  margin-right: 30px;

  width: 87px;
  height: 33px;
  border-radius: 30px;
  border: solid 1.5px #9a9fac;
  background-color: #ffffff;

  font-family: "Gmarket Sans", sans-serif;
  line-height: 33px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #9a9fac;

  cursor: pointer;
`;

interface CategoryProps {
  readonly categoryState: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ];
}

const Category: React.FC<CategoryProps> = ({ categoryState }) => {
  const [, setCategory] = categoryState;

  const onButtonClick = (category: string) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCategory(category);

    const buttons = document.querySelector(".button-list")?.children;
    if (!buttons) return;

    const buttonArray = Array.from(buttons);
    buttonArray.forEach((button) => {
      button.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };

  return (
    <Wrapper>
      <Title>카테고리</Title>
      <Text>스터디에 참여하고 싶은 카테고리 분야를 선택하세요.</Text>

      <ButtonWrapper className={"button-list"}>
        <Button className={"active"} onClick={onButtonClick("")}>
          전체
        </Button>
        <Button onClick={onButtonClick("IT")}>IT</Button>
        <Button onClick={onButtonClick("취업")}>취업</Button>
        <Button onClick={onButtonClick("공무원")}>공무원</Button>
        <Button onClick={onButtonClick("독서논술")}>독서논술</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Category;
