import React from 'react';
import { Flex, View } from 'antd-mobile';
import AnimatedHideView from 'react-native-animated-hide-view';
import { Text } from 'react-native'

const MathKeyboard = ({ keyboardVisible, onPress, onEnter, onKeystroke, onCmd, hide }) => {
  const { container } = styles
  const textStyle = {
    backgroundColor: '#fff',
    color: '#bbb',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: keyboardVisible ? 45 : 0,
    fontSize: 20,
    lineHeight: 37,
    borderWidth: 1,
    borderColor: '#ebebef',
    width: '16.66%'
  }

  return (
    <AnimatedHideView style={container} visible={keyboardVisible}>
      <View>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => hide()}>down</Text>
          <Text style={textStyle} onPress={() => onKeystroke('Left')}>{'<-'}</Text>
          <Text style={textStyle} onPress={() => onKeystroke('Right')}>{'->'}</Text>
          <Text style={textStyle} onPress={() => onPress('^')}>^</Text>
          <Text style={textStyle} onPress={() => onKeystroke('Backspace')}>del</Text>
          <Text style={textStyle} onPress={() => onEnter()}>⏎</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('x')}>{'x'}</Text>
          <Text style={textStyle} onPress={() => onPress('x')}>{'x'}</Text>
          <Text style={textStyle} onPress={() => onPress('7')}>7</Text>
          <Text style={textStyle} onPress={() => onPress('8')}>8</Text>
          <Text style={textStyle} onPress={() => onPress('9')}>9</Text>
          <Text style={textStyle} onPress={() => onPress('/')}>÷</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('/')}>/</Text>
          <Text style={textStyle} onPress={() => onCmd('\\sqrt')}>sqrt</Text>
          <Text style={textStyle} onPress={() => onPress('4')}>4</Text>
          <Text style={textStyle} onPress={() => onPress('5')}>5</Text>
          <Text style={textStyle} onPress={() => onPress('6')}>6</Text>
          <Text style={textStyle} onPress={() => onPress('*')}>×</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('^2')}>^2</Text>
          <Text style={textStyle} onPress={() => onPress('x')}>x</Text>
          <Text style={textStyle} onPress={() => onPress('1')}>1</Text>
          <Text style={textStyle} onPress={() => onPress('2')}>2</Text>
          <Text style={textStyle} onPress={() => onPress('3')}>3</Text>
          <Text style={textStyle} onPress={() => onPress('-')}>-</Text>
        </Flex>
        <Flex direction="row" wrap="wrap" align="center" justify="around">
          <Text style={textStyle} onPress={() => onPress('(')}>(</Text>
          <Text style={textStyle} onPress={() => onPress(')')}>)</Text>
          <Text style={textStyle} onPress={() => onPress('0')}>0</Text>
          <Text style={textStyle} onPress={() => onPress('.')}>.</Text>
          <Text style={textStyle} onPress={() => onPress('=')}>{'='}</Text>
          <Text style={textStyle} onPress={() => onPress('+')}>+</Text>
        </Flex>
      </View>
    </AnimatedHideView>
  );
};

let styles = {
  
  container: {
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
};

export { MathKeyboard };
