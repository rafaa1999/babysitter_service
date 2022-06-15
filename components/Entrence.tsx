import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

    function Entrence({navigation}) {
    return (
        <View style={{ 
                    flex:1,
                    
        }}>
            <View style={{ 
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>

            <Image style={{ width: '60%', height:250 ,marginTop:'50%',borderRadius:20 }} source={require('../assets/babysit.png')} />

            </View>
            <View style={{ 
                    // flex:1,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    shadowColor: '#96A0A0',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    height:'30%',
                    width:'90%',
                    marginBottom:'14%',
                    marginTop:'60%',
                    marginLeft:'5%',
                    // marginRight:'5%'
                    justifyContent:'center',
                    // alignItems:'center',

            }}>


                <Text style={{ 
                        fontSize:24,
                        fontWeight:'bold',
                        textAlign:'center',
                        marginLeft:'8%',
                        color:'#0E1313'
                }}>Find your perfect match</Text>


                <View style={{ 
                        flexDirection:'row',
                        marginTop:'5%',
                        justifyContent:'center',
                        marginLeft:'20%'
                        
                }}>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('register')}
                style={{ 
                        marginRight:'5%',
                        borderColor:'#96A0A0',
                        borderWidth:1,
                        paddingHorizontal:'10%',
                        padding:'4%',

                }}>
                    <Text style={{ 
                        fontWeight:'bold',
                        color:'#3CBAB8'
                }}>I'M A PARENT</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>navigation.navigate('registerSitter')}
                        style={{ 
                        marginRight:'25%',
                        borderColor:'#96A0A0',
                        borderWidth:1,
                        paddingHorizontal:'10%',
                        padding:'4%',
                        
                }}>
                    <Text style={{ 
                        fontWeight:'bold',
                        color:'#3CBAB8'
                }}>I'M A SITTER</Text>
                </TouchableOpacity>

                </View>

            </View>
        </View>
    )
    }

export default Entrence