import React from 'react'
import {View, Text,ScrollView,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Banque () {
  return (
    <ScrollView>
        <View style={styles.back}>
                
          <Link href="/" ><Text><AntDesign name="arrowleft" size={24} color="black" /></Text></Link>

          <Text style={{marginLeft:15,fontSize:20,fontWeight:600}}>Lier votre Banque</Text>
        </View>
        <View style={{marginTop:30, marginBottom:20}}>
          

          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/banque.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>ACEP</Text>
              <Text style={{marginLeft:10, fontSize:14,fontWeight:300}}>1% - Le premier depôt mensuel est gratuit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
            <Image source={require('../assets/images/banque.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Banque Atlantique</Text>
              <Text style={{marginLeft:10, fontSize:14,fontWeight:300}}>1% - Le premier depôt mensuel est gratuit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
            <Image source={require('../assets/images/banque.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Banque de l'habitat du senegal</Text>
              <Text style={{marginLeft:10, fontSize:14,fontWeight:300}}>1% - Le premier depôt mensuel est gratuit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
            <Image source={require('../assets/images/banque.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Banque Islamique</Text>
              <Text style={{marginLeft:10, fontSize:14,fontWeight:300}}>1% - Le premier depôt mensuel est gratuit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
            <Image source={require('../assets/images/banque.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Baobab</Text>
              <Text style={{marginLeft:10, fontSize:14,fontWeight:300}}>1% - Le premier depôt mensuel est gratuit</Text>
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
img: {
  width: 35,
  height: 35,
  
},
one:{
  flexDirection:'row',
  alignItems:'center',
  margin:10
}
})