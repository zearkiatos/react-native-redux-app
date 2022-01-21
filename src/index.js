import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./components/ListItem";
import reducers from './reducers';

const AppUI = ({ todos, complete }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => complete(item.id)}
          description={item.description}
          completed={item.completed}
        />
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

const mapDispatchToProps = (dispatch) => ({
  complete: (id) => dispatch(reducers.complete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppUI);
