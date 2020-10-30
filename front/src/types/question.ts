export interface IQuestionInfo {
  userInfo: {
    userName: string;
    profileImageURL: string;
  };

  slideInfo: {
    page: number;
    imageURL: string;
  };

  content: string;
}
