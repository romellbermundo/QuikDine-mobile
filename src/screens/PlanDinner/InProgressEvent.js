import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { buttonBorder, colors, FontFamily } from "../../../GlobalStyles";
import { SubInfo } from "../../components/DashBoardText";
import { TextStroke } from "../../components/RecipeCard";
import AppContext from "../../Context/AppContext";
import fallveggie from "../../img/falling-veggies.png";
import menu from "../../img/menu.png";
import newevent from "../../img/new-event.jpg";

export const InProgressEvent = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { eventToView, serverIP } = useContext(AppContext);
  const [participants, setParticipants] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [votes, setVotes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function getEvent() {
        try {
          const packet = { eventToView };
          const dataResponse = await fetch(
            `http://${serverIP}:5001/api/firebase/getEvent`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(packet),
            }
          );
          const responseValue = await dataResponse.json();
          console.log(responseValue);
          setParticipants(responseValue.participants);
          setVotes(responseValue.votes);

          const recipeResponse = await fetch(
            `http://${serverIP}:5001/api/spoonacular/recipebulk`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                selectedRecipesList: responseValue.recipes,
              }),
            }
          );
          const recipeValue = await recipeResponse.json();
          setRecipes(recipeValue);
        } catch (error) {
          alert(error.message);
        }
      }
      getEvent();
    }, [eventToView])
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            source={menu}
            resizeMode="cover"
            style={styles.modalImageView}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "column",
                marginTop: "20%",
              }}
            >
              <Text style={[styles.modalText, { fontWeight: "800" }]}>
                Vote Results
              </Text>
              {recipes.length > 0 &&
                recipes.map((recipe, index) => {
                  return (
                    <Text style={styles.modalText} key={index}>
                      {recipe.title}: {votes[index]}
                    </Text>
                  );
                })}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            source={menu}
            resizeMode="cover"
            style={styles.modalImageView}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "column",
                marginTop: "20%",
              }}
            >
              <Text style={[styles.modalText, { fontWeight: "800" }]}>
                Participants
              </Text>
              {participants.map((email, index) => {
                return (
                  <Text style={styles.modalText} key={index}>
                    {email}
                  </Text>
                );
              })}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
        <Text style={styles.title}>Current Meals</Text>
        <Text style={styles.sectionTitle}>Bon Appetit!</Text>
      </View>
      <View
        style={{
          height: "60%",
          alignItems: "center",
          width: "95%",
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[buttonBorder, { height: 170 }]}
        >
          <ImageBackground
            source={newevent}
            resizeMode="cover"
            style={styles.image}
            borderRadius={16}
          >
            <TextStroke stroke={2} color={colors.darkgreen}>
              <Text style={styles.textStrokeText}> {"View Vote Results"} </Text>
            </TextStroke>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible2(true)}
          style={[buttonBorder, { height: 170 }]}
        >
          <ImageBackground
            source={newevent}
            resizeMode="cover"
            style={styles.image}
            borderRadius={16}
          >
            <TextStroke stroke={2} color={colors.darkgreen}>
              <Text style={styles.textStrokeText}> {"View Participants"} </Text>
            </TextStroke>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SuggestedRecipes")}
        style={[styles.buttonNavigation, { width: 400 }]}
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
      <View
        style={{
          height: "10%",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3FAD9",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.poppins,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 44,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
  buttonSend: {
    backgroundColor: "#379540",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImageView: {
    margin: 20,
    borderRadius: 20,
    height: 400,
    width: 255,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textStrokeText: {
    fontSize: 25,
    color: "#FFFFFF",
    fontFamily: FontFamily.poppins,
    marginTop: 5,
    marginRight: 5,
  },
});
