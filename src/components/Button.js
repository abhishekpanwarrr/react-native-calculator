import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../styles/GlobalStyles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = ({ title, onPress, isBlue, isGray }) => {
  const theme = useContext(ThemeContext);

  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
