import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProfileParent() {
        return (
            <View style={{ 
                backgroundColor:'white',
                flex:1
            }}>
                <Text>hi</Text>
            </View>
        )
}

export default ProfileParent