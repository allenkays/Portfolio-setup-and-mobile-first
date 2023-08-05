// JavaScript for mobile-first navigation menu
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelectorAll('.menu-items');
hamburgerIcon.addEventListener('click', () => {
  menuItems.forEach((item) => item.classList.toggle('show'));
  hamburgerIcon.classList.toggle('show');
});

document.querySelectorAll('.menu-items').forEach((item) => item.addEventListener('click', () => {
  menuItems.forEach((item) => item.classList.remove('show'));
  hamburgerIcon.classList.remove('show');
}));

const projectsData = [
  {
    name: ['My Recent Work', 'Multi-Post Stories'],
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    featuredImage: [
      './assets/recent_works/hm_img.png',
      './assets/recent_works/bg-img-desktop.png',
      './assets/popups/snapshootPortfolio.png',
      './assets/popups/snapshootPortfolio.svg',
    ],
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://allenkays.github.io/',
    sourceLink: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
  {
    name: 'Profesional Art Printing Data',
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
    featuredImage: [
      './assets/recent_works/bg-img.png',
      './assets/popups/snapshootPortfolio.png',
    ],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://allenkays.github.io/',
    sourceLink: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    featuredImage: [
      './assets/recent_works/art.svg',
      './assets/popups/snapshootPortfolio.svg',
    ],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://allenkays.github.io/',
    sourceLink: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    featuredImage: [
      './assets/recent_works/data.svg',
      './assets/popups/snapshootPortfolio.svg',
    ],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://allenkays.github.io/',
    sourceLink: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
  {
    name: 'Website Portfolio',
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    featuredImage: [
      './assets/recent_works/website.svg',
      './assets/popups/snapshootPortfolio.svg',
    ],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://allenkays.github.io/',
    sourceLink: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
];
function createCard(data) {
  const [mobileImage, desktopImage] = data.featuredImage;
  const [title, subTitle] = data.name;
  const description = data.description[0];

  const article = document.createElement('article');
  article.className = 'art-data';

  const img = document.createElement('img');
  img.className = 'bg-img2';
  img.src = mobileImage;
  img.alt = 'background-image';

  const overlayContent = document.createElement('div');
  overlayContent.className = 'overlay-content';

  const titleElement = document.createElement('h3');
  titleElement.className = 'title-post';
  titleElement.innerText = subTitle;

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.innerText = description;

  const ul = document.createElement('ul');
  ul.className = 'stack-2';

  data.technologies.forEach((technology) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = technology.toLowerCase();
    button.type = 'button';
    button.innerText = technology;
    li.appendChild(button);
    ul.appendChild(li);
  });

  const seeProjectButton = document.createElement('button');
  seeProjectButton.className = 'b-button';
  seeProjectButton.type = 'button';
  seeProjectButton.innerText = 'See project';

  overlayContent.appendChild(titleElement);
  overlayContent.appendChild(descriptionElement);
  overlayContent.appendChild(ul);
  overlayContent.appendChild(seeProjectButton);

  article.appendChild(img);
  article.appendChild(overlayContent);

  return article;
}

function generateCards() {
  const portfolioSection = document.getElementById('projects');

  // Replace projectsData with your actual data array
  const projectsData = [];

  // Generate mobile card
  const mobileCard = createCard(projectsData[1]);
  portfolioSection.appendChild(mobileCard);

  // Generate other cards for desktop
  const desktopData = projectsData.slice(2, 6);
  desktopData.forEach((data) => {
    const desktopCard = createCard(data);
    portfolioSection.appendChild(desktopCard);
  });
}

generateCards();

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup');
  // popup.style.display = 'none';
  popup.classList.remove('show');
}

// Define the closeButton element outside the showPopup function
let closeButton = document.getElementById('close-popup');
if (!closeButton) {
  closeButton = document.createElement('div');
  closeButton.setAttribute('class', 'close-popup');
  closeButton.setAttribute('id', 'close-popup');
  closeButton.innerHTML = `
    <span class="bar-1"></span>
    <span class="bar-2"></span>
  `;
  const popupContent = document.getElementById('popup-content');
  popupContent.appendChild(closeButton);
  // Add event listener for the X button to hide the popup when clicked
  closeButton.addEventListener('click', hidePopup);
}
// Function to show the popup with project details
function showPopup(projectIndex) {
  const project = projectsData[0]; // Since there's only one project in the data
  const popup = document.getElementById('popup');
  const popupHead = document.querySelector('.popup-head');
  const techStack = document.querySelector('.tech-stack');
  const popupData = document.querySelector('.popup-data');
  const popupLinks = document.getElementById('popup-links');

  // Get the relevant details for the popup based on the project index
  const name = project.name[projectIndex];
  const description1 = isDesktopScreen ? project.description[3] : project.description[2];
  const description2 = isDesktopScreen ? project.description[4] : '';
  const technologies = [project.technologies[1], project.technologies[2], project.technologies[4]];
  const featuredImage = isDesktopScreen ? project.featuredImage[6] : project.featuredImage[5];
  const liveLink = project.live;
  const sourceLink = project.source;

  // Update the popup content dynamically using the project details
  popupHead.querySelector('h3').textContent = name;
  techStack.innerHTML = technologies.map((tech) => `<li><button class='popup-stack'>${tech}</button></li>`).join('');
  popupData.querySelector('img').src = featuredImage;
  popupData.querySelectorAll('p')[0].textContent = description1;
  popupData.querySelectorAll('p')[1].textContent = description2;

  popupLinks.innerHTML = `
    <a class='popup-links' href='${liveLink}' target='_blank'><button class='l-button'>See Live<img src='./assets/popups/export.svg' alt="export icon" /></button></a>
    <a class='popup-links' href='${sourceLink}' target='_blank'><button class="l-button">See Source<img src='./assets/popups/github.png' alt="github icon" /></button></a>
  `;

  // Add event listener for the X button to hide the popup when clicked
  closeButton.addEventListener('click', hidePopup);

  // Make the popup visible by changing its display style
  // popup.style.display = 'block';
  popup.classList.add('show');
}

// Function to handle the click event on "See project" buttons
function handleSeeProjectButtonClick() {
  // Determine the project index based on the button's index in the NodeList
  const projectIndex = Array.from(document.querySelectorAll('.s-button, .b-button')).indexOf(this);
  showPopup(projectIndex);
}

// Add click event listeners to the "See project" buttons
const seeProjectButtons = document.querySelectorAll('.s-button, .b-button');
seeProjectButtons.forEach((button) => {
  button.addEventListener('click', handleSeeProjectButtonClick);
});