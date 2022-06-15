import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Login from './components/Login';
import Acueil from './components/Acueil';
// import Home from './components/Home';
import Register from './components/Register';
import Entrence from './components/Entrence';
import LoginParent from './components/LoginParent';
import RegisterSitter from './components/RegisterSitter';
import LoginSitter from './components/LoginSitter';
import ResetpassSitter from './components/ResetpassSitter';
import ResetpassParent from './components/ResetpassParent';
import Terms from './screen/Terms';
import HomeParent from './components/HomeParent';
import HomeSitter from './components/HomeSitter';
import SitterHome from './screen/SitterHome';
import ParentHome from './screen/ParentHome';

const Stack=createStackNavigator();
//les importations completes for all the carte de base ba
//determination de all the right application de base complete for all 

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='sitterHome' component={SitterHome} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='homeSitter' component={HomeSitter} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='registerSitter' component={RegisterSitter} options={{
          title: "",
          
          // Center the header title on Android
          headerTitleAlign: "center",
        }}/>
          <Stack.Screen name='resetpassSitter' component={ResetpassSitter} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='acueil' component={Acueil} options={{headerShown: false}}/>
          <Stack.Screen name='parentHome' component={ParentHome} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='loginSitter' component={LoginSitter} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
        
          <Stack.Screen name='homeParent' component={HomeParent} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='loginParent' component={LoginParent} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='register' component={Register} options={{
            title: "",
            
            // Center the header title on Android
            headerTitleAlign: "center",
          }} />
        <Stack.Screen name='terms' component={Terms} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='resetpassParent' component={ResetpassParent} options={{
            title:"SitterGarden",
            headerTitleAlign: "center",
            
          }}/>
          <Stack.Screen name='entrence' component={Entrence} options={{
            

            // Center the header title on Android
            
            headerTitle: () => (
              <Image style={{ width: 50, height: 50,borderRadius:20 }} source={require('./assets/babysit.png')} />
            ),
            headerStyle: {
              backgroundColor: '#eee',
            },
          }}  />
        {/* <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='home' component={Home} options={{headerShown: false}}/> */}
        </Stack.Navigator>
      </NavigationContainer>

  );
}


