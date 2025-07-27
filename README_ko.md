
---
[README](https://github.com/dkssud-dus/portfolio/blob/main/README.md) | [README_ko](https://github.com/dkssud-dus/portfolio/blob/main/README_ko.md)

<br/>

`#DesignProject` `#Portfolio` `#Solo` `#Responsive` 
# **Website Design Project Details:**
### 포트폴리오 Portfolio

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)   
2. [Core Features](#2-Core-Features)   
3. [Page-wise Features](#3-Page-wise-Features)    
   
</br>
</br>
</br>

---

## 1. Project Overview
### 1.1. Background
요즘처럼 수많은 디자이너와 개발자들이 활동하는 환경에서, 개인의 정체성을 명확하게 전달하고 자신의 작업 철학과 강점을 보여주는 공간은 중시된다. 기존의 이력서로는 '나'를 제대로 표현할 수 없을 뿐만 아니라, 성장 방향성이나 작업 의도를 충분히 보여주기 어렵다고 느꼈다.

</br>

이 프로젝트의 목적은 다음과 같다.

</br>

1. 나의 작업물과 사고방식, 그리고 개발자로써 성장 과정을 유기적으로 보여줄 수 있는 사이트를 구축하고 싶다.
2. 단순한 포트폴리오를 넘어, 사용자가 직관적으로 나의 성향과 역량을 파악할 수 있도록 하고 싶다.

</br>
</br>
</br>

### 1.2. Keywords
1. **Windows XP**      
    1.1. 처음으로 접한 OS가 Windows XP였기 때문에, 그 느낌을 살리도록 디자인          
    1.2. 특히 프론트엔드 공부를 2025년 현재 하고 있는 만큼, 웹사이트 안에 또다른 웹사이트가 있는 것처럼 디자인해 ‘나’를 나타냄         
    
</br>

2. **가독성과 흐름**     
    2.1. 사용자가 편하게 탐색할 수 있도록, 정보 흐름과 콘텐츠 구조를 직관적으로 배치        
    
</br>

3. **학습 중심 / 변화 가능성**    
    3.1. 지금까지의 배움과 앞으로의 방향성을 유기적으로 담음           
    

</br>
</br>
</br>

---

## 2. Core Features
### 다국어 지원
1. 타 언어권 사용자도 고려한 기능이다.
2. 이전의 [스튜디오 지브리 리디자인 프로젝트](https://github.com/dkssud-dus/webRedesign-StudioGhibli)에서는, 언어 별로 HTML을 새로 짜넣는 방식을 활용해 파일 관리가 비효율적이었다.
3. 그러므로, 이번 프로젝트에서는 JS에서 객체를 사용해 내부 콘텐츠 관리를 더욱 쉽도록 한다.
   
</br>
</br>
</br>

### 필터 기능
1. 객체에 입력된 값을 바탕으로 버튼의 텍스트와 동일한 값을 보여줄 수 있도록 한다.
2. 프로젝트 카테고리 / 프로젝트 사용 기술으로 필터는 나뉘어 있으며, 버튼 클릭 시 해당 항목이 보이도록 한다.
   
</br>
</br>
</br>

### 모달 팝업
1. 프로젝트 클릭 시 모달이 팝업돼 페이지 이동을 최소화 하여 사용자 편의성을 확대하도록 한다.
   
</br>
</br>
</br>

---

## 3. Page-wise Features

### 3.1. [Main Page](https://dkssud-dus.github.io/portfolio/)

---

### 3.1.1. Header + Main Visual
![1](https://github.com/user-attachments/assets/2d0c70ca-2cef-468e-8a35-c576f72d80e5)

<br/>

#### 목적        
1. 사용자에게 '나'를 각인하도록 한다.
2. `Header`는 계속 고정되어 사용자가 언제나 언어 변경이나 이력서 다운로드 등의 기능을 수행하도록 한다.

<br/>
   
#### 구현 요약 
1.  `Header`는 `Git Hub`, `Linked In`, `MailTo` 링크 이동 기능을 수행한다.
2.  또한 언어 변경 (영어, 한국어, 일본어) 기능을 사용할 수 있으며 이력서도 다운로드 가능하다. (2025.07.12. 기준 미업로드)
3.  서브 페이지 이동은 새 창 보기로 가능하도록 했다.
4.  좌우명은 텍스트 타이핑 등장 기능을 활용하도록 했다.

<br/>
<br/>
<br/>

### 3.1.2. SKill
![2](https://github.com/user-attachments/assets/7d59de4d-813c-4fbc-9b81-2517f98fd297)

<br/>

#### 목적        
1. 사용자가 한 눈에 구현 가능 스킬을 볼 수 있도록 한다.

<br/>
   
#### 구현 요약 
1. 탭 구조를 활용하여 언어와 툴 & 기술을 분류하여 볼 수 있도록 했다.
2. 아이콘 호버 시 툴팁으로 서술식 설명이 등장한다.

<br/>
<br/>
<br/>

### 3.1.3. Works & Study & About Me & Thank you for Reading!
![3](https://github.com/user-attachments/assets/0daa6256-0260-43bd-84ec-35f7fbda3843)

<br/>

#### 목적        
1. 사용자가 직관적으로 정보를 인식할 수 있도록 한다.

<br/>
   
#### 구현 요약 
1. Works에서는 서브 페이지 링크 이동 기능을 수행하도록 하였다.
2. Study에서는 공부 기록을 남긴 노션 개인 페이지로 링크 이동 기능을 수행하도록 하였다.
3. About Me는 경력 / 자격증 / 학력 등의 기재만 수행하도록 하였다.
4. Thank you for Reading! 에서는 개인 정보 및 `Mailto` 기능을 수행하도록 하였다.

<br/>
<br/>
<br/>

---

### 3.2. Sub Pages (1)

---

### 3.2.1. [Works](https://dkssud-dus.github.io/portfolio/pages/works.html)
![4](https://github.com/user-attachments/assets/a9815b2f-30ed-4ac2-bb60-ba8140e09c51)


#### 목적
1. 사용자가 보다 직관적으로 정보를 인식하고, 편리하게 사용할 수 있도록 한다.

<br/>

#### 구현 요약
1. 카테고리와 툴 & 기술로 필터링 기능을 활용하여 프로젝트를 확인할 수 있도록 하였다.
2. 프로젝트들은 3열 배치되나 반응형에서는 1열 배치된다.            
   2.1. 프로젝트 호버 시 간단한 태그가 등장하도록 하였다.                
   2.2. 프로젝트 클릭 시 모달이 팝업되도록 하였다.       
3. 모달은 좌측은 프로젝트 초록, 우측은 프로젝트 미리보기로 분류할 수 있다.             
   3.1. 프로젝트 초록에서는 새 창 보기로 사이즈가 지정된 데모 페이지를 열어볼 수 있는 버튼을 만들도록 하였다.            
   3.2. 프로젝트 초록은 주로 비포 애프터로 공부 내용, 혹은 프로젝트 배경 및 변화 내용을 기술하였다.             
   3.3. 프로젝트 미리보기에서는 `swiper`를 활용하여, `GIF`로 프로젝트 결과물을 확인할 수 있으며, 하단에는 사용 기술 아이콘이 등장하도록 하였다.      
   3.4. 프로젝트 미리보기 하단은 `기획서`와 `디자인 시안`, `깃허브`로 이동하는 버튼을 두어 프로젝트 상세 내용을 언제든지 알 수 있도록 하였다.      
   
</br>
</br>
</br>

---
