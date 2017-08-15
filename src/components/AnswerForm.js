import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Keyboard } from "./common";

class AnswerForm extends Component {
  state = { text: '', keyboardVisible: false }

  render() {  
    const { container, answerStyle } = styles

    return (
      <View style={container}>
        <TouchableOpacity style={answerStyle} onPress={this.onAnswerSheetPress}>
          <Text>{this.state.text}</Text>
        </TouchableOpacity>
        <Keyboard keyboardVisible={this.state.keyboardVisible} onPress={(value) => this.setState({text: this.state.text + value})}/>
      </View>
    );
  }

  onAnswerSheetPress = () => {
    this.setState({keyboardVisible: !this.state.keyboardVisible})
  }
}

styles = {
  container: {
    flex: 3
  },
  answerStyle: {
    flex: 2
  }
}

export default AnswerForm
