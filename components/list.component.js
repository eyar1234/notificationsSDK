import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);

export default function List({ PrassHandler, notifications, curruntList }) {
  const data = notifications.filter((item) => item.read === curruntList);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={(id) => PrassHandler(item.id)}>
            <View style={styles.cardContainer}>
              <View style={styles.titalCordContainer}>
                <Text style={styles.titalCord}>{item.title}</Text>
                {curruntList === false ? (
                  <Text style={styles.blueDot}>🔵</Text>
                ) : (
                  <Text></Text>
                )}
              </View>

              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.date}>{item.date.slice(0, 10)}</Text>
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
  cardContainer: {
    borderColor: "#959595",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 7,
  },
  titalCordContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },

  titalCord: {
    textAlign: "right",
    fontSize: 18,
    color: "#292929",
    marginBottom: 10,
  },
  blueDot: {
    top: 5,
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
