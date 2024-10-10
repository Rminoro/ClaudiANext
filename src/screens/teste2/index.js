import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../../../';
import { name as appName } from './app.json';

const Main = () => <App />;

AppRegistry.registerComponent(appName, () => Main);
