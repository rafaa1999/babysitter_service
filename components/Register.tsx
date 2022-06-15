import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Button,ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AntDesign } from '@expo/vector-icons';
import LoginParent from './LoginParent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const Stack=createStackNavigator();
function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSignedIn,setIsSignedIn]= useState(false);
    const register=async()=>{
        try{

            const user= await createUserWithEmailAndPassword(auth,email,password)
            .then(navigation.navigate('parentHome'))
            console.log(user);
        }catch(err){
            console.log(err)
        }
    
    }

    return (
        <ScrollView>
        <View style={{ 
                flex:1
        }}>
            <View style={{ 
                    flexDirection:'row',
                    justifyContent:'center',
                    marginTop:'2%'
            
            }}>
                <Text>Looking to become a sitter ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('registerSitter')}>
                    <Text style={{ 
                        fontWeight:'bold',
                        color:'#3CBAB8'
                    }}>SIGN UP AS A SITTER</Text>
                </TouchableOpacity>
            </View>
                <View style={{ 
                    flex:1,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    shadowColor: '#171717',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    height:'100%',
                    width:'90%',
                    marginBottom:'8%',
                    marginTop:'5%',
                    marginLeft:'5%',
                    // marginRight:'5%'
                    justifyContent:'space-evenly'
                    
                    
                    
                    
                
                
                }}>
                    <View>
                    <Text style={{ 
                        fontWeight:'750',
                        fontSize:25,
                        textAlign:'center'
                    }}>
                        Welcome parents
                    </Text>

                    <View style={{ 
                        flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{ 
                            textAlign:'center'
                    }}>
                        Already have an account ?   
                    </Text>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('loginParent')}
                    >
                        <Text style={{ 
                            fontWeight:'bold',
                            color:'#3CBAB8'
                        }}> LOG IN</Text>
                    </TouchableOpacity>

                    </View>

                    </View>


                    <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                        
                        }}>

                        <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>


                            <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                        
                        }}>

                        <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>


                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                        
                        }}>

                        <TextInput
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={newText => setEmail(newText)}
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>

                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%',
                        
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
                                    marginTop:'2%'
                        }} />
                        
                        </View> 
                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                        
                        }}>

                        <TextInput
                        placeholder="ZIP code"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>   
                        <View style={{ 
                            flexDirection:'row',
                            marginLeft:'2%',
                            marginTop:'2%'
                        }}>
                    
                    <Text style={{ 
                            textAlign:'center',
                            marginLeft:'1%',
                            color:'#84847E',
                            fontWeight:'350'
                            
                    }}>I agree to the <TouchableOpacity onPress={()=>navigation.navigate('terms')}><Text style={{ color:'blue' }}>Terms of Use</Text></TouchableOpacity>.For detalis on collection and use of your information, see our <TouchableOpacity><Text style={{ color:'blue' }}>Privacy Policy</Text></TouchableOpacity> . </Text>
                        </View>

                    

                </View>

                        <TouchableOpacity 
                                onPress={register}
                                style={{ 
                                marginBottom:'5%',
                                borderRadius:8,
                                backgroundColor:'#3CBAB8',
                                paddingHorizontal:'25%',
                                paddingVertical:'3%',
                                marginLeft:'15%',
                                marginRight:'15%'
                        }}>
                            <Text style={{ 
                                textAlign:'center',
                                color:'white',
                                fontWeight:'750'
                            }}>CONTINUE</Text>
                        </TouchableOpacity>
                        <View style={{ 
                                marginLeft:'2%',
                                marginRight:'2%'
                        }}>
                            <Text style={{  textAlign:'center',color:'#84847E',fontWeight:'350',  }}>
                            All users are encouraged to visit our<TouchableOpacity><Text style={{ color:'blue',textAlign:'center' }}>Trust & Safety Center </Text></TouchableOpacity> to learn more about our commitment to keeping you safe.
                            </Text>
                        </View>
                

        </View>
        </ScrollView>
    )
    }

export default Register