import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);

export default function BarComponent({ setModalVisible, notifications }) {
  const [NumNotiification, SetNumNotiification] = useState(0);

  function PrassHandler() {
    SetNumNotiification((prevNum) => prevNum + 1);
    setModalVisible(true);
    console.log(notifications);
  }
  return (
    <View style={styles.IconContainer}>
      <TouchableOpacity onPress={PrassHandler}>
        <View style={styles.numberContainer}>
          <Text style={styles.Number}>{NumNotiification}</Text>
        </View>
        <FontAwesomeIcon icon={["far", "bell"]} size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    backgroundColor: "#fff",
    width: 60,
  },
  numberContainer: {
    borderRadius: 10,
    backgroundColor: "red",
    width: 22,
    left: 28,
    top: 4,
  },
  Number: {
    color: "white",
    textAlign: "center",
  },
});
