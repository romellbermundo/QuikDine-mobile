import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { buttonBorder, colors, FontFamily } from "../../GlobalStyles";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/DashBoardText";

import fallveggie from "../img/falling-veggies.png";
import pantrybg from "../img/pantry-bg.jpg";
import planmeals from "../img/planmeals.png";
import quikdine from "../img/quik-dine.png";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Main */}
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
            marginTop: "17%",
            marginBottom: "-5%",
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
            marginTop: "-10%",
            textAlign: "right",
            width: "70%",
            height: "30%",
          }}
        ></Image>
      </View>
      {/* First Tab */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Plan Meal")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={planmeals}
          resizeMode="cover"
          style={styles.image}
          borderRadius={14}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* Second Tab */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={14}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo2 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* Third Tab */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Pantry")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={pantrybg}
          // source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={16}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo3 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  text: {
    fontSize: 26,
    color: "white",
  },
  buttonNavigation: {
    width: "95%",
    height: "18%",
    margin: "2%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
