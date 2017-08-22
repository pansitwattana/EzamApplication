import React, { Component } from 'react';
import { WebView } from 'react-native';
// import { WebView } from "react-native-webview-messaging/WebView";

class Input extends Component {
  componentDidUpdate() {
    console.log('component did update')
    this.updateLaTex(this.props)
  }

  updateLaTex(data) {
    if (data.text || data.keystroke || data.cmd || data.active === false) {
      console.log('updated equation')
      console.log(data)
      this.webview.postMessage(JSON.stringify(data))
    }
  }

  render() {
    return (
      <WebView 
        ref={(webview) => { this.webview = webview }}
        source={{ uri: 'file:///android_asset/index.html' }}
        startInLoadingState
        onLoadEnd={() => this.updateLaTex(this.props)}
      />
    );
  }
}

export { Input };
