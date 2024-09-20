import React from 'react'
import {View, Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


export default function Cadeau () {
  return (
    <ScrollView style={{backgroundColor:'#D2E9E9'}}>
        <View style={styles.back}>
          <Link href="/" ><Text><AntDesign name="arrowleft" size={24} color="black" /></Text></Link>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontSize:20}}>Total Gagné</Text>
          <Text style={{fontWeight:800,fontSize:20}}>0F</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.box}>
            <FontAwesome6 name="box" size={24} color="black" />
            <Text style={{marginLeft:10}}>Tenter de gagner jusqu'à  1 000 000 F</Text>
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
  marginTop:20,
  width:'100%',
  backgroundColor:'white',
  height:800,
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  alignItems:'center',

},
box: {
  width:'80%',
  height:70,
  backgroundColor:'#50D890',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginTop:50,
  borderRadius:20,
}
})