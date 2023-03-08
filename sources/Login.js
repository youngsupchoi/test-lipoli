import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import logo from "../assets/images/Lipoli_logo_white.png";
import kakaoLoginImage from "../assets/images/kakao_login_large_wide.png";
import { Detail2, LoginDetail, Submit } from "../style/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <Detail2>당신만을 위한 라이프 포트폴리오</Detail2>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholderTextColor={"gray"}
          placeholder="이메일 또는 휴대폰"
          style={styles.inputText}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"gray"}
          placeholder="비밀번호"
          style={styles.inputText}
        ></TextInput>
        <LoginDetail>Forgot password?</LoginDetail>

        <Submit
          onPress={() => {
            navigation.navigate("TabStack");
          }}
        >
          로그인
        </Submit>
        <View style={styles.bar}></View>
        <Image source={kakaoLoginImage} style={styles.kakaoLoginImage} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
const windowHeight = Dimensions.get("window").height;
//androiid
const statusBarHeight = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: windowHeight - statusBarHeight,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 85,
    resizeMode: "contain",
    marginBottom: 20,
  },
  inputText: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "70%",
    marginTop: 10,
    color: "white",
  },
  bar: {
    marginTop: 70,
    backgroundColor: "#B3B4B9",
    width: "50%",
    height: 1,
  },
  kakaoLoginImage: {
    resizeMode: "contain",
    height: 52,
    width: 230,
    marginTop: 10,
  },
});
