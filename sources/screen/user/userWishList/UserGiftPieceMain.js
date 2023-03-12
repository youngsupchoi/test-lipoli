import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ServerStyleSheet } from "styled-components";
import { Detail, UpperBar } from "../../../../style/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GiftPieceCard from "./GiftPieceCard";
const UserGiftPieceMain = ({ navigation, initialParams }) => {
  const [v, setV] = useState(true);
  const giftData = [
    {
      giftPicture:
        "data:image/jpeg;base64,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",
      gitfName: "Airpod max",
      giftCategory: "Elactronics",
      giftPrice: 600000,
      giftNumOfPiece: 15,
    },
    {
      giftPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIJ-ycUPgGWmQj4T7Lc1r6U11noyOMBWP0w&usqp=CAU",

      gitfName: "Jordan1 travis scott fragment",
      giftCategory: "Elactronics",
      giftPrice: 1800000,
      giftNumOfPiece: 120,
    },
    {
      giftPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJVN5Rp4ARdWVCesLNBopA6P52Fz9tdKDIA&usqp=CAU",

      gitfName: "Japan tour",
      giftCategory: "Travel",
      giftPrice: 900000,
      giftNumOfPiece: 32,
    },
    {
      giftPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjhU6ie39U4qJ89mlHpOJ17U1kY1dcEURWZS7pGApZhC0YdLehDZ3LtPtutCjpeiv0cA&usqp=CAU",

      gitfName: "iPad Air5",
      giftCategory: "Elactronics",
      giftPrice: 710000,
      giftNumOfPiece: 50,
    },
  ];
  return (
    <View style={styles.container}>
      {/* 상단바 */}

      <UpperBar>
        <View style={styles.upperBar2}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="md-chevron-back-outline"
              size={24}
              color="#f8f9fa"
            />
          </TouchableOpacity>
          <Detail style={{ marginLeft: 10 }}>내 위시리스트</Detail>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("몰라");
          }}
        >
          <Ionicons name="md-menu-outline" size={24} color="#f8f9fa" />
        </TouchableOpacity>
      </UpperBar>

      <TextInput
        placeholder="상품 검색"
        placeholderTextColor={"#f8f9fa"}
        style={styles.search}
      />

      <KeyboardAwareScrollView
        style={styles.giftCardContainer}
        showsVerticalScrollIndicator={true}
      >
        {giftData.map((item) => {
          return (
            <GiftPieceCard
              giftPicture={item.giftPicture}
              gitfName={item.gitfName}
              giftCategory={item.giftCategory}
              giftPrice={item.giftPrice}
              giftNumOfPiece={item.giftNumOfPiece}
            />
          );
        })}

        <View style={{ height: 15 }}></View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default UserGiftPieceMain;

//androiid
const screenHeight = Dimensions.get("window").height;
const statusBarHeight = getStatusBarHeight();
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: screenHeight - statusBarHeight,
    backgroundColor: "#212529",
    paddingTop: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  upperBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 40,
    backgroundColor: "#212529",
    zIndex: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  upperBar2: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    paddingVertical: 10,
    fontFamily: "NotoSansKR-Regular",
    borderRadius: 20,
    color: "#adb5bd",
    borderColor: "#adb5bd",
    borderWidth: 0.3,
    width: "100%",
    height: 40,
    marginTop: 10,
    paddingHorizontal: 20,
    lineHeight: 40,
    fontSize: 14,
    textAlignVertical: "center",
  },
  giftCardContainer: {
    resizeMode: "contain",
    width: "100%",
  },
});
