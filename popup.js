// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Function to show the popup with project details
function showPopup(projectIndex) {
  const project = projectsData[0]; // Assuming there's only one project in the data
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const closeButton = document.getElementById('close-popup'); // Get the X button element

  // Get the relevant details for the popup based on the project index
  const name = project.name[projectIndex];
  const description1 = isDesktopScreen ? project.description[3] : project.description[2];
  const description2 = isDesktopScreen ? project.description[4] : ('');
  const technologies = [project.technologies[1], project.technologies[2], project.technologies[4]];
  const featuredImage = isDesktopScreen ? project.featuredImage[6] : project.featuredImage[5];

  // Create the popup content dynamically using the project details
  popupContent.innerHTML = `
    <div class='popup'>
        <div class='popup-content'>
            <div class='popup-head'>
                <h3>${name}</h3>
            </div>
            <ul class='tech-stack'>
                ${technologies.map((tech) => `<li><button class='popup-stack'>${tech}</button></li>`).join('')}
            </ul>
            <div class="popup-data">
                <img src='${featuredImage}' alt='${name}'/>
                <div class='text-links'>
                    <p>${description1}</p>
                    <p>${description2}</p>
                    <div class='popup-links' id='popup-links'>
                        <a class='popup-links' href='${project.live}' target='_blank'><button class='l-button'>See Live<img src='./assets/popups/export.svg' alt="export icon" /></button></a>
                        <a class='popup-links' href='${project.source}' target='_blank'><button class="l-button">See Source<img src='./assets/popups/github.png' alt="github icon" /></button></a>
                    <div>
                </div>
            </div>
        </div>
    </div>
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
