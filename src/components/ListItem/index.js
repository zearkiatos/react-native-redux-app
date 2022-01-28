import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const ListItem = ({ description, onPress, completed }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {completed ? (
        <Text style={[styles.text, styles.strike]}>✅ {description}</Text>
      ) : (
        <Text style={styles.text}>❌ {description}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  text: {
    fontSize: 18
  },
  strike: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});

export default ListItem;
