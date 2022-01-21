import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./components/ListItem";
const AppUI = ({ todos }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ListItem onPress={() => {}} description={item.description} />
      )}
    />
  </View>
);
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(AppUI);
