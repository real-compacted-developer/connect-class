// const dummyImage = [
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B31.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B32.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B33.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B34.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B35.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B36.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B37.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B38.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B39.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B310.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B311.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B312.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B313.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B314.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B315.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B316.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B317.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B318.jpeg",
//   "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/skt-presentation/PT%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD-%E1%84%8C%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B319.jpeg",
// ];

const dummyImage = [
  "https://connect-class-test.s3.amazonaws.com/16044007420155d6fc78e-fa32-4a79-a741-d26eb069c8ab.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400742380e4c8c533-a97e-41d5-9bd4-3bfa32242ab5.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/16044007425341ede4df8-b683-4d6c-9d1e-51958505c2fb.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400742750236cc930-576c-48fc-9f85-82aea8dd242b.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074284170607ce2-7c82-4d0c-86a7-7a4a814e1b69.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074306510b1e672-86d2-4daa-81d4-e1528bead97c.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/16044007431674d8afde1-6051-45c6-8f2e-5485d4831678.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400743277120932ed-b187-4f1d-992a-c347535e92a6.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074337446ebdcdc-9133-40f3-9912-45e25f77859e.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400743527cea54887-2868-4344-8837-d91b7d23d56b.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400743668081cecdb-01ab-4e8a-9bd1-b4a6892d4f2b.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/16044007437585d017fb7-4d07-4a2a-9c32-5c6abf829d1c.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074384205ceaadd-bd08-4d9f-9cb2-cd9f35cf723e.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400744019ded1f0f3-eded-4918-b428-b51c583d0aff.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/16044007441885302941e-ddf9-4260-9559-98ef7ad717f4.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074432701318f2c-b0ac-49ea-8b90-db768aa5039e.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/160440074441032c2181d-dc57-48d6-90d0-89951dfbd1ce.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/1604400744480d57c9270-a2ef-4bd8-8b66-48bf2b83cbd4.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/16044007447222fb454ef-de04-46b2-8d3d-f544b5b2b4d3.png",
];

module.exports = dummyImage;