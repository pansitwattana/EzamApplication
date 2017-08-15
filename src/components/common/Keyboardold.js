// Exported from snack.expo.io
import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AnimatedHideView from "react-native-animated-hide-view";
const PinKey = props => {
  return (
    <TouchableOpacity
      style={[styles.pinKey, props.label.length == 0 && styles.pinKeyEmpty]}
      onPress={() => props.onPress(props.label)}
    >
      <Text style={{ fontSize: 26 }}>
        {props.label}
      </Text>
      <Text style={{ fontSize: 12 }}>
        {props.label2}
      </Text>
    </TouchableOpacity>
  );
};
const PinKeyboard = props => {
  console.log(props);
  return (
    <AnimatedHideView visible={props.isChildVisible}>
      <View style={styles.pinKeyboard}>
        <PinKey label="1" onPress={props.handleKeyboard} />
        <PinKey label="2" label2="ABC" onPress={props.handleKeyboard} />
        <PinKey label="3" label2="DEF" onPress={props.handleKeyboard} />
        <PinKey label="4" label2="GHI" onPress={props.handleKeyboard} />
        <PinKey label="5" label2="JKL" onPress={props.handleKeyboard} />
      </View>
      <View style={styles.pinKeyboard}>
        <PinKey label="6" label2="MNO" onPress={props.handleKeyboard} />
        <PinKey label="7" label2="PQRS" onPress={props.handleKeyboard} />
        <PinKey label="8" label2="TUV" onPress={props.handleKeyboard} />
        <PinKey label="9" label2="WXYZ" onPress={props.handleKeyboard} />
        <PinKey label="0" onPress={props.handleKeyboard} />
      </View>
      <View style={styles.pinKeyboard}>
        <PinKey label="" onPress={props.handleKeyboard} />
        <PinKey label="" onPress={props.handleKeyboard} />
        <PinKey label="" onPress={props.handleKeyboard} />
        <PinKey label="" onPress={props.handleKeyboard} />
        <PinKey label="" onPress={props.handleKeyboard} />
      </View>
    </AnimatedHideView>
  );
};

const styles = StyleSheet.create({
  pinView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "rgb(239, 239, 244)"
  },
  pinKeyboard: {
    flex: -1,
    flexShrink: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  pinKey: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "rgb(255, 255, 255)",
    flexGrow: 1,
    paddingTop: 8
  },
  pinKeyEmpty: {
    backgroundColor: "rgb(239, 239, 244)"
  }
});

export { PinKeyboard };
