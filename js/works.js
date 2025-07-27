/* Option button → hover */
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

/* Option menu toggle */
let optionBtn = document.querySelectorAll(".option li b");

optionBtn.forEach(list => {
  list.addEventListener('click', function () {
    let optionList = this.nextElementSibling;
    optionList.classList.toggle('visible');

    let optionArrow = this.querySelector('i');
    optionArrow.style.transform = optionList.classList.contains('visible') ? 'rotate(180deg)' : 'rotate(0deg)';
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
    currentLang = btn.dataset.lang;
    renderContent(currentLang, currentSection);
  });
});

/* filter */
let categoryFilter = null;
let techToolFilter = null;

const filterCategoryBtn = document.querySelector('.filter-category-button');
const filterTechToolBtn = document.querySelector('.filter-techTool-button');
const categoryList = document.querySelector('.category-filter-list');
const techToolList = document.querySelector('.techTool-filter-list');

filterCategoryBtn.addEventListener('click', () => {
  categoryList.classList.toggle('open');
  techToolList.classList.remove('open');
});
filterTechToolBtn.addEventListener('click', () => {
  techToolList.classList.toggle('open');
  categoryList.classList.remove('open');
});

const categoryButtons = document.querySelectorAll('.category-filter-list button');
const techToolButtons = document.querySelectorAll('.techTool-filter-list button');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.parentElement.classList.remove('active'));
    btn.parentElement.classList.add('active');
    const selected = btn.textContent.trim();
    categoryFilter = (selected === 'All') ? null : selected;
    renderContent(currentLang, currentSection);
  });
});

techToolButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    techToolButtons.forEach(b => b.parentElement.classList.remove('active'));
    btn.parentElement.classList.add('active');
    const selected = btn.textContent.trim();
    techToolFilter = (selected === 'All') ? null : selected;
    renderContent(currentLang, currentSection);
  });
});

/* language rendering */
function renderContent(lang, section) {
  if (section === 'language') {
    renderFilteredProjects(lang, categoryFilter, techToolFilter);
  }
}

/* filter rendering */
function renderFilteredProjects(lang, category, techTool) {
  const projectList = document.querySelector('.project-list ul');
  const projects = projectsContent[lang];
  projectList.innerHTML = '';

  const filtered = projects.filter(project => {
    const normalize = str => str.toLowerCase().replace(/#/g, '').replace(/\s/g, '');
    const categoryMatch = !category || project.hashtags.some(tag => normalize(tag) === normalize(category));
    const techNames = project.techTool.map(t => t.name.toLowerCase());
    const techToolMatch = !techTool || techNames.includes(techTool.toLowerCase());
    return categoryMatch && techToolMatch;
  });

  if (filtered.length === 0) {
    projectList.innerHTML = `<li class="no-results">No projects found.</li>`;
  } else {
    filtered.forEach((project, index) => {
      const li = document.createElement('li');
      li.classList.add('project-card');
      li.dataset.projectId = index;
      li.innerHTML = `
        <div class="project-overlay">
          <span>View this project</span>
          <strong>${project.hashtags.join(' ')}</strong>
        </div>
        <div class="project-title">
          <p>${project.title}</p>
        </div>
        <div class="project-image">
          <img src="${project.images[0]}" alt="${project.title}">
        </div>
      `;
      projectList.appendChild(li);
    });
  }
}

/* open modal */
function openProjectModal(project) {
  const modal = document.querySelector('.project-modal');
  const overlay = document.querySelector('.modal-overlay');
  const main = document.querySelector('main');

  // modal content
  modal.querySelector('.title').textContent = project.subtitle;
  modal.querySelector('.lang-title').textContent = project.title;
  modal.querySelector('.project-schedule + p').textContent = project.schedule;
  modal.querySelector('.keyword').textContent = project.keywords.join(' ');

  // Overview
  const beforeUl = modal.querySelector('.project-info-overview .before ul');
  const afterUl = modal.querySelector('.project-info-overview .after ul');
  beforeUl.innerHTML = '';
  afterUl.innerHTML = '';
  project.overview.before.forEach(txt => {
    const li = document.createElement('li');
    li.className = 'overview-list';
    li.textContent = txt;
    beforeUl.appendChild(li);
  });
  project.overview.after.forEach(txt => {
    const li = document.createElement('li');
    li.className = 'overview-list';
    li.textContent = txt;
    afterUl.appendChild(li);
  });

  // swiper
  const swiperWrapper = modal.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';
  project.images.forEach(src => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${src}" alt="">`;
    swiperWrapper.appendChild(slide);
  });

  // Tech Tool
  const techList = modal.querySelector('.project-techTool-list');
  techList.innerHTML = '';
  project.techTool.forEach(tool => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${tool.img}" alt="${tool.name}">`;
    techList.appendChild(li);
  });

  // Demo 
  const demoButtons = modal.querySelectorAll('.project-demo-button'); 
  demoButtons.forEach(btn => { 
    const type = btn.classList.contains('mobile') ? 'mobile' :
      btn.classList.contains('tablet') ? 'tablet' :
      'desktop';

    const listItem = btn.parentNode; //

    if (project.demo && project.demo[type] && project.demo[type].url && project.demo[type].url.trim() !== '') {
      btn.onclick = () => {
        const url = project.demo[type].url;
        let features = '';
        if (type === 'mobile') {
          features = 'width=768,height=1024,resizable=yes,scrollbars=yes';
        } else if (type === 'tablet') {
          features = 'width=1100,height=1024,resizable=yes,scrollbars=yes';
        } else { // desktop
          features = 'width=1920,height=1080,resizable=yes,scrollbars=yes';
        }
        window.open(url, '_blank', features);
      };
      btn.disabled = false;
      listItem.style.display = 'list-item';
    } else {
      btn.onclick = null;
      btn.disabled = true; 
      listItem.style.display = 'none'; 
    }
  });

  // resource
  const resourceButtonsContainer = modal.querySelector('.project-resource-buttons');
  const projectBriefLink = resourceButtonsContainer.querySelector('.project-brief-link');
  const designBriefLink = resourceButtonsContainer.querySelector('.design-brief-link');
  const gitHubLink = resourceButtonsContainer.querySelector('.github-link');

  if (projectBriefLink) { 
    const projectBriefListItem = projectBriefLink.parentNode;
    if (project.projectBrief && project.projectBrief.trim() !== '') {
      projectBriefLink.href = project.projectBrief;
      projectBriefListItem.style.display = 'list-item'; 
      projectBriefLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.projectBrief, '_blank');
      };
    } else {
      projectBriefListItem.style.display = 'none'; 
      projectBriefLink.onclick = null;
    }
  }

  if (designBriefLink) {
    const designBriefListItem = designBriefLink.parentNode;
    if (project.designBrief && project.designBrief.trim() !== '') {
      designBriefLink.href = project.designBrief;
      designBriefListItem.style.display = 'list-item'; 
      designBriefLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.designBrief, '_blank');
      };
    } else {
      designBriefListItem.style.display = 'none';
      designBriefLink.onclick = null;
    }
  }

  if (gitHubLink) { 
    const gitHubListItem = gitHubLink.parentNode; 
    if (project.gitHub && project.gitHub.trim() !== '') {
      gitHubLink.href = project.gitHub;
      gitHubListItem.style.display = 'list-item'; 
      gitHubLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.gitHub, '_blank');
      };
    } else {
      gitHubListItem.style.display = 'none'; 
      gitHubLink.onclick = null;
    }
  }

  // modal + overlay + scroll
  modal.classList.add('open');
  overlay.style.display = 'block';
  main.classList.add('modal-open');
}

/* close modal */
function closeModal() {
  const modal = document.querySelector('.project-modal');
  const overlay = document.querySelector('.modal-overlay');
  const main = document.querySelector('main');

  modal.classList.remove('open');
  overlay.style.display = 'none';
  main.classList.remove('modal-open');
}

/* card click */
document.addEventListener('click', function (e) {
  const card = e.target.closest('.project-card');
  if (!card) return;

  const id = parseInt(card.dataset.projectId);
  const projects = projectsContent[currentLang]; 

  const filtered = projects.filter(project => {
    const normalize = str => str.toLowerCase().replace(/#/g, '').replace(/\s/g, '');
    const categoryMatch = !categoryFilter || project.hashtags.some(tag => normalize(tag) === normalize(categoryFilter));
    const techToolMatch = !techToolFilter || project.techTool.map(t => t.name.toLowerCase()).includes(techToolFilter.toLowerCase());
    return categoryMatch && techToolMatch;
  });

  const project = filtered[id];
  if (project) {
    openProjectModal(project);
  } else {
    console.warn('프로젝트를 찾을 수 없습니다.');
  }
});

document.querySelector('.modal-close-button').addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

/* swiper */
var swiper = new Swiper(".project-image-swiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  renderContent(currentLang, currentSection);
});