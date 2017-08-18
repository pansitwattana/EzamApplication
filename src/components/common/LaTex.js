import React, { Component } from 'react';
import { WebView } from 'react-native';
// import { WebView } from "react-native-webview-messaging/WebView";

class LaTex extends Component {
  componentDidMount() {
    this.webview.postMessage(this.props.text)
  }

  componentDidUpdate() {
    this.webview.postMessage(this.props.text)
  }

  render() {
    return (
      <WebView 
        ref={(webview) => { this.webview = webview }}
        source={{ uri: 'file:///android_asset/index.html' }}
        startInLoadingState
        style={{ height: 50 }}
      />
    );
  }
}

export { LaTex };
