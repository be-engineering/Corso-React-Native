import React from "react";
import { View, StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import PostList from "./components/PostList";
import LottieWrapper from "./core/LottieWrapper";
import anim from './assets/anim.json';
import { UserListScreen, UserDeatilScreen, UserSettingsScreen } from './screen';
import { StackNavigationOptions } from "./config/NavigationUtils";


const RootNavigator = createStackNavigator({
   UserList: UserListScreen,
   UserDetail: UserDeatilScreen,
   UserSettings: UserSettingsScreen
},
  {
   navigationOptions: StackNavigationOptions
   initialRouteName: 'UserList'
});



export default createAppContainer(RootNavigator);
