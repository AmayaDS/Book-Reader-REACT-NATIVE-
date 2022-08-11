import * as React from 'react';
import { StyleSheet, Text, View , Image , Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const bookinfo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{paddingTop:30,paddingBottom:10, fontSize:25, padding:60}}>The Fault in Our Stars</Text>
    
    <View style={styles.image}>
      <Image source={{
        uri:"https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
        width:200,
        height:200,
        paddingBottom:50,
      }}
      />
      <Text style={{paddingTop:30,paddingBottom:5, fontSize:16, padding:10}}>The story is narrated by Hazel Grace 
      Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents
       to attend a support group where she subsequently meets and
       falls in love with 17-year-old Augustus Waters, an ex-basketball player, amputee, and survivor of 
       osteosarcoma.</Text>
      <Button
        color='#b51f8a'
        title="READ NOW"
      />
  </View>
  </View>
  )
}
export default bookinfo

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ADD8E6',

  },

image:{
  paddingLeft:25,
  paddingTop:0,
  justifyContent:'center',
  alignItems:'center',
  marginTop:0.1,
},

});

