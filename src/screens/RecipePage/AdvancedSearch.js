import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { button, colors } from "../../../GlobalStyles";
import { IngredientSearchCard } from "../../components/IngredientSearchCard";
import AppContext from "../../Context/AppContext";
import menu from "../../img/menu.png";

let questionMark = "help-circle-outline";
let searchIcon = "search";

let tempSearchCriteria;
const mealTypes = [
  "any",
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];
const cuisines = [
  "any",
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];
const diets = [
  "any",
  "vegetarian",
  "vegan",
  "pescetarian",
  "paleo",
  "ketogenic",
  "gluten free",
];

export const AdvancedSearch = () => {
  // useState Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [tempCuisine, setTempCuisine] = useState("any");
  const [tempDiet, setTempDiet] = useState("any");
  const [tempMealType, setTempMealType] = useState("any");
  const navigation = useNavigation();

  const {
    tempSearchQuery,
    setTempSearchQuery,
    pantryList,
    setPantryList,
    ingredientList,
    setIngredientList,
    searchQuery,
    setSearchQuery,
    cuisine,
    setCuisine,
    diet,
    setDiet,
    mealType,
    setMealType,
    ingredientListChecked,
    setIngredientListChecked,
    setPage,
  } = useContext(AppContext);

  const tempPantry = [...pantryList];
  const numIngUsed = ingredientListChecked.reduce((a, b) => a + b, 0);

  tempSearchCriteria = {
    ingredientList: ingredientList,
    searchQuery: searchQuery,
    cuisine: cuisine,
    diet: diet,
    mealtype: mealType,
  };

  useEffect(() => {
    if (mealType === "") {
      setTempMealType("any");
    } else {
      setTempMealType(mealType);
    }
  }, [mealType]);

  useEffect(() => {
    if (diet === "") {
      setTempDiet("any");
    } else {
      setTempDiet(diet);
    }
  }, [diet]);

  useEffect(() => {
    if (cuisine === "") {
      setTempCuisine("any");
    } else {
      setTempCuisine(cuisine);
    }
  }, [cuisine]);

  function resetSearch() {
    setPantryList([...pantryList]);
  }

  function noIngSelect() {
    setIngredientListChecked(
      new Array(ingredientListChecked.length).fill(false)
    );
  }

  function searchQuerySetter() {
    setSearchQuery(tempSearchQuery);
  }

  function dietSetter() {
    if (tempDiet === "any") {
      setDiet("");
    } else {
      setDiet(tempDiet);
    }
  }

  function cuisineSetter() {
    if (tempCuisine === "any") {
      setCuisine("");
    } else {
      setCuisine(tempCuisine);
    }
  }

  function mealTypeSetter() {
    if (tempMealType === "any") {
      setMealType("");
    } else {
      setMealType(tempMealType);
    }
  }

  function ingredientSetter() {
    let tempIngredientList = [];
    for (const i in ingredientListChecked) {
      if (ingredientListChecked[i] === true) {
        tempIngredientList.push(tempPantry[i]);
      }
    }
    setIngredientList(tempIngredientList);
  }

  return (
    <View style={styles.container}>
      <View style={{ height: "10%" }}></View>
      {/* Help Popup - Start */}
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
                marginTop: "10%",
              }}
            >
              <Text style={[styles.modalText, { fontWeight: "800" }]}>
                Help!
              </Text>
              <Text style={styles.modalText}>
                Select all the ingredients in the Current Ingredients to find
                cuisines.{"\n"} {"\n"}
                To use the query search, you are limited to 3 Current
                Ingredients from the blue box above.{"\n"} {"\n"}
                Use the filters at the yellow box to target your search.
              </Text>
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
      {/* Help Popup - End */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Recipe Search")}
          style={{ right: "220%" }}
        />
        <Text style={{ right: "50%", fontSize: 20, fontWeight: "600" }}>
          Advanced Options
        </Text>
      </View>
      <View
        style={{
          height: "51%",
          width: "95%",
          backgroundColor: "blue",
          marginTop: 20,
          borderRadius: 15,
          backgroundColor: colors.lightblue,
          borderColor: colors.darkblue,
          borderWidth: 3,
        }}
      >
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Current Ingredients
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors.darkblue,
              width: "25%",
              padding: 5,
              borderRadius: 10,
              alignItems: "center",
              margin: 5,
            }}
            onPress={noIngSelect}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>
              Deselect All
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: "124%",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {tempPantry.length > 0 && [
              tempPantry.map((ingredient, index) => {
                return (
                  <IngredientSearchCard
                    key={index}
                    ingredient={ingredient}
                    setIngredientListChecked={setIngredientListChecked}
                    ingredientListChecked={ingredientListChecked}
                    index={index}
                    tempSearchQuery={tempSearchQuery}
                    numIngUsed={numIngUsed}
                  />
                );
              }),
            ]}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginBottom: 14,
          marginTop: -5,
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[[button], { alignItems: "center", width: "15.5%" }]}
        >
          <Ionicons
            name={questionMark}
            size={30}
            color="#ffffff"
            style={{ marginTop: -5, marginBottom: -20 }}
          />
        </TouchableOpacity>
        <Searchbar
          value={tempSearchQuery}
          onChangeText={(text) => {
            setTempSearchQuery(text);
          }}
          onSubmitEditing={searchQuerySetter}
          placeholder={
            numIngUsed > 3
              ? "There must be 3 or less ingredients selected to include a query"
              : "query (optional)"
          }
          style={{
            width: "67%",
            marginTop: "5%",
            marginLeft: 15,
            borderRadius: 12,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: colors.lightorange,
          borderColor: colors.darkorange,
          borderWidth: 3,
          borderRadius: 15,
          padding: 10,
          width: "95%",
        }}
      >
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Diet</Text>
          <View style={[styles.dropdown]}>
            <SelectDropdown
              data={diets}
              defaultValue={tempDiet}
              onSelect={(selectedItem, index) => {
                setTempDiet(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Meal Type</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={mealTypes}
              defaultValue={tempMealType}
              onSelect={(selectedItem, index) => {
                setTempMealType(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Cuisine Select</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={cuisines}
              defaultValue={tempCuisine}
              onSelect={(selectedItem, index) => {
                setTempCuisine(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginTop: -10,
        }}
      >
        <TouchableOpacity
          onPress={resetSearch}
          style={[[button], { alignItems: "center", width: "20.5%" }]}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={numIngUsed > 3 && tempSearchQuery != ""}
          onPress={() => {
            searchQuerySetter();
            dietSetter();
            cuisineSetter();
            mealTypeSetter();
            ingredientSetter();
            setPage(1);
            navigation.navigate("Recipe Search");
          }}
          style={[
            [button],
            {
              alignItems: "center",
              width: "67%",
              justifyContent: "center",
              marginLeft: 15,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonText}>Advanced Search </Text>
            <Ionicons
              name={searchIcon}
              size={30}
              color="#ffffff"
              style={{ marginTop: -10, marginBottom: -10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: "10%" }}></View>
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
  backLocation: {
    top: 40,
    right: "42%",
  },
  selection: {
    width: "35%",
  },
  dropdown: {
    width: "90%",
  },
  dropdownDropdownStyle: { width: 150, borderRadius: 10 },
  dropdownBtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  selectionTitle: {
    fontWeight: "600",
    fontSize: 12,
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "center" },
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
});
