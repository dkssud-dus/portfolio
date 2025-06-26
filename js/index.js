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
document.addEventListener("DOMContentLoaded", () => {
  renderContent('ko', 'language');
});

/* language content */
function renderContent(lang, section) {
  /* intro catchphrase */
  // 타이핑 기능

  /* section desc */
  const skillDesc = document.querySelector('.skill .section-desc');
  const worksDesc = document.querySelector('.works .section-desc');
  const studyDesc = document.querySelector('.study .section-desc');
  const aboutMeDesc = document.querySelector('.aboutMe .section-desc');
  // 설정에 맞는 언어 보여줌!

  /* section .skill */
  const data = content[lang];
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

/* section .skill */
// button click → change content
const langBtn = document.querySelector('.lang');
const techToolBtn = document.querySelector('.techTool');

langBtn.addEventListener('click', () => {
  renderContent('ko', 'language');
  langBtn.classList.add('active');
  techToolBtn.classList.remove('active');
});

techToolBtn.addEventListener('click', () => {
  renderContent('ko', 'techTool');
  techToolBtn.classList.add('active');
  langBtn.classList.remove('active');
});

