import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { db } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { async } from '@firebase/util';
import { collection, addDoc,getDocs,doc, setDoc } from "firebase/firestore"; 


function HomeSitter() {
    
    const getdate=async()=>{

        const col=collection(db,'sitters');
        const snap=await getDocs(col);
        const list=snap.docs.map(doc=>doc.data());

        console.log(list); 
    }
    const adddate=async()=>{

        await setDoc(doc(db, "sitters", "Random_Doc"), {
            last_name: "raed",
            
        }); 
    }
    return (
        <ScrollView style={{ 
            backgroundColor:'white',
            flex:1
        }}>
            <View >
            <TouchableOpacity onPress={getdate}>
                <Text>get</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={adddate}>
                <Text>add</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeSitter