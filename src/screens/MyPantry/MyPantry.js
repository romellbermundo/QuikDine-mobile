import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  addWrapper,
  addWrapperCamera,
  ingredientsWrapper,
  input,
  items,
  sectionTitle,
  title,
  writeIngredientWrapper,
} from "../../../GlobalStyles";

import Ingredient from "../../components/Ingredient";
import AppContext from "../../Context/AppContext";
import cameraPlus from "../../img/camera-plus.png";
import fallveggie from "../../img/pantry-bg.jpg";
import plusWhite from "../../img/plus-white.png";

export default function MyPantry() {
  const navigation = useNavigation();
  const { pantryList, setPantryList } = useContext(AppContext);
  const [ingredient, setIngredient] = useState();

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setPantryList([...pantryList, ingredient]);
    setIngredient(null);
  };

  const completeIngredient = (index) => {
    let itemsCopy = [...pantryList];
    itemsCopy.splice(index, 1);
    setPantryList(itemsCopy);
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={fallveggie}>
      <View style={[ingredientsWrapper]}>
        <Text style={[title]}>My Pantry</Text>
        <Text style={[sectionTitle]}>Ingredients List</Text>
        <ScrollView style={[items]}>
          {pantryList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeIngredient(index)}
              >
                <Ingredient text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* Hidden box to prevent overlap with the objects below */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[
          writeIngredientWrapper,
          { marginBottom: 80 },
          { flexDirection: "row-reverse" },
          { justifyContent: "space-between" },
        ]}
      ></KeyboardAvoidingView>
      {/* Bottom section of the pantry with add ingredients from text and camera */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[writeIngredientWrapper]}
      >
        <TextInput
          style={[input]}
          placeholder={"Add an ingredient"}
          value={ingredient}
          onChangeText={(text) => setIngredient(text)}
        />
        <TouchableOpacity onPress={() => handleAddIngredient()}>
          <View style={[addWrapper]}>
            <Image
              source={plusWhite}
              resizeMode="contain"
              style={{
                width: "70%",
                height: "120%",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <View style={[addWrapperCamera]}>
            <Image
              source={cameraPlus}
              resizeMode="contain"
              style={{
                width: "120%",
                height: "120%",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
