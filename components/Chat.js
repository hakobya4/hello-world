import { StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';
import  {useEffect, useState} from 'react';
import { GiftedChat, Bubble, InputToolbar} from "react-native-gifted-chat";
import { collection,  query, addDoc, onSnapshot, orderBy  } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView from 'react-native-maps';
import CustomActions from './CustomActions';

const Chat = ({route, navigation, db, isConnected, storage}) => {
  const { name, chatsColor, userID } = route.params;
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }
  {/* changes the bubble message color of the chat */}
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }
  
  const renderInputToolbar = (props) => {
    if (isConnected) {
      return <InputToolbar {...props}/>
    } else {
      return null ;
    }
  }

  let unsubMessages;
  useEffect(() => {
    if (isConnected === true) {
      // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
      navigation.setOptions({ title: name });
      //orders the messages in the database by the creation date
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      //runs update after the messages has been sent
      unsubMessages = onSnapshot(q, async(documentsSnapshot) => {
        let newMessages = [];
        documentsSnapshot.forEach(doc => {
          newMessages.push({ id: doc.id, ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())})
        });
        cacheMessages(newMessages)
        setMessages(newMessages);
      })
    } else loadCachedMessages();
    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    }
    //update the permissions which depends on the connection
  }, [isConnected]);

  //adds messages to an async cache which will be shown when offline
  const cacheMessages = async(messagesToCache) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  }
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("messages") || [];
    setMessages(JSON.parse(cachedMessages));
  }
    
  const renderCustomActions = (props) => {
    return <CustomActions storage={storage} userID={userID} {...props} />;
  };

  const renderCustomView = (props) => {
    const { currentMessage} = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{
            width: 150,
            height: 100,
            borderRadius: 13,
            margin: 3}}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  }
  return (
    <View style={[styles.container, {backgroundColor:chatsColor}]}>
    <GiftedChat
      renderActions={renderCustomActions}
      renderCustomView={renderCustomView}
      messages={messages}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      onSend={messages => onSend(messages)}
      user={{
        _id: userID,
        name
      }} 
    /> 
    {/* makes it so that when the keyboard is open user can see what they are typing */}
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    { Platform.OS === 'iOS' ? <KeyboardAvoidingView behavior="height" /> : null }
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
 }
});

export default Chat;