import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import Register from "./register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
    Alert.alert("Login Sukses",user.email)
    dipatch(
      login({
        token: password,
        userName: username,
      }),
    );
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <View style={styles.container}>
      <Image style={{ flex: 3 / 4 }} source={require("./assets/logo.png")} />
      <View style={{ flex: 1 }}>
        <Text style={{ padding: 3, marginLeft: 10 }}>Email</Text>
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
        <Text style={{ padding: 3, marginLeft: 10 }}>Password</Text>
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
         <TouchableOpacity  onPress={()=> {navigation.navigate(Register)}}>
          <View>
            <Text style={{ color: "black",alignSelf:"center",}}>Belum Punya Akun? Daftar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <View>
            <Text style={{ color: "white" }}>Login</Text>
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
