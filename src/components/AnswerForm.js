import React, { Component } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import uuid from 'uuid/v1'
import { MathKeyboard, LaTex } from './common';


class AnswerForm extends Component {
  state = {
    equations: [{
      text: '',
      typed: '',
      id: uuid()
    }],
    line: 0,
    text: '',
    keyboardVisible: false
  }

  onDelete = () => {
    // let text = this.state.text
    // let deletedText = text.substring(0, text.length - 1);
    // this.setState({ text: deletedText })
  }

  onKeyboardEnter = () => {
    console.log('Enter pressed')
  }

  onHandleKeyboard = (value) => {
    const text = this.state.equations[this.state.line].text
    const equations = this.state.equations
    const equation = equations[this.state.line]
    equation.text = text + value
    equation.typed = value
    console.log(equations)
    this.setState({ equations })
    Keyboard.dismiss()
    // this.setState({ text: this.state.text + value })
  }

  onAnswerSheetPress = () => {
    this.setState({ keyboardVisible: !this.state.keyboardVisible })
  }

  render() {  
    const { container, answerStyle } = styles
    const equationView = this.state.equations.map((equation) => 
      <LaTex key={equation.id} text={equation.typed} />
    )

    return (
      <View style={container}>
        <TouchableOpacity style={answerStyle} onPress={this.onAnswerSheetPress}>
          {equationView}
        </TouchableOpacity>
        <MathKeyboard 
          keyboardVisible={this.state.keyboardVisible} 
          onPress={this.onHandleKeyboard}
          onEnter={this.onKeyboardEnter}
          onDelete={this.onDelete}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 3
  },
  answerStyle: {
    flex: 2
  }
}

export default AnswerForm
