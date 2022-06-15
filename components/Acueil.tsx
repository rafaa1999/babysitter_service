import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View,Text, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
function Acueil({navigation}) {
    return (
        <View style={{ 
                backgroundColor:'white',
                flex:1
        }}>
            <Image style={{ 
                    height:'50%',
                    width:'50%',
                    borderRadius:20,
                    margin:'25%'
            }} source={require('../assets/touchi.png')}/>
            {/* second part trust us */}
            <View style={{ 
                    shadowColor: "#eee",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                    flex:1,
                    borderTopEndRadius:20,
                    borderTopRightRadius:20,
                    paddingVertical:'2%'
                    
            }}>
                <Text style={{ 
                        fontSize:25,
                        fontWeight:'770',
                        textAlign:'center',
                        marginBottom:'2%',
                        marginTop:'3%',
                        marginRight:'5%',
                        marginLeft:'5%',
                        
                        
                    
                }}>Meet sitters who love what your kids love</Text>
                <Text style={{ 
                        fontWeight:'250',
                        marginRight:'5%',
                        marginLeft:'5%',
                        textAlign:'center',
                        marginBottom:'2%',
                        opacity: 1,
                }}>If you need someone to watch your kids,Thitter Garden could be the right place for you.</Text>
                <TouchableOpacity 
                            onPress={() => navigation.navigate('entrence')}
                            style={{ 
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            
                            elevation: 5,
                            borderRadius:10,
                            backgroundColor:'#158694',
                            marginRight:'20%',
                            marginLeft:'20%',
                            paddingVertical:'3%',
                            marginTop:'2%'
                }}>
                    <Text style={{ 
                            color:'white',
                            fontWeight:'750',
                            textAlign:'center',
                            fontSize:18,
                    }}>trust us</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
    }

export default Acueil