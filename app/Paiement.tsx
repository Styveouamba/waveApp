import React from 'react'
import {View, Text, ScrollView,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default function Paiement () {
  return (
    <ScrollView>
        <View style={styles.back}>
                
                <Link href="/" ><Text><AntDesign name="arrowleft" size={24} color="black" /></Text></Link>

                <Text style={{marginLeft:15,fontSize:20,fontWeight:600}}>Paiements </Text>
        </View>
        <View style={styles.container}>
        <Fontisto name="search" size={24} color="black" />
          <TextInput style={styles.input}
            placeholder='rechercher par nom'
            />
        </View>

        <View style={styles.Icons}>
          <TouchableOpacity style={styles.IconsStyles}>
              <TouchableOpacity ><FontAwesome6 name="lightbulb" size={24} color="orange" /></TouchableOpacity>
              <Text style={styles.text}>Facture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconsStyles}>
              <TouchableOpacity><MaterialIcons name="fastfood" size={24} color="#E57C23" /></TouchableOpacity>
              <Text style={styles.text}>Restauration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconsStyles}>
              <TouchableOpacity ><FontAwesome6 name="bag-shopping" size={24} color="blue" /></TouchableOpacity>
              <Text style={styles.text}>Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconsStyles}>
              <TouchableOpacity ><FontAwesome6 name="umbrella-beach" size={24} color="#19A7CE" /></TouchableOpacity>
              <Text style={styles.text}>Tourisme</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:30, marginBottom:20}}>
          <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Favoris</Text>

          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/canal.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Canal+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/rapidos.jpeg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Rapidos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/seneau.jpeg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Sen'eau</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/Senelec.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Senelec</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.one}>
            <TouchableOpacity>
              <Image source={require('../assets/images/sde.jpg')} style={styles.img} />
            </TouchableOpacity>
            <View>
              <Text style={{marginLeft:10, fontSize:18,fontWeight:600}}>Woyofal</Text>
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
Icons:{
  flexDirection:'row',
  justifyContent:'space-around',
  width:'100%',
  marginTop:20
},
IconsStyles:{
  alignItems:'center',
  justifyContent:'center',
  width:80,
  borderRadius:50,
},

text: {
  fontSize: 14,
  fontWeight:'600'
},
container: {
  flexDirection:'row',
  alignItems:'center',
  width:'80%',
  margin:20,
  height:40,
  borderWidth:1,
  borderRadius:10,
  padding:5
},
input: {
  width:'100%',
  height:40,
  borderColor:'blue',
  fontSize:15,
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
