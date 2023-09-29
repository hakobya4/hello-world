import { StyleSheet, Alert} from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork} from "firebase/firestore";
import { useNetInfo }from '@react-native-community/netinfo';
import { useEffect } from "react";
import { getStorage } from "firebase/storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();
  const firebaseConfig = {
    apiKey: "AIzaSyDaD8y-15bTpCbSAWj2dnCRk5dRDjTL2MA",
    authDomain: "zest-fried.firebaseapp.com",
    projectId: "zest-fried",
    storageBucket: "zest-fried.appspot.com",
    messagingSenderId: "216035639843",
    appId: "1:216035639843:web:d1b78b77dd3ae14b812796"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);


   useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat 
          isConnected={connectionStatus.isConnected} 
          storage={storage} 
          db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});

export default App;