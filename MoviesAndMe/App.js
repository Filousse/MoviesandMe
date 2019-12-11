import * as React from 'react';
import Search from './components/Searching.js'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <Search/>
    );
  }
}