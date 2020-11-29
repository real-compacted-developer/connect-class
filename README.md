# Connect Class

> 언택트 시대의 스터디에 최적화된 클라우드 기반의 웹 리모트 서비스

[![title](https://img.shields.io/badge/DEVELOPER-조찬기-blue)](https://github.com/changicho)
[![title](https://img.shields.io/badge/DEVELOPER-남궁권-blue)](https://github.com/kkoon9)
[![title](https://img.shields.io/badge/DEVELOPER-하대겸-blue)](https://github.com/SkyLightQP)

![typescript](https://img.shields.io/badge/-TypeScript-007ACC?&logo=TypeScript&logoColor=white)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?&logo=ESLint&logoColor=white)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?&logo=Prettier&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white)
![Babel](https://img.shields.io/badge/-Babel-eece4f?&logo=Babel&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
![Mysql](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)
![EC2](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
![GitHub](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
![Slack](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)
![GoogleDocs](https://img.shields.io/badge/-google%20docs-blue)

## 📌 프로젝트 소개

[![썸네일](https://user-images.githubusercontent.com/38618187/100537803-f13c8a00-326e-11eb-91d4-2f99541ff93d.png)
](https://www.youtube.com/watch?v=PY6oroTjOfo&feature=youtu.be)

위 썸네일을 클릭하면 프로젝트 소개 영상을 보실 수 있습니다!

### 프로젝트 이미지

![메인화면](https://user-images.githubusercontent.com/38618187/100537891-89d30a00-326f-11eb-889b-823f34a443be.PNG)

![로그인](https://user-images.githubusercontent.com/38618187/100537922-d0286900-326f-11eb-9e4e-99b1b1d15063.PNG)

![스터디개설](https://user-images.githubusercontent.com/38618187/100537921-d0286900-326f-11eb-8fea-120fd4f09e77.PNG)

![스터디뷰](https://user-images.githubusercontent.com/38618187/100537923-d0c0ff80-326f-11eb-86eb-a83f5ff94141.PNG)

## 👨‍👨‍👧 팀원 소개

|                                 조찬기                                 |                                                      남궁권                                                       |                                                      하대겸                                                       |
| :--------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| ![조찬기](https://avatars1.githubusercontent.com/u/38618187?s=460&v=4) | ![남궁권](https://avatars0.githubusercontent.com/u/43670900?s=460&u=5ea29ab51c5968ebfac1c183c3083ec2aadaae40&v=4) | ![하대겸](https://avatars0.githubusercontent.com/u/12780464?s=460&u=4072457973c56fe46cd11c16adeff0df13d28236&v=4) |

### ⚙ 기술 스택

![기술 스택](./images/skills.PNG)

저희 프로젝트는 Front-end는 Typescript, Back-end은 Javascript & Typescript를 사용합니다.

## 🕋 프로젝트 구조

- `front`
  - 프론트엔드 웹 사이트 소스코드
  - 스터디방, 질문 등 구현
- `back`
  - 백엔드 서버 있는 소스코드
  - REST API 및 Socket 관련 구현
  - `/models`에 데이터베이스 모델 구현

### 🗂 폴더 구조

프로젝트의 root는 다음과 같이 구성되어 있습니다.

```bash
├── back   # 백엔드 관련 코드
└── front  # 프론트엔드 관련 코드
```

#### frontend

프론트엔드의 폴더 구조는 다음과 같습니다.

```bash
├── public             # build에 사용할 html등 정적 파일
└── src
    ├── components     # 컴포넌트
    ├── constants      # 사용하는 상수
    ├── pages          # 페이지 컴포넌트 (routing을 위한)
    ├── stylesheets    # 공용 스타일 속성
    ├── asset          # 이미지 파일
    └── Dockerfile     # Docker 파일

```

#### backend

```bash
├──
├── constants     # 사용하는 상수
├── config        # AWS, Database, multer 등 개인 정보를 다룬다.
├── apis          # REST API
├── models        # 데이터베이스 모델
├── services      # 기능을 다룬다.
├── sockets       # socket 기능을 다룬다.
└── stores        # 캔버스 기능에 필요한 store

```

## 🌈 데이터베이스 구조

![mongoDB](https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775)

저희 프로젝트는 mongoDB를 사용합니다.

[mongoDB Database Docs](https://github.com/real-compacted-developer/connect-class/wiki/mongo-db-docs)

## 👨‍💻 실행 방법

frontend에서 사용하는 script 명령들은 다음과 같습니다.

```bash
yarn start # 개발 서버 실행
```

```bash
yarn build # 배포용 파일 빌드
```

```bash
yarn test # 테스트 실행
```

backend에서 사용하는 script 명령들은 다음과 같습니다.

```bash
yarn start # 서버 실행
```

```bash
yarn start:dev # 개발용 서버 실행
```

## 🥴 Support

프로젝트가 마음에 드신다면 Star⭐️를 눌러주세요!
