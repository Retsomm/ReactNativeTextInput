import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, 
  Keyboard
} from "react-native";

export default function App() {
  const [phoneCode, setPhoneCode] = useState("");
  const [passportCode, setPassportCode] = useState("");
  const [button, setButton] = useState("登入");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            margin: "10px",
            width: "300px",
            borderBottom: "1px solid #fff",
            paddingBottom: "20px"
          }}
        >
          會員登入
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: "16px",
            margin: "10px",
            width: "300px"
          }}
        >
          您輸入的手機號碼為{phoneCode}
        </Text>
        <TextInput
          maxLength={10}
          style={{
            height: 50,
            width: 300,
            borderRadius: 0,
            borderColor: "darkgray",
            backgroundColor: "white",
            color: "black",
            fontSize: 28,
            textAlign: "center"
          }}
          onChangeText={(text) => setPhoneCode(text)}
          keyboardType={"numeric"}
          value={phoneCode}
          autoFocus={true}
        />
        <Text
          style={{
            color: "white",
            fontSize: "16",
            margin: "10",
            width: "300"
          }}
        >
          密碼
        </Text>
        <TextInput
          maxLength={4}
          style={{
            height: 50,
            width: 300,
            borderRadius: 0,
            borderColor: "darkgray",
            backgroundColor: "white",
            color: "black",
            fontSize: 28,
            textAlign: "center"
          }}
          onChangeText={(text) => setPassportCode(text)}
          keyboardType={"numeric"}
          value={passportCode}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#00aeef",
            borderRadius: 5,
            width: 300,
            height: 40,
            justifyContent: "center",
            margin: 40
          }}
          onPress={() => {
            if (phoneCode === "0912345678" && passportCode === "0000") {
              setButton("登入成功");
            } else {
              setButton("登入");
            }
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            {button}
          </Text>
        </TouchableOpacity>
        {phoneCode.length === 10 ? (
          phoneCode === "0912345678" ? (
            <Text style={{ color: "yellow" }}>手機號碼輸入成功</Text>
          ) : (
            <Text style={{ color: "red" }}>手機號碼輸入錯誤</Text>
          )
        ) : (
          <Text style={{ color: "red" }}>請輸入手機號碼</Text>
        )}
        {passportCode.length === 4 ? (
          passportCode === "0000" ? (
            <Text style={{ color: "yellow" }}>密碼輸入成功</Text>
          ) : (
            <Text style={{ color: "red" }}>密碼輸入錯誤</Text>
          )
        ) : (
          <Text style={{ color: "red" }}>請輸入密碼</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
