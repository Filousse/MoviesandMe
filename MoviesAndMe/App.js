import * as React from 'react';
import Navigation from './Navigation/Navigation'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}
