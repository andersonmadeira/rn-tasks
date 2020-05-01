import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native'
import SendIcon from './components/Icon'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [inputText, setInputText] = useState('')

  const addNewTask = (taskText) => {
    if (taskText) {
      setTasks([
        ...tasks,
        { id: `${Math.random()}`, label: taskText, done: false },
      ])
      setInputText('')
    }
  }

  const toggleTaskDone = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t))
    )
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312556" />
      <View style={styles.container}>
        <View style={styles.taskInputContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="New Task"
            placeholderTextColor="#7469A8"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            onSubmitEditing={() => addNewTask(inputText)}
          />
          <SendIcon onPress={() => addNewTask(inputText)} />
        </View>
        <FlatList
          data={tasks}
          style={{ width: '100%', marginTop: 15 }}
          renderItem={(info) => (
            <View
              style={{
                marginVertical: 5,
              }}
            >
              <Text
                onPress={() => toggleTaskDone(info.item)}
                style={{
                  ...styles.taskListItem,
                  ...(info.item.done
                    ? {
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        opacity: 0.5,
                      }
                    : {}),
                }}
              >
                {info.item.label}
              </Text>
            </View>
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34275C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  taskInputContainer: {
    width: '100%',
    backgroundColor: '#221A3F',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskInput: {
    flex: 1,
    fontSize: 20,
    color: '#9C94C1',
  },
  taskListItem: {
    color: '#7469A8',
    width: '100%',
    padding: 10,
    fontSize: 20,
  },
  text: {
    color: '#7469A8',
    fontSize: 50,
  },
})
