import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import firebase from 'firebase'
import AnswerForm from './src/components/AnswerForm'
import LoginForm from './src/components/LoginForm'

// import { PinBox, PinBoxList } from './Keyboard2';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAtau_ldYK1E4al5ljsTxtVw4Gfdnajk_I',
      authDomain: 'ezam-51dcc.firebaseapp.com',
      databaseURL: 'https://ezam-51dcc.firebaseio.com',
      projectId: 'ezam-51dcc',
      storageBucket: 'ezam-51dcc.appspot.com',
      messagingSenderId: '448662049456'
    });
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
