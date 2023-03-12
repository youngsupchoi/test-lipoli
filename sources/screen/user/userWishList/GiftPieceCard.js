import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Detail, Detail2 } from "../../../../style/styles";

const GiftPieceCard = ({
  giftPicture,
  gitfName,
  giftCategory,
  giftPrice,
  giftNumOfPiece,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: giftPicture }} style={styles.picture} />
      <View style={styles.textContainer}>
        <Detail>{gitfName}</Detail>
        <View>
          <View style={styles.giftDetailContainer}>
            <Detail2 style={styles.giftDetail}>{giftCategory}</Detail2>
            <Detail2 style={styles.giftDetail}>{giftNumOfPiece}조각</Detail2>
          </View>
          <View style={styles.giftDetailContainer}>
            <Detail2>
              {" "}
              {new String(giftPrice / giftNumOfPiece).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}{" "}
              원/조각
            </Detail2>
            <Detail2>
              {new String(giftPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </Detail2>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GiftPieceCard;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212529",

    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f8f9fa",
    paddingVertical: 16,
    flexDirection: "row",
  },
  picture: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
  },
  textContainer: {
    height: windowWidth * 0.2,

    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
  giftDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
