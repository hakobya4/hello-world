import { StyleSheet, View, Text, Platform, KeyboardAvoidingView, FlatList } from 'react-native';
import  {useEffect, useState} from 'react';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { collection, getDocs, query, addDoc, onSnapshot, orderBy  } from "firebase/firestore";

const Chat = ({route, navigation, db}) => {
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

    useEffect(() => {
      //puts the name on the tab of the chat screen
      navigation.setOptions({ title: name });
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
        let newMessages = [];
        documentsSnapshot.forEach(doc => {
          newMessages.push({ id: doc.id, ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())})
        });
        setMessages(newMessages);
      });
      // Clean up code
      return () => {
        if (unsubMessages) unsubMessages();
      }
    }, []);
  
 return (
    
   <View style={[styles.container, {backgroundColor:chatsColor}]}>
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
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