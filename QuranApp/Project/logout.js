import { View, Text } from 'react-native'
import React from 'react'

export default function Logout() {
  return (
    <View style={{alignItems:"center",flex:1,justifyContent:"center",backgroundColor:"#BDECD0"}}>
      <Text style={{fontSize:20}}>Apakah Anda Yakin Ingin Logout ?</Text>
      <View style={{flexDirection:"row",padding:10}}>
      <Touhab
      <Text style={{padding:10,fontSize:15,margin :10,textAlign:"center",flex:1}}>
      Iya
      </Text>
      <Text style={{padding:10,fontSize:15,margin :10,textAlign:"center",flex:1}}>
     Tidak
      </Text>
      </View>
    </View>
  )
}