import React, { useCallback, useContext } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { buttonBorder, colors, FontFamily } from "../../../GlobalStyles";
import { SubInfo, SubInfo2 } from "../../components/PlanMealText";
import AppContext from "../../Context/AppContext";
import ipevent from "../../img/ip-event.png";
import newevent from "../../img/new-event.jpg";
// import Icon from "react-native-ico";

export const EventList = () => {
  const {
    serverIP,
    email,
    eventList,
    setEventList,
    setEventToView,
    eventId,
    isLoggedIn,
  } = useContext(AppContext);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      async function getEvents() {
        try {
          const packet = { email };
          const dataResponse = await fetch(
            `http://${serverIP}:5001/api/firebase/getEvents`,
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
          const tempEventList = responseValue.eventList;
          tempEventList.shift();
          setEventList(tempEventList);
        } catch (error) {
          alert(error.message);
        }
      }
      getEvents();
    }, [eventId, isLoggedIn])
  );
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: "95%",
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Plan Meals</Text>
        <Text style={styles.sectionTitle}>More people, more fun!</Text>
      </View>
      <ScrollView style={{ width: "98%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("New Event")}
          style={[buttonBorder, { height: 170 }]}
        >
          <ImageBackground
            source={newevent}
            resizeMode="cover"
            style={styles.image}
            borderRadius={16}
          >
            <Text style={{ marginBottom: -5 }}>
              {" "}
              <SubInfo />{" "}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        {eventList.map((event, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setEventToView(event);
                navigation.navigate("In-Progress Event");
              }}
              style={[buttonBorder, { height: 100 }]}
            >
              <ImageBackground
                source={ipevent}
                resizeMode="cover"
                style={styles.image}
                borderRadius={16}
              >
                <Text style={{ marginBottom: -5 }}>
                  <SubInfo2 title={eventList.length - index} />
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.happymonkey,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 44,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
});
