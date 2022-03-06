import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default function Logout({navigation}) {
  return (
    <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
      <Text style={{fontSize:20,fontFamily:"Montserrat_600SemiBold"}}>Apakah Anda Yakin Ingin Logout ?</Text>
      <View style={{flexDirection:"row",padding:10}}>
      <TouchableOpacity onPress={() => {
              const auth = getAuth();
              signOut(auth);
            }} >
      <Text style={{padding:10,fontSize:15,margin :10,backgroundColor:"green",color:"white",borderRadius:40,fontFamily:"Montserrat_600SemiBold"}}>
      Iya
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <View>
      <Text style={{padding:10,fontSize:15,margin :10,backgroundColor:"red",color:"white",borderRadius:40,fontFamily:"Montserrat_600SemiBold"}}>
     Tidak
      </Text></View>
      </TouchableOpacity>
      </View>
    </View>
  )
}