###### Other Language
[English](https://github.com/dkssud-dus/portfolio/blob/main/README_en.md) | [한국어](https://github.com/dkssud-dus/portfolio/blob/main/README.md) | [日本語](https://github.com/dkssud-dus/portfolio/blob/main/README_ja.md)

<br/><br/><br/>

# Portfolio
![4](https://github.com/user-attachments/assets/476b4dc9-a588-4319-8af6-232b92cb00ac)

<br/><br/>

**Windows XP 감성을 현대 웹으로 재해석한 다국어 개인 포트폴리오**
> 기존 이력서로는 전달하기 어려운 ‘나만의 스타일’과 성장 과정을 명확히 보여주기 위해 이 포트폴리오를 기획했습니다. Windows XP의 친숙한 시각어를 현대 웹으로 재해석하여, 사이트 안에 또 다른 사이트가 있는 것 같은 중첩된 레이아웃으로 정체성을 표현했습니다. HTML·SCSS·JavaScript 기반의 반응형 구조와 다국어 콘텐츠 관리, 필터·모달 중심의 인터랙션을 통해 사용자는 빠르게 프로젝트를 탐색하고 제 작업 의도와 학습 기록을 확인할 수 있습니다.

<br/><br/><br/>

## Link
- 바로가기 (Web-site): https://dkssud-dus.github.io/portfolio/
- 기획서 (Figma Slide): https://www.figma.com/deck/t0gQ19HADYSrVkqbtzVifg/-webDesign--Personal-Portfolio--Project-Brief-?node-id=1-42&t=d5yEtWgpvqxSup7Y-1
- 디자인 시안 (Figma): https://www.figma.com/design/8OkxmWio2kC2G2lr2v9kuS/-webDesign--Personal-Portfolio--Design-Brief-?node-id=4-95&t=ITv4Ae0KyzAnmM6b-1

<br/>

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment & Contribution](#environment--contribution)
- [Contact](#contact)

<br/>

## Overview
### Background
요즘처럼 수많은 디자이너와 개발자들이 활동하는 환경에서, 개인의 정체성을 명확하게 전달하고 자신의 작업 철학과 강점을 보여주는 공간은 중시된다. 기존의 이력서로는 '나'를 제대로 표현할 수 없을 뿐만 아니라, 성장 방향성이나 작업 의도를 충분히 보여주기 어렵다고 느꼈다.

<br/>

### Purpose
- 나의 작업물과 사고방식, 그리고 개발자로써 성장 과정을 유기적으로 보여줄 수 있는 사이트를 구축하고 싶다.
- 단순한 포트폴리오를 넘어, 사용자가 직관적으로 나의 성향과 역량을 파악할 수 있도록 하고 싶다.

<br/>

### Keywords
`Windows XP`
- 처음으로 접한 OS가 Windows XP였기 때문에, 그 느낌을 살리도록 디자인
- 특히 프론트엔드 공부를 2025년 현재 하고 있는 만큼, 웹사이트 안에 또다른 웹사이트가 있는 것처럼 디자인해 ‘나’를 나타냄
  
`가독성과 흐름`
- 사용자가 편하게 탐색할 수 있도록, 정보 흐름과 콘텐츠 구조를 직관적으로 배치

`학습 중심 / 변화 가능성`
- 지금까지의 배움과 앞으로의 방향성을 유기적으로 담음

<br/>

### Schedule
- 2025.06.23. - 2025.06.27.
- Total 31 - 32 Hours

<br/>

### Design
`레트로 감성(Windows XP)`
- 친숙한 색채와 UI 어휘로 개인적 서사를 시각화

`중첩된 구조(사이트 안의 작은 사이트)`
- 포트폴리오의 개별 프로젝트가 독립된 경험처럼 느껴지게 설계

<br/>

## Tech Stack
**Design / Prototyping** 
- Figma
- Notion
  
**Frontend** 
- HTML
- SCSS (CSS Preprocessor)
- JavaScript

**Development Environment** 
- VS Code

**Deployment / CI**
- GitHub Pages  

<br/>

## Features
### Core Feature
`다국어 지원`
- 이전의 스튜디오 지브리 프로젝트에서는, 언어 별로 `HTML`을 새로 짜넣는 방식을 활용해 파일 관리가 비효율적이었다.
- 그러므로, 이번 프로젝트에서는 `JS`에서 `객체`를 사용해 내부 콘텐츠 관리를 더욱 쉽도록 한다.
  
`필터 기능`
- `객체`에 입력된 값을 바탕으로 버튼의 텍스트와 동일한 값을 보여줄 수 있도록 한다.
- 프로젝트 카테고리 / 프로젝트 사용 기술으로 필터는 나뉘어 있으며, 버튼 클릭 시 해당 항목이 보이도록 한다.
  
`모달 팝업`
- 프로젝트 클릭 시 `모달`이 팝업돼 페이지 이동을 최소화 하여 사용자 편의성을 확대하도록 한다.

<br/>

### [Main Page](https://dkssud-dus.github.io/portfolio/)

<details>
  <summary>Click to expand</summary>

<br/>

![4](https://github.com/user-attachments/assets/476b4dc9-a588-4319-8af6-232b92cb00ac)

### Header + Main Visual
**Purpose**
- 사용자에게 '나'를 각인하도록 한다.
- `Header`는 계속 고정되어 사용자가 언제나 언어 변경이나 이력서 다운로드 등의 기능을 수행하도록 한다.

**Summary**
- `Header`는 GitHub, Linked In, MailTo `링크 이동` 기능을 수행한다.
- 또한 `언어 변경` (영어, 한국어, 일본어) 기능을 사용할 수 있으며 이력서도 다운로드 가능하다. (2025.08.25. 기준 미업로드)
- 서브 페이지 이동은 `새 창 보기`로 가능하도록 했다.
- 좌우명은 텍스트가 타이핑되듯 등장하도록 하였다.

<br/><br/>

![2](https://github.com/user-attachments/assets/7d59de4d-813c-4fbc-9b81-2517f98fd297)

### Skill
**Purpose**
- 사용자가 한 눈에 구현 가능 스킬을 볼 수 있도록 한다.

**Summary**
- `탭`을 활용하여 언어와 툴 & 기술을 분류하여 볼 수 있도록 했다.
- 아이콘 호버 시 `툴팁`으로 서술식 설명이 등장한다.

<br/><br/>

![3](https://github.com/user-attachments/assets/0daa6256-0260-43bd-84ec-35f7fbda3843)

### Works & Study & About Me & Thank you for Reading!
**Purpose**
- 사용자가 직관적으로 정보를 인식할 수 있도록 한다.

**Summary**
- Works에서는 서브 페이지 `링크 이동` 기능을 수행하도록 하였다.
- Study에서는 공부 기록을 남긴 노션 개인 페이지로 `링크 이동` 기능을 수행하도록 하였다.
- About Me는 경력 / 자격증 / 학력 등의 기재만 수행하도록 하였다.
- Thank you for Reading! 에서는 개인 정보 및 `Mailto` 기능을 수행하도록 하였다.

<br/>

</details>

<br/>

### [Sub Page: Works](https://dkssud-dus.github.io/portfolio/pages/works.html)

<details>
  <summary>Click to expand</summary>

<br/>

![4](https://github.com/user-attachments/assets/a9815b2f-30ed-4ac2-bb60-ba8140e09c51)

**Purpose**
- 사용자가 보다 직관적으로 정보를 인식하고, 편리하게 사용할 수 있도록 한다.

**Summary**
- 카테고리와 툴 & 기술로 `필터링` 기능을 활용하여 프로젝트를 확인할 수 있도록 하였다.
- 프로젝트들은 `3열` 배치되나 반응형에서는 `1열` 배치된다.
   - 프로젝트 `호버` 시 간단한 태그가 등장하도록 하였다.
   - 프로젝트 `클릭` 시 `모달`이 팝업되도록 하였다.
- `모달`은 좌측이 프로젝트 초록, 우측이 프로젝트 미리보기로 분류할 수 있다.
   - 프로젝트 초록에서는 `새 창 보기`로 사이즈가 지정된 `데모 페이지`를 열어볼 수 있는 버튼을 만들도록 하였다.
   - 프로젝트 초록은 주로 비포 애프터로 공부 내용, 혹은 프로젝트 배경 및 변화 내용을 기술하였다.
   - 프로젝트 미리보기에서는 `swiper`를 활용하여, `GIF`로 프로젝트 결과물을 확인할 수 있으며, 하단에는 사용 기술 아이콘이 등장하도록 하였다.
   - 프로젝트 미리보기 하단은 `기획서`와 `디자인 시안`,` 깃허브`로 이동하는 버튼을 두어 프로젝트 상세 내용을 언제든지 알 수 있도록 하였다.

<br/>

</details>

<br/>

## Environment & Contribution
- OS: Windows 11, Windows 10
- Viewpoint: Desktop(1980px), Mobile(768px)
- Contribute: 100% 개인 작업 (기획, 디자인, 개발)

<br/>

## Contact
- GitHub: https://github.com/dkssud-dus
- Email: chae3929@gmail.com
- LinkedIn: https://www.linkedin.com/in/dkssud-chaeyeon/


<br/><br/><br/>
