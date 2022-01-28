import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./components/ListItem";
import { todoActions } from "./actions";
import Input from "./components/Input";

const AppUI = ({ todos, complete, submit }) => {
  const [value, setValue] = useState("");
  const handleChange = (valueSearch) => {
    setValue(valueSearch);
  };
  const handleSubmit = () => {
    submit(value);
    setValue("");
  };
  return (
    <View style={styles.container}>
      <Input onSubmit={handleSubmit} onChange={handleChange} value={value} />
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
};
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
  complete: (id) => dispatch(todoActions.complete(id)),
  submit: (data) => dispatch(todoActions.saveTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppUI);
