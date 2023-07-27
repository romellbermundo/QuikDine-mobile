import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "../../GlobalStyles";
import chefGreg from "../img/chef-greg.png";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerHome}>
      <Image
        source={chefGreg}
        resizeMode="cover"
        style={{
          width: "80%",
          height: "40%",
          borderColor: "#379540",
          borderRadius: 30,
          borderWidth: 10,
          marginTop: "30%",
          padding: 0,
        }}
      ></Image>
      <View style={styles.parentView}>
        <Text style={styles.titleHome}>Welcome Aboard Mate!</Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Chef Greg: </Text>
          <Text style={{ fontFamily: FontFamily.poppins }}>
            I'm looking for a chef to join my crew and help create amazing meals
            for our guests. No experience required in creating delicious dishes.
            Just bring your creativity and flair to the table.
          </Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  titleHome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: FontFamily.poppins,
  },
  parentView: {
    width: "85%",
    marginTop: 40,
    marginHorizontal: 10,
    gap: 10,
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3FAD9",
  },
  button: {
    backgroundColor: "#379540",
    width: 310,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
