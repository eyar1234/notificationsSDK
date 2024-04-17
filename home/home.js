import { useState } from "react";
import ShowNotifications from "../modal/Notifications.modal";
import AddNotificationsForm from "../modal/AddNotifications";
import PlusButton from "../components/plus.component";
import BarComponent from "../components/bar.component";
import { Modal, View, StyleSheet, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  // get data from json
  const data = require("../data/task.json").data[0].notifications;

  // const dataFalse = data.filter((item) => item.read !== true);

  const [notifications, setNotificationes] = useState(data);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ShowNotifications
          setModalVisible={setModalVisible}
          notifications={notifications}
          setNotificationes={setNotificationes}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal2Visible(!modal2Visible);
        }}
      >
        <AddNotificationsForm
          setModal2Visible={setModal2Visible}
          setNotificationes={setNotificationes}
        />
      </Modal>

      <PlusButton setModal2Visible={setModal2Visible} />
      <BarComponent
        setModalVisible={setModalVisible}
        notifications={notifications}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 21,
    width: wp(25),
    margin: 10,
  },
});
