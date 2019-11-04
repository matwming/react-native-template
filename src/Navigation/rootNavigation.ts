import { createStackNavigator } from 'react-navigation-stack';
import App from '../App'
export const rootNavigation = createStackNavigator({
    Home: {
        screen: App,
        path:'app'
    }
})

