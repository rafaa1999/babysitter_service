import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { async } from '@firebase/util';

function HomeParent() {
    return (
        <View style={{ 
            backgroundColor:'white',
            flex:1
        }}>
            <Text>doing all right</Text>
        </View>
    )
}

export default HomeParent