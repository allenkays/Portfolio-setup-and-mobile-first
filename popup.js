// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
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
  const popupContainer = document.querySelector('.popup-container');
  const popupHead = document.querySelector('.popup-head');
  const popupContent = document.querySelector('.popup-content');
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
  popup.style.display = 'block';
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
