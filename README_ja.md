###### Other Language
[English](https://github.com/dkssud-dus/portfolio/blob/main/README_en.md) | [한국어](https://github.com/dkssud-dus/portfolio/blob/main/README.md) | [日本語](https://github.com/dkssud-dus/portfolio/blob/main/README_ja.md)

<br/><br/><br/>

# Portfolio
![4](https://github.com/user-attachments/assets/476b4dc9-a588-4319-8af6-232b92cb00ac)

<br/><br/>

**Windows XPの感性を現代ウェブで再解釈した多言語個人ポートフォリオ**
> 既存の履歴書では伝えることが難しい「自分らしいスタイル」と成長過程を明確に示すために、このポートフォリオを企画しました。Windows XPの親しみやすい視覚言語を現代ウェブで再解釈し、サイト内にまた別のサイトがあるような入れ子状のレイアウトでアイデンティティを表現しました。HTML・SCSS・JavaScript基盤のレスポンシブ構造と多言語コンテンツ管理、フィルター・モーダル中心のインタラクションを通じて、ユーザーは素早くプロジェクトを探索し、私の作業意図と学習記録を確認できます。

<br/><br/><br/>

## Link
- ライブサイト: https://dkssud-dus.github.io/portfolio/
- 企画書 (Figma Slide): https://www.figma.com/deck/t0gQ19HADYSrVkqbtzVifg/-webDesign--Personal-Portfolio--Project-Brief-?node-id=1-42&t=d5yEtWgpvqxSup7Y-1
- デザインモックアップ (Figma): https://www.figma.com/design/8OkxmWio2kC2G2lr2v9kuS/-webDesign--Personal-Portfolio--Design-Brief-?node-id=4-95&t=ITv4Ae0KyzAnmM6b-1

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
現在のように数多くのデザイナーと開発者が活動する環境において、個人のアイデンティティを明確に伝え、自分の作業哲学と強みを示すスペースは重要視されます。既存の履歴書では「私」を適切に表現できないだけでなく、成長の方向性や作業意図を十分に示すことが困難だと感じました。

<br/>

### Purpose
- 自分の作品と思考方式、そして開発者としての成長過程を有機的に示すことができるサイトを構築したい。
- 単純なポートフォリオを超えて、ユーザーが直感的に私の性向と能力を把握できるようにしたい。

<br/>

### Keywords
`Windows XP`
- 初めて接したOSがWindows XPだったため、その雰囲気を活かしてデザイン
- 特に2025年現在フロントエンド勉強をしている分、ウェブサイト内にまた別のウェブサイトがあるようにデザインして「私」を表現
  
`可読性とフロー`
- ユーザーが快適に探索できるよう、情報の流れとコンテンツ構造を直感的に配置

`学習中心 / 変化可能性`
- これまでの学びと今後の方向性を有機的に含む

<br/>

### Schedule
- 2025.06.23. - 2025.06.27.
- Total 31 - 32 Hours

<br/>

### Design
`レトロ感性(Windows XP)`
- 親しみやすい色彩とUIボキャブラリーで個人的な物語を視覚化

`入れ子構造(サイト内の小さなサイト)`
- ポートフォリオの個別プロジェクトが独立した経験のように感じられるよう設計

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
`多言語サポート`
- 以前のスタジオジブリプロジェクトでは、言語別にHTMLを新しく組み込む方式を活用してファイル管理が非効率的でした。
- そこで、今回のプロジェクトではJSでオブジェクトを使用して内部コンテンツ管理をより簡単にします。
  
`フィルター機能`
- オブジェクトに入力された値を基にボタンのテキストと同一の値を表示できるようにします。
- プロジェクトカテゴリ / プロジェクト使用技術でフィルターが分かれており、ボタンクリック時に該当項目が表示されるようにします。
  
`モーダルポップアップ`
- プロジェクトクリック時にモーダルがポップアップしてページ移動を最小化し、ユーザーの利便性を拡大するようにします。

<br/>

### [Main Page](https://dkssud-dus.github.io/portfolio/)

<details>
  <summary>Click to expand</summary>

<br/>

![4](https://github.com/user-attachments/assets/476b4dc9-a588-4319-8af6-232b92cb00ac)

### Header + Main Visual
**Purpose**
- ユーザーに「私」を印象付けるようにします。
- ヘッダーは常に固定されて、ユーザーがいつでも言語変更や履歴書ダウンロードなどの機能を実行できるようにします。

**Summary**
- ヘッダーはGitHub、LinkedIn、MailToのリンク移動機能を実行します。
- また言語変更（英語、韓国語、日本語）機能を使用でき、履歴書もダウンロード可能です。（2025.08.25.基準未アップロード）
- サブページ移動は新しいウィンドウで開くで可能にしました。
- 座右の銘はテキストがタイピングされるように表示されるようにしました。

<br/><br/>

![2](https://github.com/user-attachments/assets/7d59de4d-813c-4fbc-9b81-2517f98fd297)

### Skill
**Purpose**
- ユーザーが一目で実装可能スキルを見られるようにします。

**Summary**
- タブを活用して言語とツール&技術を分類して見られるようにしました。
- アイコンホバー時にツールチップで説明文が表示されます。

<br/><br/>

![3](https://github.com/user-attachments/assets/0daa6256-0260-43bd-84ec-35f7fbda3843)

### Works & Study & About Me & Thank you for Reading!
**Purpose**
- ユーザーが直感的に情報を認識できるようにします。

**Summary**
- Worksではサブページのリンク移動機能を実行するようにしました。
- Studyでは勉強記録を残したNotion個人ページへのリンク移動機能を実行するようにしました。
- About Meは経歴 / 資格証 / 学歴などの記載のみ実行するようにしました。
- Thank you for Reading! では個人情報およびMailto機能を実行するようにしました。

<br/>

</details>

<br/>

### [Sub Page: Works](https://dkssud-dus.github.io/portfolio/pages/works.html)

<details>
  <summary>Click to expand</summary>

<br/>

![4](https://github.com/user-attachments/assets/a9815b2f-30ed-4ac2-bb60-ba8140e09c51)

**Purpose**
- ユーザーがより直感的に情報を認識し、便利に使用できるようにします。

**Summary**
- カテゴリとツール&技術でフィルタリング機能を活用してプロジェクトを確認できるようにしました。
- プロジェクトは3列配置されますが、レスポンシブでは1列配置されます。
   - プロジェクトホバー時に簡単なタグが表示されるようにしました。
   - プロジェクトクリック時にモーダルがポップアップされるようにしました。
- モーダルは左側がプロジェクト概要、右側がプロジェクトプレビューに分類できます。
   - プロジェクト概要では新しいウィンドウで開くでサイズが指定されたデモページを開くことができるボタンを作成しました。
   - プロジェクト概要は主にビフォーアフターで勉強内容、またはプロジェクト背景及び変化内容を記述しました。
   - プロジェクトプレビューではswiperを活用して、GIFでプロジェクト結果物を確認でき、下段には使用技術アイコンが表示されるようにしました。
   - プロジェクトプレビュー下段は企画書とデザインモックアップ、GitHubに移動するボタンを配置してプロジェクト詳細内容をいつでも知ることができるようにしました。

<br/>

</details>

<br/>

## Environment & Contribution
- OS: Windows 11, Windows 10
- Viewpoint: Desktop(1980px), Mobile(768px)
- Contribute: 100% 個人作業 (企画、デザイン、開発)

<br/>

## Contact
- GitHub: https://github.com/dkssud-dus
- Email: chae3929@gmail.com
- LinkedIn: https://www.linkedin.com/in/dkssud-chaeyeon/


<br/><br/><br/>
