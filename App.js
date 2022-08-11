import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, Image, TextInput, SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Register from './screens/reg';
import Login from './screens/login';
import BookCatogeries from './screens/bookcat';
import BookList from './screens/booklist';
import BookInfo from './screens/bookinfo';



const Stack = createStackNavigator();

const MyStack=()=> {
    
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>

                <Stack.Screen name="reg" component={Register}  />
                <Stack.Screen name="login" component={Login}  />
                <Stack.Screen name="bookcat" component={BookCatogeries} />
                <Stack.Screen name="booklist" component={BookList} />
                <Stack.Screen name="bookinfo" component={BookInfo}  />
                


            </Stack.Navigator>
        </NavigationContainer>
        </View>
    );
};

export default MyStack

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop:0,}
      });
  


