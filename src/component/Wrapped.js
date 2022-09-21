import React, {Children} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Wrapped({children, style}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        ...style,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {children}
    </SafeAreaView>
  );
}

