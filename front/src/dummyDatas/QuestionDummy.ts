import { IQuestionInfo } from "../types/question";

const questionDummyData: IQuestionInfo[] = [
  {
    userInfo: {
      userName: "홍길동",
      profileImageURL:
        "https://eruditegroup.co.nz/wp-content/uploads/2016/07/profile-dummy3.png",
    },
    slideInfo: {
      page: 1,
      imageURL:
        "https://www.easygiftproducts.co.uk/16555/dolu-my-first-slide-030016-.jpg",
    },
    content: "이부분을 잘 모르겠어요",
  },

  {
    userInfo: {
      userName: "김철수",
      profileImageURL:
        "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",
    },
    slideInfo: {
      page: 3,
      imageURL:
        "https://support.strava.com/hc/article_attachments/360057537172/Fullscreen_5_18_20__5_17_PM.jpg",
    },
    content: "어려워요",
  },
];

export default questionDummyData;
