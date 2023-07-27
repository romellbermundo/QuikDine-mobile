import React, { useCallback, useContext, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RecipeCard } from "../../components/RecipeCard";
import AppContext from "../../Context/AppContext";

import { button, colors, FontFamily } from "../../../GlobalStyles";

export const NewEvent = () => {
  const navigation = useNavigation();

  const { selectedRecipesList, serverIP } = useContext(AppContext);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(Date.now()));
  const [endTime, setEndTime] = useState(new Date(Date.now()));
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [startText, setStartText] = useState("");
  const [endText, setEndText] = useState("");
  const [selectedRecipes, setSelectedRecipes] = useState({});

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const recipeList = {
          selectedRecipesList,
        };
        const dataResponse = await fetch(
          `http://${serverIP}:5001/api/spoonacular/recipebulk`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(recipeList),
          }
        );
        const responseValue = await dataResponse.json();
        setSelectedRecipes(responseValue);
      }
      getData();
    }, [selectedRecipesList])
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    if (mode === "date") {
      setText("Event Date: " + fDate);
    } else if (mode === "startTime") {
      let fStartTime = formatTime(tempDate);
      setStartText("Meal Time: " + fStartTime);
    } else {
      let fEndTime = formatTime(tempDate);
      setEndText("End Time: " + fEndTime);
    }
  };

  function formatTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm;

    if (hours === 0) {
      hours = 12;
      ampm = " AM";
    } else if (hours < 12) {
      ampm = " AM";
    } else {
      ampm = " PM";
      hours = hours - 12;
    }
    let result = hours + ":" + minutes.toString().padStart(2, "0") + ampm;
    return result;
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.backLocation, { height: "5%" }]}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
      </View>
      <View
        style={{
          width: "95%",
          height: "15%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Make New Event</Text>
        <Text style={styles.sectionTitle}>Pick your Date and Time</Text>
      </View>
      <View style={styles.dateAndTime}>
        <Text
          // placeholder="Date and Time"
          style={{
            fontWeight: "bold",
            fontSize: 20,
            backgroundColor: "white",
          }}
        >
          {text}
        </Text>
        <Text
          // placeholder="Date and Time"
          style={{
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: "white",
          }}
        >
          {startText} {`    `}
          {endText}
        </Text>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode === "startTime" || mode === "endTime" ? "time" : "date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <StatusBar style="auto" />

      <View style={{ flexDirection: "row", marginTop: 8, marginBottom: 15 }}>
        {/* <TouchableOpacity onPress={removeRecipient} style={styles.buttonRed}> */}
        <TouchableOpacity
          onPress={() => showMode("date")}
          style={styles.buttonGreen}
        >
          <Text style={styles.buttonTimeText}>Choose Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => showMode("startTime")}
          style={styles.buttonRed}
        >
          <Text style={styles.buttonTimeText}>Pick Meal Time</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "32%",
          width: "92%",
          borderRadius: 12,
          backgroundColor: "white",
        }}
      >
        <ScrollView>
          {selectedRecipes.length > 0 && [
            selectedRecipes.map((recipe) => {
              return (
                <RecipeCard key={recipe.id} recipe={recipe} cardHeight={100} />
              );
            }),
          ]}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe", { screen: "RecipePage" })}
        style={[button]}
      >
        <Text style={styles.buttonText}>Add Recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Send Email")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Invite Recipients</Text>
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
  Container: {
    flex: 1,
    padding: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTimeText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    marginTop: 5,
  },
  buttonRed: {
    backgroundColor: "#953737",
    width: "30%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    height: "90%",
    margin: 5,
  },
  buttonGreen: {
    backgroundColor: "#379540",
    width: "28%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    height: "90%",
    margin: 5,
  },
  Text: {
    fontSize: 25,
    color: "red",
    paddin: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.poppins,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 42,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
  backLocation: {
    top: 40,
    right: "42%",
  },
  dateAndTime: {
    backgroundColor: "#ffffff",
    width: "95%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
