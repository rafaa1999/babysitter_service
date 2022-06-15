import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

function RegisterSitter({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSignedIn,setIsSignedIn]= useState(false);
    const register=async()=>{
        try{

                const user= await createUserWithEmailAndPassword(auth,email,password)
                .then(navigation.navigate('sitterHome'))
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
                marginTop:'2%',
        
        }}>
            <Text>Looking to become a care ? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                <Text style={{ 
                    fontWeight:'bold',
                    color:'#3CBAB8'
                }}>SIGN UP AS A parent</Text>
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
                    Sitters, create your account
                </Text>

                <View style={{ 
                    flexDirection:'row', justifyContent:'center'}}>
                <Text style={{ 
                        textAlign:'center'
                }}>
                    Already have an account ?   
                </Text>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('loginSitter')}
                >
                    <Text style={{ 
                        fontWeight:'bold',
                        color:'#3CBAB8'
                    }}> LOG IN</Text>
                </TouchableOpacity>

                </View>

                </View>


                
                    <View style={{
                            flexDirection:'row',
                            justifyContent:'space-around'
                    }}>

                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            width:'45%'
                            
                        }}>

                        <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#003f5c"
                    
                        style={{ 
                            padding:'2%',
                            

                        }}
                                />

                        </View>

                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            width:'45%'
                        
                        }}>

                        <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>


                    </View>

                    <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                        }}>

                        <TextInput
                        placeholder="Email address"
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
                            marginRight:'2%'
                        }}>

                        <TextInput
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={newText => setPassword(newText)}
                        secureTextEntry={true}
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>

                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-around'
                    }}>

                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            width:'45%'
                        }}>

                        <TextInput
                        placeholder="Permanent address"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>

                        <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            width:'45%'
                        
                        }}>

                        <TextInput
                        placeholder="Zip"
                        placeholderTextColor="#003f5c"
                        style={{ 
                            padding:'3%'       

                        }}
                                />

                        </View>


                    </View>

                    <View style={{ 
                            borderColor:'#eee',
                            borderWidth:1,
                            marginLeft:'2%',
                            marginRight:'2%'
                            
                        }}>
                            
                        <TextInput
                        placeholder="10-digit mobile number"
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
                            
                    }}>I agree to the <Text style={{ color:'blue' }}>Terms of Use</Text>.For detalis on collection and use of your information, see our <Text style={{ color:'blue' }}>Privacy Policy</Text>. </Text>
                        </View>

                    
                    
                    
                    

                                                    
                        



                                            

            </View>
                    
                
                {/* buttom for continuz */}
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
                        }}>Sign UP</Text>
                    </TouchableOpacity>
                    {/* buttom for continuz */}
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

export default RegisterSitter