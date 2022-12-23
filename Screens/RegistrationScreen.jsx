import React, { useState } from "react";
import { StyleSheet, View, TextInput,  KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, 
  Keyboard, Alert, Button} from "react-native";

export const Input=()=> {
const [value, setValue] = useState("");
const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            cursorColor="red"
          />
          <Button title={"Login"} style={styles.button} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   maxHeight:200,
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ecf0f1",
    marginBottom: 10,
    borderRadius: 10,
    color: "#ecf0f1",
    // cursorColor: "#ecf0f1",
    // placeholderTextColor:"#ecf0f1",
  },

  // button: {
  //   width: 200,
  //   height: 44,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   borderRadius:10,
  //   marginBottom: 10,
  //   backgroundColor: "blue",
  //   color: "white",
  // },
});