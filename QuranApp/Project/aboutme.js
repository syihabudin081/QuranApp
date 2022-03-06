import React from "react";
import { View, Image, StyleSheet, Text,Scrollview } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Skill from "./Component/index"
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
const About = () => {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <MaterialCommunityIcons name="face" size={100} color="black" />
          <View style={styles.name}>
            <Text style={styles.nama}>Syihabudin Rahmat Ramadhan</Text>
            <Text style={styles.desc}> React Native Developer</Text>
          </View>
        </View>
        <Skill title={"Portofolio"} />
        <View style={styles.icon}>
          <AntDesign name="github" size={50} color="black" s />
          <Fontisto name="gitlab" size={50} color="black" />
          <FontAwesome5 name="sourcetree" size={50} color="black" />
          
        </View>
        <Skill title={"Bahasa Pemrograman"} />
        <View style={styles.icon}>
        
          <Ionicons name="logo-javascript" size={50} color="black" />
          <Fontisto name="mysql" size={50} color="black" />
          <FontAwesome5 name="java" size={50} color="black" />
          <FontAwesome5 name="php" size={50} color="black" />
        </View>
        <Skill title={"Contact"} />
        <View style={styles.icon}>
          <View style={{ flexDirection: "column" }}>
            <AntDesign name="instagram" size={50} color="black" />
            <Text>@syihabrr</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <AntDesign name="twitter" size={50} color="black" />

            <Text>@syihabrr</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Entypo name="linkedin" size={50} color="black" />
            <Text style={{}}>Syihabrr</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  judul: {
    padding: 50,
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    padding: 9,
    alignSelf: "center",
    
  },
  nama: {
    fontSize: 18,
    paddingBottom: 5,fontFamily:"Montserrat_600SemiBold"
  },
  desc: {
    fontSize: 14,
    color: "grey",
    alignSelf: "center",
  },
  icon: {
    backgroundColor: "#BDECD0",
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "space-between",

    marginHorizontal: 12,
    flexDirection: "row",
  },
});
