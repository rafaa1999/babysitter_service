import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";
import { async } from '@firebase/util';

function ResetpassSitter({navigation}) {
    const [email, setEmail] = useState('');
    const forgotPassword = (email) => {

        console.log("reset email sent to " + email);
        sendPasswordResetEmail(auth, email,null)
            .then(() => {
                alert("reset email sent to " + email);
            })
            .catch(function (e) {
                console.log(e);
            });
    };
    return (
        <View style={{ 
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white'
        }}>
            <View style={{ 
            }}>

            <Text style={{
                fontWeight:'500',
                fontSize:25
            }}>Password Rest</Text>
            </View>

            <View style={{ 
                    marginLeft:'2%',
                    marginRight:'2%',
                    marginTop:'2%'
            }}>
                <Text style={{ 
                    textAlign:'center',
                    color:'#84847E'
                }}>Enter the email address for your account and we'll send you instruction to reset your password</Text>
            </View>

            <View style={{ 
                borderColor:'#eee',
                borderWidth:1,
                width:'90%',
                marginTop:'7%'

        }}>

                <TextInput
                    placeholder="e-mail"
                    placeholderTextColor="#5F5F64"
                    onChangeText={newText => setEmail(newText)}
                    style={{ 
                        padding:'3%' ,
                        textAlign:'center'      

                    }}
                            />
        </View>

        <TouchableOpacity 
                onPress={forgotPassword}
                style={{ 
                width:'90%',
                marginTop:'7%',
                backgroundColor:'#96A0A0',
                paddingVertical:'2%',
                borderRadius:10
        }}>
            <Text style={{ 
                textAlign:'center',
                color:'white',
                fontWeight:'500',
                
            }}>
                RESET PASSWORD
            </Text>
        </TouchableOpacity>

        <View style={{ 
                    marginTop:'7%'
                }}> 
                    <Text style={{ 
                        textAlign:'center',
                        marginBottom:'1%',
                        fontWeight:'350',
                        color:'#84847E'
                    }}>
                        By logging in, you agree to ourTerms of Use  
                    </Text>
                    <Text style={{ 
                        textAlign:'center',
                        marginBottom:'5%',
                    }}>  <Text style={{ fontWeight:'350', color:'#84847E' }}>See our</Text> <TouchableOpacity><Text style={{ color:'blue' }}>Privacy Policy</Text></TouchableOpacity>
                    </Text>
                    
            
                
                    <Text style={{ 
                        textAlign:'center',
                        marginBottom:'1%',
                        
                    }}>
                    <Text style={{ fontWeight:'350', color:'#84847E' }}>Make updates to</Text> <TouchableOpacity><Text style={{ color:'blue' }}>Do Not Sell My Personal Information</Text></TouchableOpacity>
                    </Text>

                
                
                    <Text style={{ 
                        textAlign:'center',
                        fontWeight:'350',
                        fontSize:13,
                        color:'#84847E'
                        
                        
                    }}>
                        @ 2022 SitterGarden Incorporated. All Rights Reserved.
                    </Text>
                </View>

        </View>
    )
}

export default ResetpassSitter