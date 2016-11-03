/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Custom from './Custom';

export default class ReactNativeSectionHeaderNotStickyForiOS extends Component {
  render() {
    return (
        <Custom/>
    );
  }
}


AppRegistry.registerComponent('ReactNativeSectionHeaderNotStickyForiOS', () => ReactNativeSectionHeaderNotStickyForiOS);
