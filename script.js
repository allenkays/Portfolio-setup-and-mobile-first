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

// Define the projects data
const projectsData = [
  {
    name: [
      'My Recent Works',
      'Multi-Post Stories',
      'Professional Art Printing Data',
      'Data Dashboard Healthcare',
      'Website Portfolio',
      'Professional Art Printing Data',
      'Data Dashboard Healthcare',
      'Website Portfolio',
    ],
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    featuredImage: [
      {
        featuredImageMobile: './assets/recent_works/hm_img.png',
        featuredImageDesktop: './assets/recent_works/bg-img-desktop.png',
      },
      './assets/recent_works/bg-img.png',
      './assets/recent_works/art.svg',
      './assets/recent_works/data.svg',
      './assets/recent_works/website.svg',
      './assets/popups/snapshootPortfolio.png',
      './assets/popups/snapshootPortfolio.svg',
    ],
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'Ruby on Rails'],
    button: [
      'See project',
      'See live',
      'See source',
    ],
    live: 'https://allenkays.github.io/',
    source: 'https://github.com/allenkays/Portfolio-setup-and-mobile-first',
  },
];

let isDesktopScreen = window.matchMedia('(min-width: 768px)').matches;

function createArticleRecentWork(
  name, description, { featuredImageMobile, featuredImageDesktop }, technologies,
) {
  const article = document.createElement('article');
  article.setAttribute('class', 'recent-work');

  const divMostRecent = document.createElement('div');
  divMostRecent.setAttribute('class', 'most-recent');

  const h2Title = document.createElement('h2');
  h2Title.setAttribute('class', 'title');
  const spanTitle = document.createElement('span');
  spanTitle.textContent = name;
  h2Title.appendChild(spanTitle);

  const hrCustom = document.createElement('hr');
  hrCustom.setAttribute('class', 'custom-hr');

  divMostRecent.appendChild(h2Title);
  divMostRecent.appendChild(hrCustom);

  const divRecentProjects = document.createElement('div');
  divRecentProjects.setAttribute('class', 'recent-projects');
  divRecentProjects.setAttribute('id', 'recent-projects');

  const divRecentProjectsImg = document.createElement('div');
  divRecentProjectsImg.setAttribute('class', 'recent-projects-img');

  const imgMobile = document.createElement('img');
  imgMobile.setAttribute('class', 'recent-projects-mobile-img');
  imgMobile.setAttribute('src', featuredImageMobile);
  imgMobile.setAttribute('alt', 'Home-Image');

  const imgDesktop = document.createElement('img');
  imgDesktop.setAttribute('class', 'recent-projects-desktop-img');
  imgDesktop.setAttribute('src', featuredImageDesktop);
  imgDesktop.setAttribute('alt', 'Homepage-image');

  divRecentProjectsImg.appendChild(imgMobile);
  divRecentProjectsImg.appendChild(imgDesktop);

  const divStories = document.createElement('div');
  divStories.setAttribute('class', 'stories');
  divStories.setAttribute('id', 'stories');

  const h3STitle = document.createElement('h3');
  h3STitle.setAttribute('class', 's-title');
  h3STitle.textContent = name;

  const pParagraph = document.createElement('p');
  pParagraph.setAttribute('class', 'paragraph');
  pParagraph.textContent = description;

  const ulStack = document.createElement('ul');
  ulStack.setAttribute('class', 'stack');

  technologies.forEach((tech) => {
    const li = document.createElement('li');
    const buttonElem = document.createElement('button');
    buttonElem.setAttribute('class', `${tech.toLowerCase()}-c`);
    buttonElem.setAttribute('type', 'button');
    buttonElem.textContent = tech;
    li.appendChild(buttonElem);
    ulStack.appendChild(li);
  });

  const buttonSeeProject = document.createElement('button');
  buttonSeeProject.setAttribute('class', 's-button');
  buttonSeeProject.setAttribute('type', 'button');
  buttonSeeProject.textContent = 'See project';

  divStories.appendChild(h3STitle);
  divStories.appendChild(pParagraph);
  divStories.appendChild(ulStack);
  divStories.appendChild(buttonSeeProject);

  divRecentProjects.appendChild(divRecentProjectsImg);
  divRecentProjects.appendChild(divStories);

  article.appendChild(divMostRecent);
  article.appendChild(divRecentProjects);

  return article;
}

function createArticleArtData(name, description, img, technologies, buttonText) {
  const articleArtData = document.createElement('article');
  articleArtData.setAttribute('class', 'art-data');

  const imgBg = document.createElement('img');
  imgBg.setAttribute('class', 'bg-img2');
  imgBg.setAttribute('src', img);
  imgBg.setAttribute('alt', 'background-image');

  const divOverlayContent = document.createElement('div');
  divOverlayContent.setAttribute('class', 'overlay-content');

  const h3TitlePost = document.createElement('h3');
  h3TitlePost.setAttribute('class', 'title-post');
  h3TitlePost.textContent = name;

  const pDescription = document.createElement('p');
  pDescription.setAttribute('class', 'description');
  pDescription.textContent = description;

  const ulStack2 = document.createElement('ul');
  ulStack2.setAttribute('class', 'stack-2');

  technologies.forEach((tech) => {
    const li = document.createElement('li');
    const buttonElem = document.createElement('button');
    buttonElem.setAttribute('class', tech.toLowerCase());
    buttonElem.setAttribute('type', 'button');
    buttonElem.textContent = tech;
    li.appendChild(buttonElem);
    ulStack2.appendChild(li);
  });

  const buttonSeeProject = document.createElement('button');
  buttonSeeProject.setAttribute('class', 'b-button');
  buttonSeeProject.setAttribute('type', 'button');
  buttonSeeProject.textContent = buttonText;

  divOverlayContent.appendChild(h3TitlePost);
  divOverlayContent.appendChild(pDescription);
  divOverlayContent.appendChild(ulStack2);
  divOverlayContent.appendChild(buttonSeeProject);

  articleArtData.appendChild(imgBg);
  articleArtData.appendChild(divOverlayContent);

  return articleArtData;
}

function createArticleSamples(names, descriptions, featuredImages, technologies, buttons) {
  const article = document.createElement('article');
  article.setAttribute('class', 'samples');
  article.setAttribute('id', 'samples');

  // Function to update the isDesktopScreen variable based on the screen width
  function updateIsDesktopScreen() {
    isDesktopScreen = window.matchMedia('(min-width: 768px)').matches;

    // Remove existing content from the samples section
    article.innerHTML = '';

    // Duplicate the art-data section six times
    Array(isDesktopScreen ? 2 : 6)
      .fill(null)
      .forEach(() => {
        const imagesForIteration = isDesktopScreen
          ? featuredImages.slice(1, 4) // For desktop screens, use images from index 1 to 4
          : [featuredImages[0]]; // For mobile screens, use the second image (index 1)

        imagesForIteration.forEach((img, index) => {
          // Use technologies[1:4] in the popup window (not yet implemented)
          const techArray = technologies.slice(1, 4);

          const articleArtData = createArticleArtData(
            names[isDesktopScreen ? 1 + index : 1],
            descriptions[0],
            img,
            techArray,
            buttons[0],
          );

          article.appendChild(articleArtData);
        });
      });
  }

  // Call the function once to initialize isDesktopScreen
  updateIsDesktopScreen();

  // Listen for the resize event on the window and update isDesktopScreen accordingly
  window.addEventListener('resize', updateIsDesktopScreen);

  return article;
}

function createProjectsSection() {
  const projectsDiv = document.getElementById('projects-container');

  const section = document.createElement('section');
  section.setAttribute('class', 'portfolio');

  const {
    name,
    description,
    featuredImage,
    technologies,
    button,
  } = projectsData[0]; // Use object destructuring instead of array destructuring

  const articleRecentWork = createArticleRecentWork(
    name[0], description[0], featuredImage[0], technologies.slice(0, 4),
  );
  const articleSamples = createArticleSamples(
    name.slice(1), description.slice(1), featuredImage.slice(1), technologies, button,
  );

  section.appendChild(articleRecentWork);
  section.appendChild(articleSamples);

  projectsDiv.appendChild(section);
}

// Call the function to create the projects section
createProjectsSection();