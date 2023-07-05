<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 [Hello Microverse] <a name="about-project"></a>

**[Hello Microverse]** is a project that focuses on introducing Github flows and linters. This is a guide for the installation and use of linters in html and css

## 🛠 Built With <a name="built-with"></a>
Linters installation and test on html5 and css

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>html</summary>
</details>

<details>
  <summary>css</summary>
</details>

### Key Features <a name="key-features"></a>

- **[html5 page]**
- **[css page]**
- **[node js]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"><a/>

To get a local copy up and running, follow these steps:

- Create a new GitHub repo.
- Create a new branch according to the GitHub flow rules.
- Add a .gitignore file.
- Add node_modules to gitignore file.

### Install <a name="install"></a>

Install nodejs via nvm

- Set up a linter for HTML and CSS and make sure that any files that are not relevant are ignored by git.
Please do the following steps in this order:

    - In the first commit of your feature branch create a .github/workflows folder and add a copy of .github/workflows/linters.yml to that folder.
        - Remember to use the file linked above
        - Remember that .github folder starts with a dot.
    - Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.
        - If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
    - When you open your first pull request you should see the result of the GitHub actions checks:

#### Webhint

A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

NOTE: If you are running on Windows, you need to initialize npm to create package.json file.

\`npm init -y

- Run

\`npm install --save-dev hint@7.x

- Copy .hintrc to the root directory of your project.
Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.

    - If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.

- Run

\`npx hint .

    Fix validation errors.

#### Stylelint
A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
    - Run

    \`npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x\`

- Copy .stylelintrc.json to the root directory of your project.

- Do not make any changes in config files - they represent style guidelines that you share with your team.

    - If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.

\`Run npx stylelint "**/*.{css,scss}" on the root of your directory of your project.\`

- Fix linter errors.


### Usage <a name="usage"></a>
- Add 3 files (each one in a separate commit):

	- A .html file that includes a header with the text "Hello Microverse!". Use h1 tag for that.
	- A .css file that includes one class with styles for your header (make it in your favorite color).
	- A test.md file with the text "This file should be ignored by git".

### Run tests <a name="run tests"></a>

 \`sh -c hint .\`
 \`npx stylelint "\*\*/\*.{css,scss}"\`


##: 👥 Authors <a name="authors"></a>


👤 **Author1**

- GitHub: [@allenkays](https://github.com/allenkays)
- Twitter: [@allenkays](https://twitter.com/allenkays)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/allan-sang/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[linters for other stacks]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project can give me a star for this repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Ajrass and May for their immense support

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
