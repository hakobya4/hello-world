import { StyleSheet, View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import  {useEffect, useState} from 'react';
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Chat = ({route, navigation}) => {
    const { name, chatsColor } = route.params;
    const onSend = (newMessages) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))}
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
    const [messages, setMessages] = useState([]);
     useEffect(() => {
    setMessages([
      {
        //Message sent when the user enters the chat
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: 'You have entered the chat',
        createdAt: new Date(),
        // makes the messgae a system message above all other messages
        system: true,
      },
    ]);
  }, []);
    useEffect(() => {
    //puts the name on the tab of the chat screen
    navigation.setOptions({ title: name });
  }, []);
 return (
    
   <View style={[styles.container, {backgroundColor:chatsColor}]}>
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
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