import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Heder({ setModalVisible }) {
  function PressHandler() {
    console.log("preesed");
  }
  return (
    <View>
      <View style={styles.titalContainer}>
        <FontAwesomeIcon
          color="black"
          size={22}
          style={styles.icon}
          icon={["far", "bell"]}
        />
        <Text style={styles.tital}>התראות</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.closeButton}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subTitalContainer}>
        <TouchableWithoutFeedback>
          <Text style={styles.notread}>שלא נקראו</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={PressHandler} useForeground={false}>
          <Text style={styles.allTheNotificatiens}>כל ההתראות</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titalContainer: {
    top: hp(7),
    height: hp(7),
    borderColor: "#959595",
    borderWidth: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
  },
  icon: {
    flex: 1,
  },
  tital: {
    flex: 2,
    color: "#292929",
    fontSize: 20,
    textAlign: "right",
    left: 5,
  },

  closeButton: {
    fontSize: 25,
    textAlign: "left",
    alignContent: "flex-start",
    paddingLeft: 4,
  },

  subTitalContainer: {
    top: hp(7),
    height: hp(7),
    marginHorizontal: 0.1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  notread: {
    flex: 1,
    fontSize: 20,
    textAlign: "right",
    color: "#292929",
  },
  allTheNotificatiens: {
    flex: 1,
    fontSize: 20,
    color: "#959595",
  },
});
