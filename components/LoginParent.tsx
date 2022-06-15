import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { async } from '@firebase/util';
function LoginParent({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSignedIn,setIsSignedIn]= useState(false);
    
    const signInUser=async()=>{

        signInWithEmailAndPassword(auth, email, password)
        .then(navigation.navigate('parentHome'))
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <View style={{ 
                flex:1,
                backgroundColor:'white'
        }}>
            <View style={{ 
                    borderColor:'#eee',
                    borderWidth:1,
                    marginTop:'10%',
                    marginBottom:'10%'

            }}>

                    <TextInput
                        placeholder="e-mail"
                        placeholderTextColor="#5F5F64"
                        onChangeText={newText => setEmail(newText)}
                        style={{ 
                            padding:'3%'       

                        }}
                                />

            </View>
                <TouchableOpacity onPress={()=>navigation.navigate('resetpassParent')}>

                        <Text style={{ 
                            textAlign:'right',
                            marginBottom:'1%',
                            marginRight:'1%',
                            color:'#eee',
                            fontSize:14
                        }}>Forgot password ?</Text>


                </TouchableOpacity>

                <View style={{ 
                borderColor:'#eee',
                borderWidth:1,
                marginBottom:'10%'
                }}>
                    
                        
                        <TextInput
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={newText => setPassword(newText)}
                        style={{ 
                            padding:'3%'       
                            
                        }}
                        
                                />
                                <EvilIcons name="eye" size={24} color="black" style={{
                                    position:'absolute',
                                    marginLeft:'90%',
                                    marginTop:'4%'
                        }} />
                </View>   

                <TouchableOpacity 
                    onPress={signInUser}
                    style={{ 
                    borderRadius:5,
                    backgroundColor:'#96A0A0',
                    paddingVertical:'2%'
                }}>
                    <Text style={{ 
                        textAlign:'center',
                        fontWeight:'650',
                        color:'white'
                    }}>LOG IN</Text>
                </TouchableOpacity>

                {/* partie supplementaire ecrit */}
                <View style={{ 
                        marginTop:'15%'
                }}>
                    <Text style={{ 
                        textAlign:'center',
                        fontWeight:'350',
                        color:'#84847E'
                        
                    }}>Log in with Facebook is no longer available on SitterGarden.</Text>
                    <Text style={{ 
                            textAlign:'center',

                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('resetpassParent')}>

                            <Text style={{ 
                                textAlign:'center',
                                color:'blue'
                            }}> Reset your password </Text>

                        </TouchableOpacity>
                    <Text style={{ 
                        textAlign:'center',
                        fontWeight:'350',
                        color:'#84847E'
                    }}>  to continue</Text>
                    </Text>

                    <View style={{ 
                        marginTop:'5%'
                    }}>
                    <Text style={{ 
                        textAlign:'center',
                        fontWeight:'350',
                        color:'#84847E'
                    }}>Not a member ? </Text>
                    <Text style={{ 
                        textAlign:'center'
                    }}><Text style={{  color:'#84847E' }}>Sign up as a</Text> <TouchableOpacity onPress={()=>navigation.navigate('register')}><Text style={{ color:'blue' }}>Parent</Text></TouchableOpacity> or <TouchableOpacity onPress={()=>navigation.navigate('registerSitter')}><Text style={{ color:'blue' }}>Sitter</Text></TouchableOpacity></Text>
                    </View>
                

                </View>
                 {/* partie supplementaire ecrit */}
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

export default LoginParent