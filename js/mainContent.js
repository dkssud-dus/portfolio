const content = {
  ko: {
    sectionDesc: {
      skill: "배움에서 보람과 행복을 느끼며 <br> 항상 공부하는 태도로 삶을 살고자 합니다.",
      works: "현재까지 제작한 프로젝트를 한 번에 확인하세요.",
      study: "노션으로 정리한 개발자 공부 기록입니다.",
      about: "학력, 경력 및 자격증 입니다."
    },

    languageSkill: [
      {
        name: "Korean",
        img: "/images/flag-Korea.png",
        desc: "한국어 원어민으로서, 독서와 신문 읽기 · 뉴스 청취를 즐기는 등 올바른 한국어 사용을 위해 늘 노력합니다. 또한 모르는 단어는 사전에 늘 검색하면서 어휘력을 키워나가려고 노력하고 있습니다."
      },
      {
        name: "Japanese",
        img: "/images/flag-Japan.png",
        desc: "일본어 전공자로서, 회화는 물론 문서 작성, 간단한 비즈니스 상황까지 대처 가능합니다. 대학 재학 중 두 번의 모의 수업과 아카데믹 일본어 발표를 경험한 적 있습니다. <br> <br> JLPT N1 / JPT 820점 취득 완료. <br> 현재 BJT 공부 중입니다."
      },
      {
        name: "English",
        img: "/images/flag-UK.webp",
        desc: "고전 영어 콘텐츠에 관심을 갖고 공부하고 있습니다. 간단한 회화는 가능합니다."
      },
      {
        name: "Chinese",
        img: "/images/flag-China.png",
        desc: "일본어를 공부하며 한자에 흥미를 가져 중국어 공부를 2025년 최근에 시작하게 되었습니다. <br> <br> 2026년 상반기 안에 HSK 취득을 목표로 하고 있습니다."
      }
    ],

    techToolSkill: [
      {
        name: "아래한글",
        img: "/images/icon-hwp.png",
        desc: "문서 작성이 가능합니다. <br><br> ITQ 취득 완료."
      },
      {
        name: "Microsoft Word",
        img: "/images/icon-word.png",
        desc: "문서 작성이 가능합니다."
      },
      {
        name: "Microsoft Excel",
        img: "/images/icon-excel.png",
        desc: "간단한 문서 작성이 가능합니다. <br><br> 인프런 강의 수강 예정에 있습니다. <br> ITQ 취득 완료."
      },
      {
        name: "Microsoft Powerpoint",
        img: "/images/icon-powerpoint.png",
        desc: "문서 작성이 가능합니다. 대학 재학 중 팀 프로젝트 발표에서 늘 프레젠테이션 작성을 담당했으며 깔끔하고 가독성 좋은 프레젠테이션으로 좋은 평가를 받았던 적이 있습니다. <br><br> ITQ 취득 완료."
      },
      {
        name: "Procreate",
        img: "/images/icon-procreate.png",
        desc: "사진 및 드로잉 작업이 가능합니다."
      },
      {
        name: "Adobe Photoshop",
        img: "/images/icon-photoshop.png",
        desc: "간단한 사진 편집이 가능합니다. 앞으로도 꾸준히 공부할 예정입니다. <br><br> GTQ 취득 완료."
      },
      {
        name: "Blender",
        img: "/images/icon-blender.png",
        desc: "늘 흥미를 갖고 있던 분야로, 2025년 최근 배우기 시작했습니다. 앞으로도 꾸준히 공부할 예정입니다."
      },
      {
        name: "Figma",
        img: "/images/icon-figma.png",
        desc: "문서 작성이 가능하며, 웹 디자인에서 가장 애용하는 툴입니다. 앞으로도 꾸준히 공부할 예정입니다. <br><br> 인프런 입문 강의 수강 완료."
      },
      {
        name: "HTML",
        img: "/images/icon-html.png",
        desc: "프론트엔드 공부를 시작하며 가장 먼저 배운 언어이자, 가장 익숙한 언어이기도 합니다. 다른 개발자가 보았을 때도 이해하기 쉽도록 작성하고자 합니다. <br><br> 직업 훈련 프론트엔드 과정 수강 중."
      },
      {
        name: "CSS",
        img: "/images/icon-css.png",
        desc: "HTML과 함께 배운 언어이며, 프로젝트를 진행해본 경험이 있습니다. 클린 코드를 지향하며 다른 개발자가 보았을 때도 이해하기 쉽도록 작성하고자 합니다. <br><br> 직업 훈련 프론트엔드 과정 수강 중."
      },
      {
        name: "SCSS",
        img: "/images/icon-scss.png",
        desc: "협업시 가장 애용하는 언어로 팀 프로젝트와 개인 프로젝트에서 SCSS를 사용하여 프로젝트를 진행해본 경험이 있습니다. <br><br> 직업 훈련 프론트엔드 과정 수강 중."
      },
      {
        name: "JS",
        img: "/images/icon-js.png",
        desc: "개념을 이해하고 있으며, 프로젝트 진행시 가장 흥미를 느끼는 언어입니다. <br> 간단한 기능을 구현할 수 있으며, 복잡한 코드도 한 줄 한 줄 뜯어보며 이해하고자 합니다. <br><br> 인프런 입문 강의 수강 완료. <br> 직업 훈련 프론트엔드 과정 수강 중."
      },
      {
        name: "jQuery",
        img: "/images/icon-jquery.png",
        desc: "간단한 개념을 이해하고 있습니다. <br><br> 인프런 입문 강의 수강 완료."
      },
      {
        name: "REACT.js",
        img: "/images/icon-react.png",
        desc: "2025년 상반기 기점으로 배우고 있는 라이브러리로, 프로젝트 진행 예정에 있습니다. <br><br> 직업 훈련 프론트엔드 과정 수강 중."
      },
      {
        name: "SLACK",
        img: "/images/icon-slack.png",
        desc: "팀 프로젝트에서 사용한 경험이 있으며, 익숙하게 사용할 수 있습니다."
      },
      {
        name: "Git Hub",
        img: "/images/icon-github.png",
        desc: "프론트엔드 공부를 시작하며 본격적으로 시작했으며, 매일 리포지토리를 관리하는 루틴을 만들기 위해 노력 중입니다. 목표는 contributions를 초록색으로 꽉 채우는 것입니다."
      },
      {
        name: "Notion",
        img: "/images/icon-notion.png",
        desc: "2020년부터 노션을 사용하고 있으며, 가장 애용하는 생산성 툴입니다. 개인 일기나 감상 기록부터 자산 관리, 공부, 플래너, 협업 관리까지 저의 일상에서 떼려야 뗄 수 없는 프로그램입니다."
      }
    ],

    history: {
      2020: {
        year: "~2020",
        item: [
        "ITQ Powerpoint, Excel, 아래한글",
        "문서실무사",
        "GTQ",
        "둔산여자고등학교 졸업"
        ]
      },
      2024: {
        year: "~2024",
        item: [
          "JPT 820점",
          "JLPT N1",
          "한밭대학교 일본어과 졸업"
        ]
      },
      2025: {
        year: "2025",
        item: [
          "인프런 자바스크립트 & 제이쿼리 입문 과정 수료",
          "인프런 피그마 입문 과정 수료",
          "그린컴퓨터아트학원 프론트엔드 과정 수료"
        ]
      },
    }
  },
  en: {
    sectionDesc: {
      skill: "I find joy and fulfillment in learning, and I strive to live with a mindset of constant growth.",
      works: "Check out the projects I’ve created so far.",
      study: "A record of my developer studies organized in Notion.",
      about: "Education, career, and certifications."
    },
  
    languageSkill: [
      {
        name: "Korean",
        img: "/images/flag-Korea.png",
        desc: "As a native Korean speaker, I enjoy reading books, newspapers, and listening to the news to ensure correct usage. I also build my vocabulary by regularly looking up unfamiliar words in the dictionary."
      },
      {
        name: "Japanese",
        img: "/images/flag-Japan.png",
        desc: "As a Japanese major, I can handle conversations, document writing, and basic business situations. I have experience in mock teaching and academic presentations at university. <br><br> Passed JLPT N1 / JPT 820. <br> Currently studying for the BJT."
      },
      {
        name: "English",
        img: "/images/flag-UK.webp",
        desc: "I study classical English content and am capable of basic conversations."
      },
      {
        name: "Chinese",
        img: "/images/flag-China.png",
        desc: "While studying Japanese, I became interested in Chinese characters and recently began learning Chinese in 2025. <br><br> My goal is to obtain the HSK certificate by the first half of 2026."
      }
    ],
  
    techToolSkill: [
      {
        name: "Hangeul Word Processor",
        img: "/images/icon-hwp.png",
        desc: "Capable of creating documents. <br><br> ITQ certified."
      },
      {
        name: "Microsoft Word",
        img: "/images/icon-word.png",
        desc: "Capable of creating documents."
      },
      {
        name: "Microsoft Excel",
        img: "/images/icon-excel.png",
        desc: "Able to create simple spreadsheets. <br><br> Planning to take an Inflearn course. <br> ITQ certified."
      },
      {
        name: "Microsoft PowerPoint",
        img: "/images/icon-powerpoint.png",
        desc: "Capable of creating presentations. I was often in charge of presentation design during university team projects and received positive feedback for clarity and readability. <br><br> ITQ certified."
      },
      {
        name: "Procreate",
        img: "/images/icon-procreate.png",
        desc: "Capable of drawing and photo work."
      },
      {
        name: "Adobe Photoshop",
        img: "/images/icon-photoshop.png",
        desc: "Able to perform basic photo editing. Planning to continue learning. <br><br> GTQ certified."
      },
      {
        name: "Blender",
        img: "/images/icon-blender.png",
        desc: "A field I’ve always been interested in. Started learning in 2025 and plan to continue studying."
      },
      {
        name: "Figma",
        img: "/images/icon-figma.png",
        desc: "Proficient in documentation; my most used tool for web design. <br><br> Completed beginner course on Inflearn."
      },
      {
        name: "HTML",
        img: "/images/icon-html.png",
        desc: "The first and most familiar language I learned for frontend development. I strive to write readable code for other developers. <br><br> Currently attending a frontend course at Green Computer Art Academy."
      },
      {
        name: "CSS",
        img: "/images/icon-css.png",
        desc: "Learned alongside HTML and used in projects. I aim to write clean and easy-to-read code. <br><br> Currently attending a frontend course at Green Computer Art Academy."
      },
      {
        name: "SCSS",
        img: "/images/icon-scss.png",
        desc: "My most frequently used style language during collaboration, applied in both team and personal projects. <br><br> Currently attending a frontend course at Green Computer Art Academy."
      },
      {
        name: "JavaScript",
        img: "/images/icon-js.png",
        desc: "I understand the core concepts and enjoy using JavaScript in projects. <br> I can implement simple functions and analyze complex code line by line to improve understanding. <br><br> Completed beginner course on Inflearn. <br> Currently attending a frontend course at Green Computer Art Academy."
      },
      {
        name: "jQuery",
        img: "/images/icon-jquery.png",
        desc: "Familiar with basic concepts. <br><br> Completed beginner course on Inflearn."
      },
      {
        name: "React.js",
        img: "/images/icon-react.png",
        desc: "A library I started learning in early 2025. Planning to apply it in future projects. <br><br> Currently attending a frontend course at Green Computer Art Academy."
      },
      {
        name: "Slack",
        img: "/images/icon-slack.png",
        desc: "Used during team projects and can use it comfortably."
      },
      {
        name: "GitHub",
        img: "/images/icon-github.png",
        desc: "Started using GitHub in earnest when I began frontend studies. I’m building a routine of daily repository management. My goal is to fill the contribution graph with green."
      },
      {
        name: "Notion",
        img: "/images/icon-notion.png",
        desc: "I’ve been using Notion since 2020 and it’s my favorite productivity tool. I use it for journaling, asset tracking, studying, planning, and collaboration. It’s essential in my daily life."
      }
    ],
  
    history: {
      2020: {
        year: "~2020",
        item: [
          "ITQ PowerPoint, Excel, Hangeul Word Processor",
          "Certified Document Clerk",
          "GTQ certified",
          "Graduated from Dunsan Girls’ High School"
        ]
      },
      2024: {
        year: "~2024",
        item: [
          "JPT 820",
          "JLPT N1",
          "Graduated from Hanbat University, Japanese Language Department"
        ]
      },
      2025: {
        year: "2025",
        item: [
          "Completed Inflearn JavaScript & jQuery Beginner Course",
          "Completed Inflearn Figma Beginner Course",
          "Completed Green Computer Art Academy Frontend Course"
        ]
      }
    }
  },
  ja: {
    sectionDesc: {
      skill: "学びから喜びと幸せを感じ、<br>常に学ぶ姿勢で人生を歩みたいと思っています。",
      works: "これまで制作したプロジェクトを一目で確認できます。",
      study: "Notionで整理した開発者としての学習記録です。",
      about: "学歴、経歴、および資格に関する情報です。"
    },
  
    languageSkill: [
      {
        name: "韓国語",
        img: "/images/flag-Korea.png",
        desc: "韓国語を母国語とし、本や新聞を読んだりニュースを聞いたりすることを通じて、常に正しい韓国語の使用に努めています。また、知らない単語は辞書で調べ、語彙力を伸ばすよう努力しています。"
      },
      {
        name: "日本語",
        img: "/images/flag-Japan.png",
        desc: "日本語専攻として、会話だけでなく、文書作成や簡単なビジネス場面にも対応できます。<br>大学在学中に模擬授業とアカデミックな日本語発表の経験があります。<br><br>JLPT N1 / JPT 820点取得済み。<br>現在はBJTを勉強中です。"
      },
      {
        name: "英語",
        img: "/images/flag-UK.webp",
        desc: "古典的な英語コンテンツに興味を持ち、学習しています。簡単な会話は可能です。"
      },
      {
        name: "中国語",
        img: "/images/flag-China.png",
        desc: "日本語を学ぶ過程で漢字に興味を持ち、2025年から中国語の勉強を始めました。<br><br>2026年上半期までにHSKの取得を目指しています。"
      }
    ],
  
    techToolSkill: [
      {
        name: "ハングル",
        img: "/images/icon-hwp.png",
        desc: "文書の作成が可能です。<br><br>ITQ資格取得済み。"
      },
      {
        name: "Microsoft Word",
        img: "/images/icon-word.png",
        desc: "文書の作成が可能です。"
      },
      {
        name: "Microsoft Excel",
        img: "/images/icon-excel.png",
        desc: "簡単な表計算の作成が可能です。<br><br>インフランの講座を受講予定です。<br>ITQ資格取得済み。"
      },
      {
        name: "Microsoft PowerPoint",
        img: "/images/icon-powerpoint.png",
        desc: "文書の作成が可能です。<br>大学のチームプロジェクトにおいて常にプレゼン作成を担当し、<br>分かりやすく整った資料として高評価を受けました。<br><br>ITQ資格取得済み。"
      },
      {
        name: "Procreate",
        img: "/images/icon-procreate.png",
        desc: "イラストや画像編集が可能です。"
      },
      {
        name: "Adobe Photoshop",
        img: "/images/icon-photoshop.png",
        desc: "簡単な画像編集が可能です。今後も継続して学習する予定です。<br><br>GTQ資格取得済み。"
      },
      {
        name: "Blender",
        img: "/images/icon-blender.png",
        desc: "以前から関心のある分野であり、2025年から学習を始めました。<br>今後も継続して勉強する予定です。"
      },
      {
        name: "Figma",
        img: "/images/icon-figma.png",
        desc: "文書の作成が可能で、Webデザインで最もよく使っているツールです。<br>インフラン入門講座修了済み。"
      },
      {
        name: "HTML",
        img: "/images/icon-html.png",
        desc: "フロントエンドを学び始めて最初に習得した言語であり、最も馴染みのある言語です。<br>他の開発者にも分かりやすいコードを意識しています。<br><br>職業訓練フロントエンド課程受講中。"
      },
      {
        name: "CSS",
        img: "/images/icon-css.png",
        desc: "HTMLと一緒に学び、実際のプロジェクトにも使用しました。<br>クリーンコードを目指して記述しています。<br><br>職業訓練フロントエンド課程受講中。"
      },
      {
        name: "SCSS",
        img: "/images/icon-scss.png",
        desc: "チーム作業で最も多く使われ、個人・チームプロジェクトで使用経験があります。<br><br>職業訓練フロントエンド課程受講中。"
      },
      {
        name: "JavaScript",
        img: "/images/icon-js.png",
        desc: "基本的な概念を理解しており、プロジェクトでも楽しく使用しています。<br>簡単な機能の実装が可能で、複雑なコードも細かく読解しようと努めています。<br><br>インフラン入門講座修了済み。<br>職業訓練フロントエンド課程受講中。"
      },
      {
        name: "jQuery",
        img: "/images/icon-jquery.png",
        desc: "基本的な概念を理解しています。<br><br>インフラン入門講座修了済み。"
      },
      {
        name: "React.js",
        img: "/images/icon-react.png",
        desc: "2025年に学習を始めたライブラリで、今後のプロジェクトで使用予定です。<br><br>職業訓練フロントエンド課程受講中。"
      },
      {
        name: "Slack",
        img: "/images/icon-slack.png",
        desc: "チームプロジェクトで使用経験があり、スムーズに使用できます。"
      },
      {
        name: "GitHub",
        img: "/images/icon-github.png",
        desc: "フロントエンド学習とともに本格的に使い始めました。<br>毎日リポジトリを管理する習慣をつけようと努力中です。<br>目標は「貢献度マップを緑色でいっぱいにする」ことです。"
      },
      {
        name: "Notion",
        img: "/images/icon-notion.png",
        desc: "2020年から使用している最もお気に入りの生産性ツールです。<br>日記、感想の記録、資産管理、学習、プランニング、共同作業まで、<br>私の日常生活には欠かせないツールです。"
      }
    ],
  
    history: {
      2020: {
        year: "~2020",
        item: [
          "ITQ パワーポイント、エクセル、ハングル",
          "文書実務士",
          "GTQ",
          "大田屯山女子高等學校 卒業"
        ]
      },
      2024: {
        year: "~2024",
        item: [
          "JPT 820点",
          "JLPT N1",
          "国立ハンバッ大学校 日本語学科 卒業"
        ]
      },
      2025: {
        year: "2025",
        item: [
          "インフラン JavaScript & jQuery 入門講座 修了",
          "インフラン Figma 入門講座 修了",
          "グリーンコンピューターアート学院 フロントエンド課程 修了"
        ]
      }
    }
  }
};
