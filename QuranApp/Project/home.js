import {
  Text,
  View,
  Image,
  ScrollViewBase,
  TouchableOpacity,Button
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import axios from "axios";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import SurahScreen from "./SurahScreen";
import { getAuth,signOut } from "firebase/auth";

export default function Home({ navigation }) {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://api.alquran.cloud/v1/quran/quran-uthmani"
      );

      setData(res.data.data.surahs);
    } catch (err) {
      console.log("gagal");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //  console.log(data);
  // }, [data]);

  return (
    <>
      <ScrollView>
      


        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              backgroundColor: "#BDECD0",
              borderRadius: 45,
              padding: 10,
              paddingHorizontal: 40,
              margin: 10,
            }}
          >
            Daftar Surah
          </Text>
         
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("SurahScreen", item)}
                >
                  <View style={styles.daftarSurat}>
                    <View
                      style={{
                        flex: 1,

                        backgroundColor: "#BDECD0",
                        alignItems: "center",
                        borderRadius: 50,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,

                          borderRadius: 45,
                          padding: 5,
                        }}
                      >
                        {item.englishName}
                      </Text>
                    </View>

                    <View style={{ flex: 1, alignItems: "center" }}>
                      <Text style={{ fontSize: 14 }}>{item.name}</Text>
                      <Text
                        style={{
                          textAlign: "right",
                          fontSize: 12,
                          fontWeight: "200",
                          fontStyle: "italic",
                        }}
                      >
                        {item.englishNameTranslation}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  daftarSurat: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
