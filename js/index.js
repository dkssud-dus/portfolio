/* windows */
// option button hover
let headerOptionBtn = document.querySelector(".header-option-button");
let optionBox = document.querySelector(".option-list");

headerOptionBtn.addEventListener("mouseenter", () => {
  optionBox.style.height = 'auto';
});
headerOptionBtn.addEventListener("mouseleave", () => {
  optionBox.style.height = '0';
});

optionBox.addEventListener("mouseenter", () => {
  optionBox.style.height = 'auto';
});
optionBox.addEventListener("mouseleave", () => {
  optionBox.style.height = '0';
});

// option language / download hover → ul list
let optionBtn = document.querySelectorAll(".option li b");

optionBtn.forEach(list => {
  list.addEventListener('click', function () {
    let optionList = this.nextElementSibling;
    optionList.classList.toggle('visible');
    
    let optionArrow = this.querySelector('i');
    if (optionList.classList.contains('visible')) {
      optionArrow.style.transform = 'rotate(180deg)';
    } else {
      optionArrow.style.transform = 'rotate(0deg)';
    }
  });
});

/* language setting */
let currentLang = 'ko';
let currentSection = 'language';

const langButtons = document.querySelectorAll('.option.language button');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedLang = btn.dataset.lang;

    currentLang = selectedLang;
    renderContent(currentLang, currentSection);

    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderContent('ko', 'language');
});

/* language content */
function renderContent(lang, section) {
  const data = content[lang];

  /* section desc */
  // sectionDesc
  document.querySelector('.skill .section-desc').innerHTML = data.sectionDesc.skill;
  document.querySelector('.works .section-desc').innerHTML = data.sectionDesc.works;
  document.querySelector('.study .section-desc').innerHTML = data.sectionDesc.study;
  document.querySelector('.aboutMe .section-desc').innerHTML = data.sectionDesc.about;

  /* section .skill */
  const skillList = document.querySelector('.skill-list ul');
  skillList.innerHTML = '';

  if (section === 'language') {
    data.languageSkill.forEach(skill => {
      skillList.classList.add('lang');
      skillList.classList.remove('techTool');
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${skill.img}" alt="${skill.name}">
        <span>${skill.desc}</span>
      `;
      skillList.appendChild(listItem);
    });
  } else if (section === 'techTool') {
    data.techToolSkill.forEach(tool => {
      skillList.classList.add('techTool');
      skillList.classList.remove('lang');
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${tool.img}" alt="${tool.name}">
        <span>${tool.desc}</span>
      `;
      skillList.appendChild(listItem);
    });
  }

  /* section .aboutMe */
  const historyData = content[lang].history;
  const aboutMyHistoryList = document.querySelector('.about-my-history-list');
  
  aboutMyHistoryList.innerHTML = '';

  Object.keys(historyData).forEach(year => {
    const item = historyData[year];
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <b>${item.year}</b>
      <ul class="about-my-experience-list">
        ${item.item.map(exp => `<li>${exp}</li>`).join('')}
      </ul>
    `;
    aboutMyHistoryList.appendChild(listItem);
  });
}

/* section .intro */
const myCatchphrase = [
  "성실함과 꼼꼼함을 지향하고, 게으름과 나태함을 지양합니다. |",
  "I strive for diligence and thoroughness, and avoid laziness and negligence. |",
  "誠実さと細かさを重視し、怠惰やだらしなさを避けています。 |",
  "즐겁게 배우는 삶을 목표로 늘 공부하고 있습니다. |",
  "I always study with the goal of enjoying the process of learning. |",
  "楽しく学ぶことを目標に、常に勉強しています。 |",
  "독서와 영화 감상을 즐기며 깊이 생각하는 걸 좋아해요. |",
  "I enjoy reading books and watching movies, and like to think deeply. |",
  "読書や映画鑑賞を楽しみ、深く考えることが好きです。 |"
]

let catchphraseIndex = 0;
let  charIndex = 0;

const catchphraseElement = document.querySelector('.catchphrase-box p');

function type() {
  let current = myCatchphrase[catchphraseIndex];
  catchphraseElement.innerHTML = current.slice(0, charIndex + 1);
  charIndex ++;
  if(charIndex === current.length){
    setTimeout(function (){
      charIndex = 0;
      catchphraseIndex = (catchphraseIndex + 1) % myCatchphrase.length;
      type();
    }, 500);
  }else{
    setTimeout(type, 100);
  }
};

type();

/* section .skill */
// button click → change content
const langBtn = document.querySelector('.lang');
const techToolBtn = document.querySelector('.techTool');

langBtn.addEventListener('click', () => {
  currentSection = 'language';
  renderContent(currentLang, 'language');
  langBtn.classList.add('active');
  techToolBtn.classList.remove('active');
});

techToolBtn.addEventListener('click', () => {
  currentSection = 'techTool';
  renderContent(currentLang, 'techTool');
  techToolBtn.classList.add('active');
  langBtn.classList.remove('active');
});
