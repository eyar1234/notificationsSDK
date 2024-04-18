import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";

import List from "../components/list.component";
import Heder from "../components/header.component";
import ReadButton from "../components/ReadButton.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faBell);

export default function ShowNotifications({
  setModalVisible,
  notifications,
  setNotificationes,
}) {
  const [curruntList, setCurrentList] = useState(false);
  // toggle the notifications from  list to list
  function PrassHandler0(id) {
    setNotificationes((prevNotifications) => {
      return prevNotifications.map((obj) =>
        obj.id === id ? { ...obj, read: true } : obj
      );
    });
  }
  // make all the notRead as read
  function PrassHandler1() {
    setNotificationes((prevObjects) =>
      prevObjects.map((obj) => ({ ...obj, read: true }))
    );
  }

  useEffect(() => {
    const sortedData = [...notifications].sort((a, b) => {
      const parseDate = (dateStr) => {
        const [day, month, year, time] = dateStr.split(/[ /:]/);
        return new Date(`20${year}`, month - 1, day, ...time.split(":"));
      };

      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      return dateB - dateA;
    });

    setNotificationes(sortedData);
  }, []);

  // heder, list and button
  return (
    <View style={styles.container}>
      <Heder
        setModalVisible={setModalVisible}
        setCurrentList={setCurrentList}
        curruntList={curruntList}
      />
      <List
        PrassHandler={PrassHandler0}
        notifications={notifications}
        curruntList={curruntList}
      />
      {curruntList === false ? (
        <ReadButton PrassHandler1={PrassHandler1} />
      ) : (
        ""
      )}
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
