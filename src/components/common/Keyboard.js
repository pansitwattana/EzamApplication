import React, { Component } from "react";
import { Flex, WhiteSpace, View } from "antd-mobile";
import AnimatedHideView from "react-native-animated-hide-view";
import { Text } from 'react-native'

const Keyboard = ({ keyboardVisible, onPress }) => {
  const { textStyle, container } = styles

  return (
    <AnimatedHideView visible={keyboardVisible}>
      <View style={container}>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('<')}>{'<'}</Text>
          <Text style={textStyle} onPress={() => onPress('1')}>1</Text>
          <Text style={textStyle} onPress={() => onPress('2')}>2</Text>
          <Text style={textStyle} onPress={() => onPress('3')}>3</Text>
          <Text style={textStyle} onPress={() => onPress('/')}>/</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('x')}>x</Text>
          <Text style={textStyle} onPress={() => onPress('4')}>4</Text>
          <Text style={textStyle} onPress={() => onPress('5')}>5</Text>
          <Text style={textStyle} onPress={() => onPress('6')}>6</Text>
          <Text style={textStyle} onPress={() => onPress('x')}>x</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('y')}>y</Text>
          <Text style={textStyle} onPress={() => onPress('7')}>1</Text>
          <Text style={textStyle} onPress={() => onPress('8')}>2</Text>
          <Text style={textStyle} onPress={() => onPress('9')}>3</Text>
          <Text style={textStyle} onPress={() => onPress('-')}>-</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('>')}>{'>'}</Text>
          <Text style={textStyle}> </Text>
          <Text style={textStyle} onPress={() => onPress('0')}>0</Text>
          <Text style={textStyle}> </Text>
          <Text style={textStyle} onPress={() => onPress('=')}>{'='}</Text>
        </Flex>
      </View>
    </AnimatedHideView>
  );
};

const styles = {
  textStyle: {
    backgroundColor: "#fff",
    color: "#bbb",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    fontSize: 20,
    lineHeight: 37,
    borderWidth: 1,
    borderColor: '#ebebef',
    width: "20%"
  },
  container: {
    justifyContent: 'center'
  }
};

export { Keyboard };
