# ZestFriends

Zest Friends is an app where users can communicate with wach other. Built for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.


## Objective
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat. 
- A page displaying the conversation, as well as an input field and submit button. 
- The chat must provide users with two additional communication features: sending images and location data. 
- Data gets stored online and offline.

## Technical Requirements
- The is written in React Native. 
- The is developed using Expo. 
- Chat conversations are stored in Google Firestore Database. 
- The app authenticates users anonymously via Google Firebase authentication. 
- Chat conversations are stored locally. 
- The app lets users pick and send images from the phone’s image library. 
- The app lets users take pictures with the device’s camera app, and send them. 
- The app stores images in Firebase Cloud Storage. 
- The app is able to read the user’s location data.
- Location is sent via the chat in a map view. 
- The chat interface and functionality is created using the Gifted Chat library.

## Dependencies
- "@react-native-community/masked-view"
- "@react-navigation/native"
- "@react-navigation/native-stack"
- "expo"
- "expo-status-bar"
- "firebase"
- "react"
- "react-native"
- "react-native-gesture-handler"
- "react-native-gifted-chat"
- "react-native-reanimated"
- "react-native-safe-area-context"
- "react-native-screens"
- "react-navigation"
- "@react-native-async-storage/async-storage"
- "@react-native-community/netinfo"
- "expo-image-picker"
- "expo-media-library"
- "expo-location"
- "react-native-maps"

## Environment
- Expo: Create an [Expo account](https://expo.dev/signup) and install Expo CLI using npm install -g expo-cli.
- Run your app using "npm start". Download Expo Go on OS of choice to test the app on a mobile phone.
- Android Emulator: download Android Studio for android emulator for app testing (download the Android version with a Play Store and download Expo Go for testing)
- iOS Simulator: download Xcode and its command terminal, run "open -a Simulator" to open up the iOS, when you start the app using "npm start" you can press i to download Expo Go automatically

## Database
- Sign-Up and make a new project in [Firebase](https://firebase.google.com/)
- Disable Google analytics
- Navigate to the build section within the collapsed menu
- Under the Build dropdown build a database
- Navigate to the rules tab of the project and change "allow read, write: if false;" to  "allow read, write: if true;"
- Under the Build dropdown once again create an authentication
- Navigate to the "Sign-in method" tab make sure anonymous is selected and enabled
- Click on the cog symbol in the Project Overview option in the menu and go to project settings
- Register a web app with a chosen name
- Follow the steps to set up  Firebase configuration in the project

## Storage For Images
- Follow the steps for setting up the [Database](##Database)
- Navigate to the build section within the collapsed menu
- Under the Build dropdown build a storage
- Navigate to the rules tab of the project and change "allow read, write: if false;" to  "allow read, write: if true;"
- Unable to be tested with Android emulator
