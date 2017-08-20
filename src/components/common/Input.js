import React, { Component } from 'react';
import { WebView } from 'react-native';
// import { WebView } from "react-native-webview-messaging/WebView";

class Input extends Component {
  componentDidUpdate() {
    if (this.props.text || this.props.keystroke || this.props.cmd || this.props.active === false) {
      console.log('updated equation')
      console.log(this.props)
      this.webview.postMessage(JSON.stringify(this.props))
    }
  }

  render() {
    return (
      <WebView 
        ref={(webview) => { this.webview = webview }}
        source={{ uri: 'file:///android_asset/index.html' }}
        startInLoadingState
      />
    );
  }
}

export { Input };
