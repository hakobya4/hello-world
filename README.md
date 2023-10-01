# ZestFriends

Zest Friends is an app where users can communicate with each other. Built for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.

## Objective
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## Table of Contents
- [Screenshots](#Screenshots)
- [Technical Requirements](#Technical)
- [Dependencies](#Dependencies)
- [Environment](#Environment)
- [Database](#Database)
- [Storage](#Storage)

## Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat. 
- A page displaying the conversation, as well as an input field and submit button. 
- The chat must provide users with two additional communication features: sending images and location data. 
- Data gets stored online and offline.

## Screenshots

<img src ="https://github.com/hakobya4/hello-world/assets/108638724/723d678e-d78e-42de-8472-9d2841554516" width="200" height="400"/>
<img src ="https://github.com/hakobya4/hello-world/assets/108638724/aa7a16fd-ab26-4c8d-a6d2-3e61b42b2320" width="200" height="400"/>
<img src ="https://github.com/hakobya4/hello-world/assets/108638724/1b912482-57b6-4680-bdbe-9b71a3dc0c1f" width="200" height="400"/>

## Technical Requirements
- The app is written in React Native. 
- The app is developed using Expo. 
- Chat conversations are stored in the Google Firestore Database. 
- The app authenticates users anonymously via Google Firebase authentication. 
- Chat conversations are stored locally. 
- The app lets users pick and send images from the phone’s image library. 
- The app lets users take pictures with the device’s camera app, and send them. 
- The app stores images in Firebase Cloud Storage. 
- The app is able to read the user’s location data.
- Location is sent via the chat in a map view. 
- The chat interface and functionality are created using the Gifted Chat library.

## Dependencies
To install the dependencies for this app run npm install after forking the code.
- React Native
- GiftedChat
- Firestore Database
- Firebase Cloud Storage
- AsyncStorage
- Expo
- Expo ImagePicker
- Expo Location

## Environment
- Expo: Create an [Expo account](https://expo.dev/signup) and install Expo CLI using npm install -g expo-cli.
- Run your app using "npm start". Download Expo Go on the OS of your choice to test the app on a mobile phone.
- Android Emulator: download Android Studio for Android emulator for app testing (download the Android version with a Play Store and download Expo Go for testing)
- iOS Simulator: download Xcode and its command terminal, and run "open -a Simulator" to open up the iOS, when you start the app using "npm start" you can press i to download Expo Go automatically

## Database
- Sign-Up and make a new project in [Firebase](https://firebase.google.com/)
- Disable Google Analytics
- Navigate to the build section within the collapsed menu
- Under the Build dropdown build a database
- Navigate to the rules tab of the project and change "allow read, write: if false;" to  "allow read, write: if true;"
- Under the Build dropdown once again create an authentication
- Navigate to the "Sign-in method" tab and make sure anonymous is selected and enabled
- Click on the cog symbol in the Project Overview option in the menu and go to project settings
- Register a web app with a chosen name
- Follow the steps to set up  Firebase configuration in the project

## Storage
- Follow the steps for setting up the [Database](#Database)
- Navigate to the build section within the collapsed menu
- Under the Build dropdown build a storage
- Navigate to the rules tab of the project and change "allow read, write: if false;" to  "allow read, write: if true;"
- Unable to be tested with an Android emulator
