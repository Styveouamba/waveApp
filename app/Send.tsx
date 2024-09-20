import React from 'react'
import {View, Text,StyleSheet,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Link } from 'expo-router';

export default function Send () {
    return (
        <ScrollView>
            <View style={styles.back}>
                
                <Link href="/" ><Text><AntDesign name="arrowleft" size={24} color="black" /></Text></Link>

                <Text style={{marginLeft:15,fontSize:20,fontWeight:600}}>Envoyer de l'Argent </Text>
            </View>
            <Text style={{marginLeft:20,fontSize:16,color:'blue'}}>A</Text>
            <View style={styles.container}>
                <TextInput style={styles.input}
                placeholder=''/>
            </View>

            <View style={{margin:10}}>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <Ionicons name="add-circle" size={35} color="blue" />
                    </Text>
                    <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Saisir un nouveau numero</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <MaterialCommunityIcons name="qrcode-scan" size={35} color="blue" />
                    </Text>
                    <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Scanner pour envoyer</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Contact</Text>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <FontAwesome name="user-circle" size={35} color="black" />
                    </Text>
                    <View>
                        <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Awa</Text>
                        <Text style={{marginLeft:10, fontSize:15,fontWeight:300}}>77 677 88 43 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <FontAwesome name="user-circle" size={35} color="black" />
                    </Text>
                    <View>
                        <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Max</Text>
                        <Text style={{marginLeft:10, fontSize:15,fontWeight:300}}>77 537 82 13 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <FontAwesome name="user-circle" size={35} color="black" />
                    </Text>
                    <View>
                        <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Binôme</Text>
                        <Text style={{marginLeft:10, fontSize:15,fontWeight:300}}>77 471 64 34 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one}>
                    <Text>
                        <FontAwesome name="user-circle" size={35} color="black" />
                    </Text>
                    <View>
                        <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Styve</Text>
                        <Text style={{marginLeft:10, fontSize:15,fontWeight:300}}>77 812 00 53 </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    back: { 
        marginTop:40,
        flexDirection:'row',
        alignItems:'center',
        margin:20
    },
    container: {
        alignItems:'center',
        width:'80%',
        margin:20,
        height:40
    },
    input: {
        width:'100%',
        height:40,
        borderBottomWidth:1,
        borderColor:'blue',
        fontSize:20
    },
    one:{
        flexDirection:'row',
        alignItems:'center',
        margin:10
    }
})
