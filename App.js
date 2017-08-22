import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import firebase from 'firebase'
import AnswerForm from './src/components/AnswerForm'
import LoginForm from './src/components/LoginForm'

const config = require('./configs/firebase.json')

// import { PinBox, PinBoxList } from './Keyboard2';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
    console.log(firebase.auth().currentUser)
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene 
            key='login' 
            component={LoginForm}
            title='Login'
          />
          <Scene 
            key='answer'
            component={AnswerForm}
            title='Answer'
            back={false}
            initial
          />
        </Scene>
      </Router>
    )
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header text='Practice Exam' />
//         <AnswerForm />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff'
//   }
// });
