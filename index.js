import React from 'react';
import { AppRegistry } from 'react-native';
import {name as appName} from './app.json';
import configStore from './src/store/configureStore';
import { Provider } from "react-redux";
import { createAppContainer } from 'react-navigation';
import { rootNavigation } from './src/Navigation/rootNavigation'

const store = configStore();
const RNRedux = () => {
   return <Provider store={store}>
        <Navigation/>
    </Provider>
}

let Navigation=createAppContainer(rootNavigation)
AppRegistry.registerComponent(appName, () => RNRedux);
