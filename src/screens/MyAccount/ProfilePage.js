import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import profilebg from "../../img/profile-bg.jpg";
import profile from "../../img/profile.png";

import { FontFamily } from "../../../GlobalStyles";
import AppContext from "../../Context/AppContext";

export const ProfilePage = () => {
  const {
    email,
    setIsLoggedIn,
    setEmail,
    setUser,
    setPantryList,
    setSelectedRecipesList,
    setFavoritesList,
    setRecipients,
    setEventId,
  } = useContext(AppContext);
  const navigation = useNavigation();
  const name = "Sophia";
  const accountName = "Sophia";
  let jobIcon = "briefcase-outline";
  let locationIcon = "location";
  let favoritesIcon = "heart-sharp";

  function logout() {
    setIsLoggedIn(false);
    setUser("");
    setEmail("");
    setEventId("");
    setPantryList([]);
    setSelectedRecipesList([]);
    setFavoritesList([]);
    setRecipients([]);
    navigation.navigate("Login");
  }
  return (
    <View style={{ backgroundColor: "#ebfefe" }}>
      <ScrollView style={{ height: "100%" }}>
        <ImageBackground
          source={profilebg}
          style={{
            width: "100%",
            height: 150,
          }}
        ></ImageBackground>

        <View style={{ alignItems: "center" }}>
          <View
            source={profilebg}
            style={{
              width: 146,
              height: 146,
              borderRadius: 100,
              marginTop: -70,
              borderWidth: 3,
              borderColor: "#ebfefe",
            }}
          >
            <Image
              flex={1}
              source={profile}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
              }}
            ></Image>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Sophia
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
            26, Female
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Ionicons name={jobIcon} size={20} color="black" />
          <Text style={styles.pText}>{`  Full Stack Developer`}</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Ionicons name={locationIcon} size={20} color="black" />
          <Text style={styles.pText}>{`  Calgary, Alberta`}</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <Ionicons name={favoritesIcon} size={20} color="black" />
          <Text style={styles.pText}>{`Bananas, Pies, Bacon, and Cheese`}</Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              backgroundColor: "#035779",
              marginBottom: 40,
            }}
          >
            <Text
              style={{ color: "white", fontWeight: "bold" }}
            >{`  Logout`}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 530,
    right: 100,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  pText: {
    fontFamily: FontFamily.happymonkey,
  },
});
