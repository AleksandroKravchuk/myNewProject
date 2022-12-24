import React, { useState } from "react";
import { StyleSheet, View, TextInput,  KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, 
  Keyboard, Alert, Text,TouchableOpacity} from "react-native";

export const Input=()=> {
const [email, setEmail] = useState("");
const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password}+${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>Registration</Text>
          </View>
          
          <View>
                <TextInput
              value={login}
              onChangeText={nameHandler}
              placeholder="Login"
              style={{ ...styles.input, marginBottom: 16 }}
              
          />
          </View>
            <View>
                <TextInput
              value={email}
              onChangeText={nameHandler}
              placeholder="Email address"
              style={{ ...styles.input, marginBottom: 16 }}
              
          />
          </View>
          <View>
              <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />   
      </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTitle}>Register</Text>
          </TouchableOpacity>
          <View style={styles.linkLoginBox}>
            <Text style={styles.linkLogin}>Already have an account? Log in</Text>
          </View>

        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    maxHeight: 550,
    // marginTop:"auto",
    borderTopRightRadius: 25,
    borderTopLeftRadius:25,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    justifyContent:"flex-end",
  },
  titleBox: {
    alignItems: "center",
    marginTop: 92,
    marginBottom: 33,
  },
    title: {
    // Font:Roboto,
// wight:500,
    fontSize: 30,
    color: "#212121",
    lineHeight: 35,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#F6F6F6",
    padding:16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight:19,
  },
  btnBox: {
    alignItems: "center",
    marginTop:43,
  },
  btn: {
    alignItems: "center",
    marginTop:43,
    backgroundColor: "#FF6C00",
   borderRadius:100,
  },
  btnTitle: {
    fontSize: 16,
    fontWeight:"400",
    lineHeight: 19,
    color: "#FFFFFF",
    paddingBottom: 16,
    paddingTop:16,
  },
  linkLoginBox: {
     marginTop: 16,
    marginBottom: 66,
    alignItems:"center",
  },
  linkLogin: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18.75,
    color: "#1B4371",
   
  },
});