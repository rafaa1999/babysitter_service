import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//                     iconName = focused ? 'person-circle' : 'person-circle-outline';
import ProfileSitter from './ProfileSitter';
import SittingSitter from './SittingSitter';
import HomeSitter from '../components/HomeSitter';
const Tab=createBottomTabNavigator();
function SitterHome() {
    return (
    
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'homeSitter') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'profileSitter') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }else if (route.name === 'sittingSitter') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                })}>
            <Tab.Screen name="homeSitter" component={HomeSitter} options={{headerShown: false,
            title:"Home",
            }} />
            <Tab.Screen name="profileSitter" component={ProfileSitter} options={{headerShown: false,
            title:"Profile"
            }} />
            <Tab.Screen name="sittingSitter" component={SittingSitter} options={{headerShown: false,
            title:"Setting"
            }} />
            </Tab.Navigator>


        

    )
    }

export default SitterHome