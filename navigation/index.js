import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Forgot from '../screens/Forgot';
import Signup from '../screens/Signup';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator(
    {
        Welcome,
        Login,
        Explore,
        Forgot,
        Signup,
        Browse,
        Product,
        Settings
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white,
                borderBottomColor: 'transparent',
                elevation: 0
            },
            headerBackImage: () => <Image source={require('../assets/icons/back.png')} />,
            headerTitle: () => null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                paddingRight: theme.sizes.base,
                marginLeft: theme.sizes.base * 1.3
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: theme.sizes.base,
                marginLeft: theme.sizes.base
            }
        }
    }
);

export default createAppContainer(screens);
