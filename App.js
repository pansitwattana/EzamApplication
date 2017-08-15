import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header } from './src/components/common'
import AnswerForm from './src/components/AnswerForm'
// import { PinBox, PinBoxList } from './Keyboard2';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Practice Exam'/>
        <AnswerForm />

        {/* <View style={styles.header}>
          <Text>Question</Text>
          <Text
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onPress={() => this.setState({isKeyboardVisible: !this.state.isKeyboardVisible})}>
            {this.state.text}
          </Text>
        </View>
        <PinKeyboard isChildVisible={this.state.isKeyboardVisible} handleKeyboard={this.handleKeyboard}></PinKeyboard> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(239, 239, 244)'
  }
});
