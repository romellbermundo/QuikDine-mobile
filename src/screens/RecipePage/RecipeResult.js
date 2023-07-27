import { useFocusEffect, useNavigation } from "@react-navigation/core";
import React, { useCallback, useContext, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Card, Text } from "react-native-paper";

import { button, colors, FontFamily } from "../../../GlobalStyles";
import { TextStroke } from "../../components/RecipeCard";
import AppContext from "../../Context/AppContext";
// import Icon from "react-native-ico";

export const RecipeResult = () => {
  const navigation = useNavigation();
  const {
    selectedRecipesList,
    setSelectedRecipesList,
    recipeId,
    serverIP,
    ingUsed,
  } = useContext(AppContext);

  const [selectedRecipe, setSelectedRecipe] = useState({});
  useFocusEffect(
    useCallback(() => {
      async function recipeFetch() {
        const id = { id: recipeId };
        const dataResponse = await fetch(
          `http://${serverIP}:5001/api/spoonacular/recipe`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(id),
          }
        );
        const result = await dataResponse.json();
        setSelectedRecipe(result);
      }

      recipeFetch();
    }, [recipeId])
  );

  function addToRecipeListHandler() {
    if (selectedRecipesList.indexOf(selectedRecipe.id) === -1) {
      setSelectedRecipesList([...selectedRecipesList, selectedRecipe.id]);
    }
    navigation.navigate("Recipe Search");
  }

  return selectedRecipe.extendedIngredients ? (
    <View style={styles.container}>
      <View style={{ height: "10%" }}></View>
      <View style={[styles.backLocation, { height: "5%" }]}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Recipe Search")}
        />
      </View>
      <Card
        style={{
          height: "20%",
          width: "95%",
          backgroundColor: "red",
          marginBottom: 10,
          borderRadius: 16,
        }}
      >
        <ImageBackground
          source={{ uri: selectedRecipe.image }}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: colors.lightorange,
            borderColor: colors.darkorange,
            borderWidth: 3,
            borderRadius: 15,
          }}
          resizeMode="cover"
          borderRadius={10}
        >
          <Card.Content>
            <TextStroke stroke={2} color={"#953737"}>
              <Text style={styles.textStrokeText}>
                {" "}
                {selectedRecipe.title}{" "}
              </Text>
            </TextStroke>
          </Card.Content>
        </ImageBackground>
      </Card>
      <View
        style={{
          height: "20%",
          width: "95%",
          backgroundColor: "blue",
          borderRadius: 15,
          backgroundColor: colors.lightblue,
          borderColor: colors.darkblue,
          borderWidth: 3,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            width: "95%",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 16 }}>Ingredients</Text>
          {selectedRecipe.extendedIngredients.map((ingredients, index) => (
            <Text
              key={index}
              style={
                ingUsed.indexOf(ingredients.id) === -1
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              {index + 1}. {ingredients.name} -{" "}
              {ingredients.measures.metric.amount}{" "}
              {ingredients.measures.metric.unitLong}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          height: "38%",
          width: "95%",
          backgroundColor: "blue",
          borderRadius: 15,
          backgroundColor: colors.lightblue,
          borderColor: colors.darkblue,
          borderWidth: 3,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            width: "95%",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 16 }}>Instructions</Text>
          {selectedRecipe.analyzedInstructions[0].steps.map(
            (instructions, index) => (
              <Text key={index}>
                {index + 1}. {instructions.step}
              </Text>
            )
          )}
        </ScrollView>
      </View>
      <View
        style={{
          height: "8%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={addToRecipeListHandler}
          style={[button, { marginTop: 0, marginBottom: 0 }]}
        >
          <Text style={styles.buttonText}>Add Recipe to Event</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "10%" }}></View>
    </View>
  ) : (
    []
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
  backLocation: {
    right: "42%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textStrokeText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: FontFamily.poppins,
    marginTop: 5,
  },
});
