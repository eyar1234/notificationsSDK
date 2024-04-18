import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

import AddForm from "../components/AddNewNotificationsForm.component";
import Done from "../components/AddNotificationDone";

export default function AddNotificationsForm({
  setModal2Visible,
  setNotificationes,
}) {
  const [textInput1Value, setTextInput1Value] = useState("");
  const [textInput2Value, setTextInput2Value] = useState("");

  const [page, setPage] = useState(0);

  const handleTextInput1Change = (text) => {
    setTextInput1Value(text);
  };

  const handleTextInput2Change = (text) => {
    setTextInput2Value(text);
  };

  function PrassHandler() {
    // get the time and the date
    const currentDate = new Date();
    const formattedDateTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // create a form for notifications
    const newNotification = {
      id: Math.random().toString(),
      title: textInput1Value,
      content: textInput2Value,
      date: formattedDateTime,
      read: false,
    };
    // Update the notifications state by adding the new notification
    setNotificationes((prevNotifications) => [
      newNotification,
      ...prevNotifications,
    ]);
    // Show the Done page
    setPage(1);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {page === 0 ? (
          <AddForm
            setModal2Visible={setModal2Visible}
            handleTextInput1Change={handleTextInput1Change}
            PrassHandler={PrassHandler}
            handleTextInput2Change={handleTextInput2Change}
            textInput1Value={textInput1Value}
            textInput2Value={textInput2Value}
          />
        ) : (
          <Done setModal2Visible={setModal2Visible} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32324C",
    justifyContent: "center",
  },
});
