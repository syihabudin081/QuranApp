import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

export default function SurahScreen({ route, navigation }) {
  const data = route.params.ayahs;
  const { englishName, name, number, englishNameTranslation } = route.params;
  console.log(data);

  return (
    <>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#BDECD0",
            padding: 10,
            margin: 10,
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {englishName} ( {name} )
          </Text>
          <Text style={{ fontStyle: "italic" }}>{englishNameTranslation}</Text>
          <Text>Surah Ke-{number}</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    borderTopWidth: 1,
                    borderColor: "#DEF2E6",
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#BDECD0",
                      borderRadius: 45,
                      alignSelf: "center",
                      padding: 10,
                    }}
                  >
                    {item.numberInSurah}
                  </Text>

                  <Text
                    style={{
                      flex: 1,
                      fontSize: 24,
                      marginRight: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
              </>
            );
          }}
        ></FlatList>
      </ScrollView>
    </>
  );
}
