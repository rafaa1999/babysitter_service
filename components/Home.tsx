// import React from 'react';
// import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SecondHome from '../screen/SecondHome';
// import SignupParents from '../screen/SignupParents';
// import SignupSitter from '../screen/SignupSitter';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

// const Tab=createBottomTabNavigator();
// //for all the best idea doing the right
//     function Home() {
//     return (

        
//         <Tab.Navigator initialRouteName='secondHome'
        
//         screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
    
//                 if (route.name === 'secondHome') {
//                     iconName = focused
//                     ? 'home'
//                     : 'home-outline';
//                 } else if (route.name === 'signupParents') {
//                     iconName = focused ? 'mail' : 'mail-outline';
//                 } else if (route.name === 'signupSitter') {
//                     iconName = focused ? 'person-circle' : 'person-circle-outline';
//                 }
                
    
//                 // You can return any component that you like here!
//                 return <Ionicons name={iconName} size={24} color="black" />;
//                 },
//                 tabBarActiveTintColor: 'tomato',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//             tabBarOptions={{
//                         activeTintColor: 'black',
//                         inactiveTintColor: 'black',
//                         showLabel:false

//             }}
//         >
//         <Tab.Screen name='secondHome' component={SecondHome} options={{headerShown: false,
//                     tabBarLabel:'Home'
//         }}/>
//         <Tab.Screen name='signupParents' component={SignupParents} options={{headerShown: false,
//             tabBarLabel:'Parents',
            
//         }}/>
//         <Tab.Screen name='signupSitter' component={SignupSitter} options={{headerShown: false,
//                     tabBarLabel:'Sitter'
//             }}/>
//         </Tab.Navigator>

//     )
//     }

//     export default Home