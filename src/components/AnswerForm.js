import React, { Component } from 'react';
import { View, Keyboard, ScrollView } from 'react-native';
import uuid from 'uuid/v1';
import EquationView from './EquationView';
import { MathKeyboard } from './common';

class AnswerForm extends Component {
  state = {
    equations: [
      {
        text: '',
        typed: '',
        key: null,
        id: uuid()
      }
    ],
    line: 0,
    text: '',
    keyboardVisible: true
  };

  onKeyboardEnter = () => {
    const equations = this.state.equations;
    equations[this.state.line].typed = '';
    equations.push({
      text: null,
      typed: '',
      key: null,
      cmd: null,
      id: uuid()
    });
    this.setState({
      equations,
      line: this.state.line + 1
    });
  };

  onHandleKeyboard = value => {
    const text = this.state.equations[this.state.line].text;
    const equations = this.state.equations;
    const equation = equations[this.state.line];
    equation.text = text + value;
    equation.typed = value;
    equation.key = null;
    equation.cmd = null;
    this.setState({
      equations
    });
    Keyboard.dismiss();
    // this.setState({ text: this.state.text + value })
  };

  onAnswerSheetPress = (index) => {
    const { equations, line } = this.state
    equations[line].typed = null
    equations[line].key = null
    equations[line].cmd = null
    this.setState({
      equations,
      line: index,
      keyboardVisible: line === index ? !this.state.keyboardVisible : true
    });
  };

  onKeystroke = key => {
    const equations = this.state.equations;
    const equation = equations[this.state.line];
    equation.typed = null
    equation.key = key
    equation.cmd = null
    this.setState({
      equations
    });
  };

  onCmd = cmd => {
    const equations = this.state.equations
    const equation = equations[this.state.line]
    equation.typed = null
    equation.key = null
    equation.cmd = cmd
    this.setState({
      equations
    });
  }

  hide = () => {
    this.setState({
      keyboardVisible: false
    })
  }

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <ScrollView>
          <EquationView
            equations={this.state.equations}
            line={this.state.line}
            onPress={this.onAnswerSheetPress}
          />
        </ScrollView>
        <MathKeyboard
          keyboardVisible={this.state.keyboardVisible}
          onPress={this.onHandleKeyboard}
          onEnter={this.onKeyboardEnter}
          onKeystroke={this.onKeystroke}
          onCmd={this.onCmd}
          onDelete={this.onDelete}
          hide={this.hide}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
};

export default AnswerForm;
