
import * as React from 'react';
import { StyleSheet, Text, View , Image , Button,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const booklist = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.container}>
     <View style={styles.container}>
        <Text style={{paddingTop:30, color:"#723182",fontSize:25, paddingBottom:30}}>
          Hello Readers! Here are some books you might prefer!
        </Text>
        
        <Text style={{paddingBottom:20, fontSize:20}}>What Would You Like To Read?</Text>
        
  <View style={styles.book}>
<SafeAreaView style={styles.safeView}>
  <ScrollView style={styles.scrollView}>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}} onPress = {()=>navigation.navigate('bookinfo')}>
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
    The fault in our stars by John Green
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}}>
    <Text style={{fontSize:20, color:'#3c3d3b'}}>
    The little prince by Antoine de Saint-Exupére
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink',padding:10 }} >
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
    Mother by Moxim Gorky
    </Text>
   
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10,backgroundColor:'pink' ,padding:10}}>
    <Text  style={{fontSize:20, color:'#3c3d3b'}}>
    Jane Eyre by Charlotte Brontë
    </Text>
   
</TouchableOpacity>
<TouchableOpacity style={{ height: 50, marginTop: 10 ,backgroundColor:'pink',padding:10}}>
    <Text style={{fontSize:20, color:'#3c3d3b'}}>
    Midnight's Children by Salman Rushdie
    </Text>
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
    
</View>
</View>
</View>
</View>
  )
}
export default booklist

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ADD8E6',

  },
});

