import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FontFamily } from "../../GlobalStyles";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/DashBoardText";
import fallveggie from "../img/falling-veggies.png";
import pantrybg from "../img/pantry-bg.jpg";
import quikdine from "../img/quik-dine.png";

export default function DashBoard() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Title Box */}
      <View
        style={{
          width: "95%",
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            color: "#379540",
            textAlign: "left",
            marginBottom: "7%",
            marginTop: "17%",
            fontFamily: FontFamily.ubuntubold,
            fontStyle: "italic",
          }}
        >
          {" "}
          Welcome to{" "}
        </Text>
        <Image
          flex={1}
          source={quikdine}
          resizeMode="contain"
          style={{
            marginTop: "-25%",
            textAlign: "right",
            width: "70%",
            height: "30%",
          }}
        ></Image>
      </View>
      {/* First Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SuggestedRecipes")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={styles.text}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* Second Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("PlanDinner")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={styles.text}>
            {" "}
            <SubInfo2 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* Third Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("MyPantry")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={pantrybg}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={styles.text}>
            {" "}
            <SubInfo3 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#D3FAD9",
  },
  text: {
    fontSize: 26,
    color: "white",
  },
  buttonNavigation: {
    width: "95%",
    height: "17%",
    margin: "1%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
