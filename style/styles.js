import React from "react";
import styled from "styled-components/native";

export const LogoStyle = styled.View`
  size: 30;
`;

export const Detail = styled.Text`
  font-family: "NotoSansKR-Regular";
  font-size: 13px;
  color: #f8f9fa;
  font-weight: bold;
  line-height: 25px;
`;

export const Detail2 = styled.Text`
  font-family: "NotoSansKR-Light";
  font-size: 13px;
  color: #f8f9fa;
  line-height: 25px;
  /* background-color:red; */
`;
export const LoginDetail = styled.Text`
  font-size: 12px;
  color: #a4a4a4;
  margin-top: 25;
  width: 70%;
  text-align: right;
`;
export const Submit = styled.Text`
  font-size: 10;
  background-color: white;
  margin-top: 10;
  border-radius: 15px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-top: 25px;
`;

export const UpperBar = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: #212529;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: "NotoSansKR-Regular";
  font-size: 15px;
  color: #f8f9fa;
  font-weight: bold;
  line-height: 25px;
`;
