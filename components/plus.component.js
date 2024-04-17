import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function PlusButton(props) {
  function PrassHandler() {
    props.setModal2Visible(true);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={PrassHandler}>
        <Text style={styles.context}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: 4,
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#292929",
  },
  context: {
    alignContent: "center",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 45,
  },
});
