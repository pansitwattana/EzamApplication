import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common'
import AnswerForm from './src/components/AnswerForm'
// import { PinBox, PinBoxList } from './Keyboard2';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Practice Exam' />
        <AnswerForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
