import React from "react";
import {View, Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function Setting(){
    return(
        <ScrollView style={{
            backgroundColor:'#ccc'
        }}>
            <View style={styles.back}>
                
                <Link href="/" ><Text><AntDesign name="arrowleft" size={24} color="black" /></Text></Link>

                <Text style={{marginLeft:15,fontSize:20,fontWeight:600}}>Paramètre </Text>
            </View>

            <View style={styles.share}>
                <Text>Partager</Text>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <AntDesign name="sharealt" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Inviter un ami à rejoindre Wave</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <FontAwesome name="star" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Utiliser le code promotionnel</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.share}>
                <Text>Support</Text>

                <View style={styles.option}>
                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <FontAwesome name="phone" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Contacter le service client</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <Fontisto name="calendar" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>verifier votre plafond</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <Entypo name="location-pin" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Trouvez les agents à proximité</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.share}>
                <Text>Sécurité</Text>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <Entypo name="mobile" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Vos appareils connectés</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <MaterialIcons name="security" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Modifier votre code secret</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.share}>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.one}>
                        <Text>
                            <Ionicons name="exit" size={24} color="black" />
                        </Text>
                        <Text style={{marginLeft:10, fontSize:16,fontWeight:600}}>Deconnexion (77 812 00 53)</Text>
                    </TouchableOpacity>

                    
                </View>
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
    share:{
        margin:12,
    },
    option:{
        width:'100%',
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
        marginTop:6
    },
    one:{
        flexDirection:'row',
        alignItems:'center',
        margin:10
    }

})