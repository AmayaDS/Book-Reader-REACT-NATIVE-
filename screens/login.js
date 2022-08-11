import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {useNavigation} from '@react-navigation/native';



import {
  
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
  
  const login = () => {

    const navigation = useNavigation();
    return (
    <View style={styles.container}>
      
      <Text style={styles.head}>BOOK READER</Text>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
        
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password." 
          placeholderTextColor="#003f5c"
          
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button
      onPress = {()=>navigation.navigate('bookcat')}
        title='LOGIN'
      />
    </View>
  )
}
export default login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5bcdf",
    alignItems: "center",
    justifyContent: "center",
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1482b5",
  },
  head:{
    color:"#145e80",
    alignContent:"center",
    fontSize:30,
    paddingBottom:40,
  }
});
