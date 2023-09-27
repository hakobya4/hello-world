import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import  {useState} from 'react';
import Orange from '../assets/Orange.jpg'
import Blue from '../assets/Blue.jpg'
import Multi from '../assets/Multi.jpg'
import Pink from '../assets/Pink.jpg'

const chatColorsOrange = {
    light_orange: '#FFA500',
    pink: '#FFC0CB',
    blue: '#1338BE',
    red: '#880C25',
  };
  
const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  // sets the initial state of the start background image to the orange version
  const [wallpaper, setWallpaper] = useState(Orange)
  // sets the initial state of the chat's background color to orange
  const[chatsColor, setChatsColor] = useState(chatColorsOrange.light_orange)
  


  return (
    <View style={styles.container}>
      {/* adds a background image to the app, source is set by setWallpaper function */}
      <ImageBackground source={wallpaper} resizeMode="cover" style={styles.container}>
        <View style={styles.titlecon}>
          <Text style={styles.title}>Zest Friends</Text>
        </View>
        <View style={styles.body}>
        <TextInput
          style={[styles.textInput, styles.choose] }
          value={name}
          onChangeText={setName}
          placeholder='Your Name'
        />
        <Text style={[styles.choose, {alignSelf: 'flex-start'}]}>Choose Background:</Text>
        {/* adds 4 different pseudo buttons to change the background image by calling setWallpaper function */}
        <View style={ styles.colorContainer}>
          <TouchableOpacity onPress={() => setWallpaper(Orange)}>
            <Image
              style={styles.color}
                source={Orange}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWallpaper(Pink)}>
            <Image
            style={styles.color}
            source={Pink}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWallpaper(Blue)}>
            <Image
            style={styles.color}
            source={Blue}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWallpaper(Multi)}>
            <Image
            style={[styles.color]}
            source={Multi}/>
          </TouchableOpacity>
        </View>
        <Text style={[styles.choose, {alignSelf: 'flex-start'}]}>Choose Chat Background Color:</Text>
         {/* adds 4 different pseudo buttons to change the background color of chat by calling setChatsColor function */}
        <View style={ styles.colorContainer}>
          <TouchableOpacity
            style={ [styles.color, chatsColor === chatColorsOrange.light_orange && 
              /*adds a border arround buttons to show picked */ styles.colorPick, {backgroundColor: chatColorsOrange.light_orange}]}
            onPress={() => setChatsColor(chatColorsOrange.light_orange)}>
          </TouchableOpacity>
          <TouchableOpacity
            style={ [styles.color, chatsColor === chatColorsOrange.pink && styles.colorPick,  {backgroundColor: chatColorsOrange.pink}]}
            onPress={() => setChatsColor(chatColorsOrange.pink)}>
          </TouchableOpacity>
          <TouchableOpacity
            style={ [styles.color, chatsColor === chatColorsOrange.blue && styles.colorPick,  {backgroundColor: chatColorsOrange.blue}]}
              onPress={() => setChatsColor(chatColorsOrange.blue)}>
          </TouchableOpacity>
          <TouchableOpacity
            style={ [styles.color, chatsColor === chatColorsOrange.red && styles.colorPick,  {backgroundColor: chatColorsOrange.red}]}
              onPress={() => setChatsColor(chatColorsOrange.red)}>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={ styles.button}
           /* adds a button to switch to chat screen sending the chat screen color and the name inputed to the chat screen */
          onPress={() => navigation.navigate('Chat', { name: name, chatsColor:chatsColor})}>
            <Text style={{ fontSize:16, color: '#FFFFFF', fontWeight:'600',}}>Start Chatting</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   alignItems: 'center',
   width:'100%',
   flexGrow: 1,
 },
 titlecon:{
  marginBottom:150
 },
 title: {
    backgroundColor:'#FFA500',
    fontSize: 45,
    fontWeight: '600',
    color: '#fff',
    marginTop: 100,
    paddingHorizontal:50
 },
 body:{
  backgroundColor: '#FFFFFF',
  marginBottom:30,
  width: 350,
  padding: 20,
  position: 'fixed',
 },
 choose:{
    fontSize: 16, 
    fontWeight: '300', 
    color: '#757083',
    marginTop: 20

 },
 colorContainer:{
  flexDirection: "row",
  marginVertical: 10,
 },
 color:{
  width: 50,
  height: 50,
  borderRadius: 25,
  marginHorizontal:10
 },
 colorPick:{
  borderWidth: 4,
  borderColor: '#000',
 },
 textInput: {
    opacity: 0.5,
    width: '100%',
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#D3D3D3'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFA500',
    paddingTop: 15,
    paddingBottom:15
  },
});

export default Start;