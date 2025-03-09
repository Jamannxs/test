import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2"]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: any) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍎 To-Do List 🍏</Text>
      
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              🗑️
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your todos..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 
  },
  taskContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    padding: 10, borderBottomWidth: 1, 
    borderBottomColor: "#ccc" 
  },
  taskText: { 
    fontSize: 18 
  },
  inputContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 20 
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    borderColor: "#ccc" 
  },
  addButton: { 
    marginLeft: 10, 
    backgroundColor: "blue", 
    padding: 10, 
    borderRadius: 5 
  },
  addButtonText: { 
    color: "white", 
    fontWeight: "bold" 
  }
});

export default App;
