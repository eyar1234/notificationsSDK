import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ReadButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => console.log("on work")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>סמן הכל כנקרא</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#32324C",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    width: wp(80),
    bottom: hp(5),
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "",
  },
});
