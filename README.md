https://github.com/mateusdotcc/CSTV/assets/1136951/1a9f516b-4850-4d65-a324-4d94243f8b68

<h1 align="center">React Native - CSTV</h1>
<p align="center">Expo - Managed Workflow</p>

### App Requirements:

- [x] A working project.
- [x] A README file describing briefly what was implemented (libraries used, any architectural decisions the developer would like to explain), as well as instructions to run the project (iOS OR Android).
- [x] The app must have pull-to-refresh in the main screen to reload the matches list.
- [x] Use Typescript.

### Description:

Was implemented a simple app navigation based on a layout created in Figma.
The app uses PandaScore API to bring a list of CS:GO matches.
Each match card when pressed redirects the user a new screen with details of the match showing the opponents list.

The structure is simple.
I'm using Expo to quickly and easily build the app. 
I like to use the principle called KISS (Keep it simple, stupid!).
So I used the composition pattern to create some components and SWR as a hook to catch the
data from PandaScore API facilitating the refetch and loading status.

"Styled Components" to style the layout and hooks to bring the data from API.

### Getting Started:

```bash
# First, clone this repository:
$ git clone https://github.com/mateusdotcc/CSTV.git

# Access the project folder in the / cmd terminal:
$ cd CSTV 
```

### PandaScore API:

Please first create a free account in [PandaScore](https://app.pandascore.co/signup)
and copy **your access token** to your **.env** file in `PANDA_API_KEY=code_here`

Copy the `.env.example` file and rename to `.env` and paste your access token.

### Run Project: 

```bash
# Minimum Node.js 14LTS or greater installed

# Install the Expo CLI
$ npm install -g expo-cli

# Install the dependencies:
$ npm install

# Open an iPhone/Android simulator phone

# Run the application in development mode:
# check the PandaScore API step above.
$ npx expo start

# Check the terminal commands to run, update, and debug the application using Expo
```

### Technologies:

Project is created with:

- React (18.2.0)
- React Native (0.71.8)
- Expo (48.0.18)
- Expo SplashScreen (0.18.2)
- Expo Image (1.0.1)
- Expo Font (11.1.1)
- React Navigation (6.1.7)
- React Navigation Stack (6.3.17)
- React Native Reanimated (2.14.4)
- React Native SVG (13.4.9)
- Dayjs (1.11.9)
- Axios (1.4.0)
- SWR (2.2.0)
- Styled Components (6.0.2)
- Polished (4.2.2)
- Prettier (3.0.0)
- TypeScript (4.9.4)

### To do: (Optionals)

- [ ] Unit tests
- [x] Code ready to run in iOS
- [x] Code ready to run in Android
- [ ] Pagination support
- [ ] Responsiveness

### Connect with me:

<a href="https://www.linkedin.com/in/mateusdotcc/">
  <img alt="Connect with me" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

### Check out other React Native projects I've worked on:

- [Voz das Comunidades](https://play.google.com/store/apps/details?id=br.com.vozdascomunidades)
