import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import deleteIcon from "../img/delete.png";
import Ionicons from "react-native-vector-icons/Ionicons";
let trashDelete = "trash-outline";

const Event = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View>
          <Text style={[styles.itemText, { width: 100 }]}>{props.text}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.itemEventText, { width: 110 }]}>
            {props.textProgress}
          </Text>
          <View style={{ left: 60 }}>
            <Ionicons name={trashDelete} size={30} color="#88001b" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fefaf3",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#ffbb00",
    borderColor: "black",
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 18,
  },
  itemEventText: {
    maxWidth: "80%",
    fontSize: 18,
    color: "#296a2f",
    fontWeight: "600",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Event;
