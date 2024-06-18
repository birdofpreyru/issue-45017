/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {AppState, SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state === 'background') {
        console.log('Entering background!');
        webViewRef.current?.stopLoading();
      }
    });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <WebView ref={webViewRef} source={{uri: 'https://reactnative.dev'}} />
    </SafeAreaView>
  );
}

export default App;
