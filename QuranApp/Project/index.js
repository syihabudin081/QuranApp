import React, { useEffect, useState } from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContent, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Logout from "./logout";
import Login from "./login";
import Home from "./home";
import Aboutme from "./aboutme";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import SurahScreen from "./SurahScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Register from "./register";
 import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { setSignInStatus } from "./redux/authSlice";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawwer = createDrawerNavigator();

export default function index() {
  const dispatch = useDispatch();
  const isSignIn = useSelector((state) => state.auth.isSignIn);
  // const [isSignIn,setSignIn] = useState(false)
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setSignInStatus(true));
        const uid = user.uid;
        //setSignIn(true)
      } else {
        dispatch(setSignInStatus(false));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isSignIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerTitleAlign:"center",
                headerTransparent:true,
                headerTitleStyle:{
                  fontFamily:"Montserrat_600SemiBold"
                }
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MyDrawwer"
              component={MyDrawwer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: "#BDECD0",
                },
                
                
                headerLeft: () => (
                  <FontAwesome5 name="quran" size={24} color="black" />
                ),
              }}
            />

            <Stack.Screen
              name="SurahScreen"
              component={SurahScreen}
              options={{
                headerStyle: {
                  backgroundColor: "#BDECD0",

                },
               
                headerTitle: () => (
                  <>
                  <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 19, marginRight: 10,fontFamily: "Montserrat_600SemiBold" }}
              >
                Al-Quran App
              </Text>
              <FontAwesome5 name="quran" size={24} color="black" />
            </View>
            </>
                )
                ,headerTitleAlign:"center"
                
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyDrawwer = () => (
  <Drawwer.Navigator
    screenOptions={{
      drawerStyle: {
        width: 240,
      },
      drawerActiveBackgroundColor: "#BDECD0",
      drawerActiveTintColor: "black",
    }}
  >
    <Drawwer.Screen
      name="Home"
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: "#BDECD0",
        },
        headerTitle: () => (
          <>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 19, marginRight: 10,fontFamily: "Montserrat_600SemiBold"}}
              >
                Al-Quran App
              </Text>
              <FontAwesome5 name="quran" size={24} color="black" />
            </View>
          </>
        ),
       headerTitleAlign:"center",

        drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
      }}
    />
    <Drawwer.Screen
      name="About me"
      component={Aboutme}
      options={{
        headerStyle: {
          backgroundColor: "#BDECD0",
          
        },
        headerTitle:"About Me",
        headerTitleStyle:{
          fontFamily: "Montserrat_600SemiBold"
        },
        headerTitleAlign:"center"
        ,
        drawerIcon: () => (
          <MaterialCommunityIcons name="face-profile" size={24} color="black" />
        ),
      }}
    />
    <Drawwer.Screen
      name="LogOut"
      component={Logout}
      
      options={{
      headerStyle:{
        backgroundColor:"#BDECD0"
      },headerTitle:"Logout",
      headerTitleAlign:"center",
        drawerIcon: () => (
          <TouchableOpacity
            onPress={() => {
              const auth = getAuth();
              signOut(auth);
            }}
          >
            <MaterialCommunityIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        ),
        

      }}
      
    />
  </Drawwer.Navigator>
);


