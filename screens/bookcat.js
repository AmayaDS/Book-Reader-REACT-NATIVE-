import * as React from 'react';
import { StyleSheet, Text, View , Image , Button,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const bookcat = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.container}>
        <Text style={{paddingTop:30, color:"#723182",fontSize:25, paddingBottom:30,padding:10}}>
          Hello Readers!
        </Text>
        
        <Text style={{paddingBottom:20, fontSize:20,padding:10}}>What genre do you Prefer?</Text>
  <View style={styles.book}>
<SafeAreaView style={styles.safeView}>
  <ScrollView style={styles.scrollView}>
  <TouchableOpacity style={{ height: 50, marginTop: 10 ,backgroundColor:'pink',padding:10}} >
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
      Adventure
    </Text>
    
  </TouchableOpacity>
  <TouchableOpacity style={{ height: 50, marginTop: 10, backgroundColor:'pink' ,padding:10}} >
      <Text  style={{fontSize:20, color:'#3c3d3b'}}>
        Fantasy
      </Text>
      
  </TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}}  onPress = {()=>navigation.navigate('booklist')}>
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
      Romance
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}}>
    <Text style={{fontSize:20, color:'#3c3d3b'}}>
      Historical
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink',padding:10 }} >
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
    Poetry
    </Text>
   
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}}>
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
    Horror
    </Text>
   
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10 ,backgroundColor:'pink',padding:10}}>
    <Text style={{fontSize:20, color:'#3c3d3b'}}>
    Humor
    </Text>
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
    
</View>
</View>
</View>
  )
}
export default bookcat

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ADD8E6',

  },
});

