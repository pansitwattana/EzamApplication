import React, { Component } from 'react';
import { WebView } from 'react-native';
// import { WebView } from "react-native-webview-messaging/WebView";

class LaTex extends Component {
  componentDidMount() {
    console.log(this.props.text)
    this.webview.postMessage(this.props.text)
  }

  render() {
    return (
      <WebView 
        ref={(webview) => { this.webview = webview }}
        source={{ uri: 'file:///android_asset/latex.html' }}
        startInLoadingState
        style={{ height: 40 }}
      />
    );
  }
}

export { LaTex }
