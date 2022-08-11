import * as React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const reg = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      
      <Text style={styles.name}>BOOK READER</Text>
      <Text style={styles.first}>Register here!</Text>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="UserName"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      
      <Button style={styles.registerBtn}  onPress = {()=>navigation.navigate('login')}
        title = 'REGISTER'>
      </Button>
      
    </View>
  )
}
export default reg

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#f5bcdf',
  },
 
  inputView: {
    backgroundColor: "#95cce6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1482b5",
  },
  first:{
    color:'#003f5c',
    textAlign:'center',
    fontSize:25,
    marginBottom:50,
    paddingTop:20,

  },
  name:{
    color:'#003f5c',
    textAlign:'center',
    fontSize:34,
    marginBottom:20,
    paddingTop:10,
  }
});
