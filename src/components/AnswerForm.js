import React, { Component } from 'react';
import { View, Keyboard, ScrollView } from 'react-native';
// import ActionButton from 'react-native-action-button'
// import Icon from 'react-native-vector-icons/Ionicons'
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
        cmd: null,
        id: uuid()
      }
    ],
    line: 0,
    text: '',
    keyboardVisible: true
  };

  onKeyboardEnter = () => {
    const equations = this.state.equations;
    
    const equation = equations[this.state.line]
    equation.typed = ''
    equation.key = null
    equation.cmd = null
    
    equations.push({
      text: null,
      typed: '',
      key: null,
      cmd: null,
      id: uuid()
    });
    this.setState({
      equations,
      line: equations.length - 1
    });
  };

  onHandleKeyboard = value => {
    console.log(this.state)
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
            question={'x^2+3x+10=0, \\ x=?'}
            equations={this.state.equations}
            line={this.state.line}
            onPress={this.onAnswerSheetPress}
          />
          {/* <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log('notes tapped!')}>
              <Icon name="me-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>> */}
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
