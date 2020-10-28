import React, { useState } from "react";
import styled from "styled-components";

import createQuestionData from "../../../fetchs/createQuestionData";
import { IQuestionInfo } from "../../../types/question";

const Wrapper = styled.div`
  width: calc(100% - 104px);
  height: calc(120px - 24px - 16px);

  padding: 24px 52px 16px 52px;

  position: absolute;
  bottom: 0;
  background-color: #f8fafd;

  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 82px;
  width: 200px;

  font-family: "Gmarket Sans";
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;

  background-color: transparent;
  outline: none;
  border: none;
`;

const Button = styled.button`
  width: 105px;
  height: 82px;
  border-radius: 12px;
  border: solid 1px #9a9fac;

  outline: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const dummySlide = {
  slidePage: 1,
  slideImageURL:
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE",
};

type Props = {
  addQuestions: (data: IQuestionInfo) => void;
};

const Form = (props: Props): JSX.Element => {
  const roomNumber = window.location.pathname.split("/study/")[1];

  const { addQuestions } = props;
  const [content, setContent] = useState<string>("");

  let inputTag: HTMLInputElement | null = null;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(event.type, event.target.value);
    setContent(event.target.value);
  };

  const fetchCreate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (content.length === 0) return;

    const data = {
      roomNumber: roomNumber,
      userId: "kakao1472290927",
      slidePage: dummySlide.slidePage,
      slideImageURL: dummySlide.slideImageURL,
      title: "질문",
      content: content,
    };
    // createQuestionData(data);

    addQuestions({
      slideInfo: {
        page: dummySlide.slidePage,
        imageURL: dummySlide.slideImageURL,
      },
      content: content,
      userInfo: {
        userName: "남궁권",
        profileImageURL:
          "http://k.kakaocdn.net/dn/CItX8/btqGvQ5a7B7/6IyKbRGltQPiyyfyS703VK/img_110x110.jpg",
      },
    });

    if (inputTag) inputTag.value = "";
    setContent("");
  };

  return (
    <Wrapper>
      <Input
        placeholder="질문을 입력하세요"
        onChange={onChange}
        ref={(element: HTMLInputElement | null) => {
          inputTag = element;
        }}
      />
      <Button type="reset" onClick={fetchCreate}>
        질문하기
      </Button>
    </Wrapper>
  );
};

export default Form;
