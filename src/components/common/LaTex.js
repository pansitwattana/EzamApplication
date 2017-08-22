import React, { Component } from 'react';
import { WebView } from 'react-native';
// import { WebView } from "react-native-webview-messaging/WebView";

class LaTex extends Component {

  onMessage(event) {
    console.log('On Message', event.nativeEvent.data);
  }

  sendEquation(text) {
    console.log(text);
    this.webview.postMessage(text);
  }

  render() {
    return (
      <WebView
        ref={webview => {
          this.webview = webview;
        }}
        source={{ uri: 'file:///android_asset/latex.html' }}
        startInLoadingState
        style={{ height: 40 }}
        onMessage={this.onMessage}
        onLoadEnd={() => this.sendEquation(this.props.text)}
      />
    );
  }
}

export { LaTex };
