import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Calendar, CalendarList } from "react-native-calendars";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";
import Day from "react-native-calendars/src/calendar/day";

const CreateEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  function pressHandler(selectedDate) {
    navigation.navigate("TimeSlots", {
      dateId: selectedDate,
    });
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          backgroundColor: "black",
          borderRadius: 10,
          margin: 90,
          padding: 10,
          width: 70,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{ borderRadius: 40, elevation: 4, margin: 40 }}
          onDayPress={(day) => {
            pressHandler(day.dateString);
          }}
          initialDate={"2023-01-01"}
          markingType={"period"}
          markedDates={{
            currentDay: {
              marked: true,
              selected: true,
              dotColour: "red",
              selectedColour: "purple",
            },
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEvent;
