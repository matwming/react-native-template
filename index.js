import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import configStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {rootNavigation} from './src/Navigation/rootNavigation';

const store = configStore();
let Navigation = createAppContainer(rootNavigation);
const RNRedux = () => (
    <Provider store={store}>
        <Navigation/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
