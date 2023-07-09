https://github.com/mateusdotcc/CSTV/assets/1136951/e6d94f71-53e3-4933-803b-fc1721b923f6

<h1 align="center">
  React Native - CSTV
</h1>

<p align="center">Expo - Managed Workflow</p>

### Description:

Was implemented a simple app navigation based on a layout created in Figma.
The app uses PandaScore API to bring a list of CS:GO matches.
Each match card when pressed redirects the user a new screen with details of the match showing the opponents list.

The structure is simple.
I like to use the principle called KISS (Keep it simple, stupid!).
So I used the composition pattern to create some components and SWR as a hook to catch the
data from PandaScore API facilitating the refetch and loading status.

"Styled Components" to style the layout and hooks to bring the data from API.

### Getting Started

```bash
# First, clone this repository:
$ git clone https://github.com/mateusdotcc/CSTV.git

# Access the project folder in the / cmd terminal:
$ cd CSTV 

# Minimum Node.js 14LTS or greater installed

# Install the Expo CLI
$ npm install -g expo-cli

# Install the dependencies:
$ npm install

# Open an iPhone/Android simulator phone

# Run the application in development mode:
$ npx expo start

# Check the terminal commands to run, update, and debug the application
```

### App Requirements:

- [x] A working project.
- [x] A README file describing briefly what was implemented (libraries used, any architectural decisions the developer would like to explain), as well as instructions to run the project (iOS OR Android).
- [x] The app must have pull-to-refresh in the main screen to reload the matches list.
- [x] Use Typescript.

### Technologies:

- Expo
- Expo SplashScreen
- Expo Image
- React Navigation (Stack)
- React Native SVG
- Dayjs
- Axios
- SWR
- Styled Components
- Polished
- Prettier
- TypeScript
- PandaScore API

### To do: (Optionals)

- [ ] Unit tests
- [x] Code ready to run in iOS
- [ ] Code ready to run in Android
- [ ] Pagination support
- [ ] Responsiveness
