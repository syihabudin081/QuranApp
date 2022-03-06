import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./Project/index"
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./Project/redux/store";


import { initializeApp,getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUgBuGklCTduX8A8JKIuKt3nfLpNOR-KI",
  authDomain: "quranapps-d0559.firebaseapp.com",
  projectId: "quranapps-d0559",
  storageBucket: "quranapps-d0559.appspot.com",
  messagingSenderId: "1084205959950",
  appId: "1:1084205959950:web:d82ea4b140f0fa0094a55f"
};


if(getApps().length){
const app = initializeApp(firebaseConfig);

}


export default function App() {
  return (
    <Provider store = {store}>
    <Index/>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
