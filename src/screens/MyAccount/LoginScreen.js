import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, FontFamily } from "../../../GlobalStyles.js";
import AppContext from "../../Context/AppContext.js";
import chefGreg2 from "../../img/chef-greg2.png";

export function LoginScreen() {
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const {
    setEmail,
    setEventId,
    setIsLoggedIn,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    setFavoritesList,
    setRecipients,
    setInviteUserIds,
    serverIP,
  } = useContext(AppContext);

  async function handleLogin() {
    try {
      let trimmedEmail = tempEmail.trim();
      const packet = { email: trimmedEmail, password };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/firebase/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(packet),
        }
      );
      const responseValue = await dataResponse.json();
      console.log("login server", responseValue);

      alert(responseValue.msg);
      setEmail(responseValue.email);
      setEventId(responseValue.eventId);

      setIsLoggedIn(true);
      if (responseValue.selectedRecipesList.length > 0) {
        setSelectedRecipesList(responseValue.selectedRecipesList);
      } else {
        setSelectedRecipesList([...selectedRecipesList]);
      }

      setInviteUserIds(responseValue.inviteUserIds);
      setRecipients(responseValue.recipients);
      setPantryList(responseValue.pantryList);
      setFavoritesList(responseValue.favoritesList);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: "90%",
          height: 650,
          marginBottom: 20,
        }}
      >
        <Text style={styles.titleHome}>Welcome Back!</Text>
        <Image
          source={chefGreg2}
          resizeMode="cover"
          style={{
            width: 300,
            height: 260,
            borderColor: "#379540",
            borderRadius: 30,
            borderWidth: 10,
            marginTop: 30,

            padding: 0,
          }}
        ></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email ID"
          value={tempEmail}
          onChangeText={(text) => setTempEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{
            fontFamily: FontFamily.ubuntubold,
            color: "#46ADA1",
            marginTop: 10,
            marginBottom: -30,
          }}
        >
          Forgot Password?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 15 }}>
          <Text>
            <Text>Don’t have an account? </Text>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ fontFamily: FontFamily.ubuntubold, color: "#46ADA1" }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  inputContainer: {
    marginTop: -350,
    marginBottom: "0%",
    width: 325,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: colors.darkgreen,

    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#379540",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#379540",
    fontWeight: "700",
    fontSize: 16,
  },
  titleHome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: -20,
    fontFamily: FontFamily.ubuntu,
    textAlign: "center",
  },
  paragraphText: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
});
