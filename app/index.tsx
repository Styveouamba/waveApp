import React,{useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,Button } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';




export default function Index() {

  const [isVisible, setIsVisible] = useState(true);
  const handlePress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>

      
      <Link href="/Setting" style={styles.setting}><Text><Ionicons name="settings-outline" size={24} color="white" style={styles.setting} /></Text></Link>
      
        
        <TouchableOpacity style={styles.Button} onPress={handlePress}>
        {isVisible ? (
          <Text style={styles.buttonText}>18000 F</Text>
        ) : (
          <Text style={styles.buttonText}>........</Text>
        )}
      </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Image source={require('../assets/images/scan.jpg')} style={styles.img} />
        </TouchableOpacity>

        <View style={styles.Icons}>

          <TouchableOpacity style={styles.IconsStyles} >
            <TouchableOpacity style={styles.icons}><FontAwesome6 name="user-large" size={24} color="#23049D" /></TouchableOpacity>
            <Link href={"/Send"}><Text style={styles.text}>Transfert</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconsStyles}>
            <TouchableOpacity style={styles.icons}><Ionicons name="fast-food" size={24} color="#FF5F00" /></TouchableOpacity>
            <Link href={"/Paiement"}><Text style={styles.text}>Paiement</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconsStyles}>
            <TouchableOpacity style={styles.icons}><Entypo name="mobile" size={24} color="#39B5E0" /></TouchableOpacity>
            <Link href={"/Credit"}><Text style={styles.text}>Credit</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconsStyles}>
            <TouchableOpacity style={styles.icons}><MaterialCommunityIcons name="bank" size={24} color="#DD3E3E" /></TouchableOpacity>
            <Link href={"/Banque"}><Text style={styles.text}>Banque</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconsStyles}>
            <TouchableOpacity style={styles.icons}><FontAwesome5 name="box" size={24} color="#A0E418" /></TouchableOpacity>
            <Link href={"/Cadeau"}><Text style={styles.text}>Cadeau</Text></Link>
          </TouchableOpacity>

        </View>

        <View style={styles.bar}></View>

        <View style={styles.historique}>
          <Text style={{fontSize:16,fontWeight: 600}}>Aucun historique</Text>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  card: {
    width: '100%',
    height: '100%',
    marginTop: 350,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  box: {
    width: 270,
    height: 150,
    backgroundColor: '#39B5E0',
    position: 'absolute',
    top: -70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 130,
    height: 120,
  },
  Icons:{
    marginTop:120,
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
  },
  IconsStyles:{
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:50,
    borderRadius:50,
    
  },
  icons:{
    backgroundColor:'white',
    elevation:10,
    width:60,
    height:60,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    
  },
  text: {
    fontSize: 14,
    fontWeight:'600'
  },
  setting:{
    position:'absolute',
    top:-140,
    left:10,
  },
  bar:{
    width:'100%',
    height:10,
    opacity:0.3,
    backgroundColor:'gray',
    marginTop:50
  },
  historique:{
    marginTop:20
  },
  Button:{
    position:'absolute',
    top:-110,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
});
