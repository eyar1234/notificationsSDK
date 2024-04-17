import List from "../components/list.component";
import Heder from "../components/header.component";
import ReadButton from "../components/ReadButton.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export default function ShowNotifications({
  setModalVisible,
  notifications,
  setNotificationes,
}) {
  const [curNotificatins, setCurNotifications] = useState(notifications);
  // remove the object from the list by press
  function PrassHandler(id) {
    setNotificationes((prevNotificatins) => {
      return prevNotificatins.filter((item) => item.id !== id);
    });
  }

  // heder, list and button
  return (
    <View style={styles.container}>
      <Heder
        setModalVisible={setModalVisible}
        setNotificationes={setNotificationes}
      />
      <List PrassHandler={PrassHandler} notifications={notifications} />
      <ReadButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    opacity: 1,
  },
});
