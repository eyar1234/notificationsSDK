import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function List({ PrassHandler, notifications }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={(id) => PrassHandler(item.id)}>
            <View style={styles.card}>
              <Text style={styles.titalCord}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    borderColor: "#959595",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 7,
  },
  titalCord: {
    textAlign: "right",
    fontSize: 18,
    color: "#292929",
    marginBottom: 10,
  },
  content: {
    textAlign: "right",
    color: "#707070",
    marginBottom: 10,
  },
  date: {
    textAlign: "left",
  },
});
