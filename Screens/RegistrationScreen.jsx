import React, { useState } from "react";
import { StyleSheet, View, TextInput,  KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, 
  Keyboard, Alert, Text, TouchableOpacity
} from "react-native";
import { Icon } from '@rneui/themed';

 const initialState =  {
    login: "",
    email: "",
    password:"",
 }
export const Input = () => {
const [onShow, setOnShow] = useState(true);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  
  
 
  // const onLogin = () => {
  //   Alert.alert("Credentials", `${login} + ${password}+${email}`);
  // };

  const keyboardSet = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState)
  }
  const eyeClick = () => {
    console.log("css")
    setOnShow(!onShow)
 }
  return (
    <>
          <TouchableWithoutFeedback onPress={keyboardSet}>
      <View style={{...styles.form,marginBottom:Platform.OS=="ios"&&isShowKeyboard?135:0}}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>Registration</Text>
          </View>
          <View>
                <TextInput
              onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
              value={state.login}
              placeholder="Login"
              placeholderTextColor="#BDBDBD"
              style={{ ...styles.input, marginBottom: 16 }}
              onFocus={()=>setIsShowKeyboard(true)}
          />
          </View>
            <View>
                <TextInput
              onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
              value={state.email}
              placeholder="Email address"
              placeholderTextColor="#BDBDBD"
              style={{ ...styles.input, marginBottom: 16 }}
              onFocus={()=>setIsShowKeyboard(true)}
          />
          </View>
            <View style={styles.password} >
              <TextInput
              onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
              value={state.password}
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
            secureTextEntry={true}
              style={styles.input}
              onFocus={()=>setIsShowKeyboard(true)}
            />   
            
             
                        
      </View>
            <TouchableOpacity style={styles.btn} onPress={keyboardSet}>
              <Text style={styles.btnTitle}>Register</Text>
          </TouchableOpacity>
          <View style={styles.linkLoginBox}>
            <Text style={styles.linkLogin}>Already have an account? Log in</Text>
          </View>

        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.eye} >
        {onShow ? <Icon onPress={eyeClick}
                name='eye'
                color="#BDBDBD"
              type='font-awesome'
            /> : <Icon
                  name='eye-slash'
                   color="#BDBDBD"
              type='font-awesome'/>}
            </View>
    </>

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
    // justifyContent:"flex-end",
  },
  titleBox: {
    alignItems: "center",
    marginTop: 92,
    marginBottom: 33,
  },
    title: {
      fontFamily: "Roboto-Regular",
      fontStyle: "normal",
      fontWeight:"500",
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
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight:"400",
    color: "#212121",
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
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight:"400",
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
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight:"400",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18.75,
    color: "#1B4371",
  },
  eye: {
    // marginTop: -54,
    // marginLeft:"auto",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    // top:Platform.OS=="ios" ?560:456,
  },
  password: {
   position:"relative" ,
  },
});