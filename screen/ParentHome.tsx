import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeParent from '../components/HomeParent';
import SettingParent from './SettingParent';
import ProfileParent from './ProfileParent';

const Tab=createBottomTabNavigator();
function ParentHome() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'homeParent') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'profileParent') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }else if (route.name === 'settingParent') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}>
        <Tab.Screen name="homeParent" component={HomeParent} options={{headerShown: false,
        title:"Home",
        }} />
        <Tab.Screen name="settingParent" component={SettingParent} options={{headerShown: false,
        title:"Profile"
        }} />
        <Tab.Screen name="profileParent" component={ProfileParent} options={{headerShown: false,
        title:"Setting"
        }} />
        </Tab.Navigator>
    )
}

export default ParentHome