import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '~/screens/Login';
import Movies from '~/screens/Movies';
import Profile from '~/screens/Profile';
import Player from '~/screens/Player';

import { colors } from './styles';

export default isSigned =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        App: createStackNavigator(
          {
            Home: createBottomTabNavigator(
              {
                Movies,
                Profile,
              },
              {
                tabBarOptions: {
                  activeTintColor: colors.light,
                  style: {
                    borderTopColor: 'transparent',
                    backgroundColor: colors.dark,
                  },
                },
              }
            ),
            Player,
          },
          {
            headerMode: 'none',
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Login',
      }
    )
  );
