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

저희 프로젝트를 소개합니다.

### 👨‍👨‍👧 팀원 소개

|                                 조찬기                                 |                                                      남궁권                                                       |                                                      하대겸                                                       |
| :--------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| ![조찬기](https://avatars1.githubusercontent.com/u/38618187?s=460&v=4) | ![남궁권](https://avatars0.githubusercontent.com/u/43670900?s=460&u=5ea29ab51c5968ebfac1c183c3083ec2aadaae40&v=4) | ![하대겸](https://avatars0.githubusercontent.com/u/12780464?s=460&u=4072457973c56fe46cd11c16adeff0df13d28236&v=4) |

### ⚙ 기술 스택

![기술 스택](./images\skills.PNG)

저희 프로젝트는 Front는 Typescript, Back은 Javascript를 사용합니다.

## 🌈 데이터베이스 schema 구조

![schema](./images/erd.png)

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
└── front  # 프로트엔드 관련 코드
```

#### frontend

프론트엔드의 폴더 구조는 다음과 같습니다.

```bash
├── config    # webpack, babel 등 설정 파일
├── public    # build에 사용할 html등 정적 파일
│   └── asset
├── scripts   # 명령에 사용되는 scripts 파일들
└── src
    ├── components  # 컴포넌트
    ├── constants   # 사용하는 상수
    ├── pages       # 페이지 컴포넌트 (routing을 위한)
    └── stylesheets # 공용 스타일 속성
```

#### backend

```bash
└── src
    ├── constants   # 사용하는 상수
    ├── daos        # Data Access Object
    ├── routes      # 라우터
    ├── types       # 타입 정의
    └── util        # 유틸성 함수들
```

### frontend 설정 파일 .env

```sh
# API Server
REACT_APP_API_HOST=
```

### backend 설정 파일 .env

```sh
# Server
PORT=
HOST=

# Database Server
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

## 🥴 Support

프로젝트가 마음에 드신다면 Star⭐️를 눌러주세요!
