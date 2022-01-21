import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";
const AppUI = () => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ListItem onPress={() => {}} description={item.description} />
      )}
    />
  </View>
);
const data = [
  {
    id: 1,
    description: "todo 1",
    completed: false
  }
];
const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch"
  }
});

export default AppUI;
