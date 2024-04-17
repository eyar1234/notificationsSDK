import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
library.add(faCalendarCheck);

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Done({ setModal2Visible }) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.titelcontainer}>
        <TouchableOpacity onPress={() => setModal2Visible(false)}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.content}>ההתראה נוספה בהצלחה!</Text>
        <FontAwesomeIcon color="green" size={250} icon={faCalendarCheck} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    top: hp(15),
    height: hp(100),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    // padding: 10,
  },
  titelcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp(5),
    paddingHorizontal: wp(3),
    marginVertical: hp(2),
    // backgroundColor: "blue",
  },

  x: {
    // justifyContent: "center",
    fontSize: 30,
    textAlign: "left",
    paddingLeft: 6,
  },
  content: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "",
    marginBottom: hp(10),
  },
  center: {
    flex: 1,
    alignItems: "center",
  },
});
