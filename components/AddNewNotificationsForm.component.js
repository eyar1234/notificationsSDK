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

export default function AddForm({
  setModal2Visible,
  handleTextInput1Change,
  PrassHandler,
  handleTextInput2Change,
  textInput1Value,
  textInput2Value,
}) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.titelcontainer}>
        <TouchableOpacity onPress={() => setModal2Visible(false)}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
        <Text style={styles.titel}>בחירת אירוע</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitel}>כותרת התראה</Text>
        <TextInput
          value={textInput1Value}
          style={styles.input}
          onChangeText={handleTextInput1Change}
          // textAlignVertical="top"
        />
      </View>
      <View style={styles.inputContainer2}>
        <Text style={styles.inputTitel}>מלל התראה</Text>
        <TextInput
          value={textInput2Value}
          style={styles.input2}
          onChangeText={handleTextInput2Change}
          textAlignVertical="top"
          textAlign={
            textInput2Value && textInput2Value.charCodeAt(0) > 255
              ? "right"
              : "left"
          }
          multiline={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={PrassHandler} style={styles.button}>
          <Text style={styles.buttonText}>שמירה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32324C",
    // padding: 5,
    justifyContent: "center",
  },
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
  titel: {
    fontSize: 24,
    color: "#191919",
    fontFamily: "",
  },
  inputContainer: {
    alignItems: "flex-end",
    paddingHorizontal: wp(5),
  },
  inputTitel: {
    color: "#292929",
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "",
  },
  input: {
    height: hp(6),
    width: wp(90),
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer2: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: wp(5),
    paddingTop: 20,
  },
  input2: {
    height: hp(14),
    width: wp(90),
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#32324C",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    // marginVertical: 10,
    width: wp(80),
    bottom: hp(5),
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
