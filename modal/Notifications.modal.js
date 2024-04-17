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
  const [curruntList, setCurrentList] = useState(false);
  // remove the object from the list by press
  function PrassHandler0(id) {
    setNotificationes((prevNotificatins) => {
      return prevNotificatins.filter((item) => item.id !== id);
    });
  }
  // function PrassHandler1() {
  //   setNotificationes((prevNotifications) => {
  //     return prevNotifications.map((item) => ({
  //       ...item,
  //       read: "true",
  //     }));
  //   });
  // }

  // heder, list and button
  return (
    <View style={styles.container}>
      <Heder
        setModalVisible={setModalVisible}
        setCurrentList={setCurrentList}
      />
      <List
        PrassHandler={PrassHandler0}
        notifications={notifications}
        curruntList={curruntList}
      />
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
