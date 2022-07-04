# Project Title
Calculator App

## Demo link:
Access my site at [abhishekpanwar.netlify.app]
- You can download APK file for this app form given below link:
- 

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Software Prerequisites](#software-prerequisites)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App
[react-native-calculator] is an app that perform office & daily use mathematics operations.

## Screenshots

Picture by [abhishekpanwarrr](![calculator-app](https://user-images.githubusercontent.com/40629087/177134748-ac38c059-26f7-43a7-8681-973ecccdfd06.jpeg)

## Technologies
I used `html`, `css`, ...

### Software prerequisites

Install the below tools/packages

| Serial No   | Software           | Version   | Installation site |
| :---------: | :----------------: | :-------: | :---------------- |
| 1           | Node.js            | >= 6.9.1  | [Install NodeJS](https://nodejs.org/en/download/) |
| 2           | npm                | >= 3.10.8 | [Install NPM](https://www.npmjs.com/get-npm)      |
| 3           | react-native       | >= 0.51.0 | [Install react-native](https://www.npmjs.com/package/react-native) |
| 4           | react-native-cli   | >= 2.0.1  | [Install react-native-cli](https://www.npmjs.com/package/react-native-cli) |
| 5           | exp                | >= 47.1.1 | [Install Expo](https://www.npmjs.com/package/exp) |


### Setup Instructions

#### System setup
1. Clone the repo with `git clone [REPO_URL]` command
2. Switch to the project's root directory in terminal
3. Install the dependencies by running `npm install`
4. Once, 'npm install' is completed, run `exp start` to start the expo and react-native server
5. If it shows a QR code on the terminal as a result of 'exp start' command, then you are good to go!

you can write your env specific config variables on `.env` file and import them from `react-native-dotenv` package as mentioned [here](https://github.com/zetachang/react-native-dotenv#usage).

Ignore the first step on 'Mobile setup' instructions given below if you already have 'Expo' app installed on your phone.

#### Mobile setup
1. Install 'Expo' application on your android/iOS device. You can find the links to Android and iOS apps [here](https://expo.io/tools#client).
2. Scan the QR code shown on the terminal.
3. Once the QR code is successfully scanned, it will take few seconds to load and render the app.

#### Linter git-hook setup
1. Switch to the project's root directory in terminal
2. Run the following command to copy the git hook from 'git-hooks' to '.git/hooks' directory
  `cp git-hooks/pre-commit .git/hooks/`
3. Run the following command to make the hook executable.
  `chmod +x .git/hooks/pre-commit`

## Approach
I adopted the `BEM` naming style for my css class names.

## Status
[calculator] is still in progress. `Version 2` will be out soon.

## Credits
List of contriubutors:
- [abhishekpanwarrr](abhishekpanwar.netlify.app)

## License

No licence required to use this app
