import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import Register from "./register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';


export default function LoginApp({ navigation }) {



  const dipatch = useDispatch();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const submit = () => {
    //navigation.navigate("MyDrawwer")
    const Data = {
      email,
      password,
    };
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        Alert.alert("Login Sukses", user.email);
        dipatch(
          login({
            token: password,
            userName: username,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const [fontsLoaded] = useFonts({
    Montserrat_900Black_Italic,  Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={{ flex: 3 / 4 }} source={require("./assets/logo.png")} />
      <View style={{ flex: 1 }}>
        <Text style={{ padding: 3, marginLeft: 10 ,fontFamily: "Montserrat_600SemiBold"}}>Email</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 50,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={{ padding: 3, marginLeft: 10,fontFamily: "Montserrat_600SemiBold" }}>Password</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 50,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Register);
          }}
        >
          <View>
            <Text style={{ color: "black", alignSelf: "center",fontFamily: "Montserrat_400Regular",fontSize:12 }}>
              Belum Punya Akun? Daftar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <View>
            <Text style={{ color: "white" ,fontFamily: "Montserrat_600SemiBold"}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDECD0",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#06BF51",
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 50,
    marginVertical: 30,
  },
});
