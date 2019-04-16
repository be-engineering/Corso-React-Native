import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform} from 'react-native'

import {createTabNavigator, createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import FriendsListScreen from './FriendListScreen'
import ChatListScreen from './ChatListScreen'
import ChatScreen from './ChatScreen'
import LoginScreen from './LoginScreen'
import SettingScreen from './SettingScreen'
import UserProfileScreen from './UserProfileScreen'
import AdvancedScreen from './AdvancedScreen'

//Tab
const Tab = createTabNavigator({
    friendslist:{screen:FriendsListScreen},
    chatlist:{screen:ChatListScreen}
},{
    tabBarOptions:{
        activeTintColor:'#4d3241',
        style:{backgroundColor:Platform.select({ios:'white', android:'#4d3241'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'#fff'})},
        indicatorStyle:{backgroundColor:'#fff'},
    }
})

const TabNavigationOptions = (props) => ({
    title:'Sample App',
    headerStyle:{backgroundColor:'#4d3241', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
    headerLeft:<DrawerOpenButton {...props} />
})

const StackNavigationOptions = (props) => ({
    headerStyle:{backgroundColor:'#4d3241'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    headerBackTitle:null,
})

export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('./../res/icon_hamburger.png')}/>
    </TouchableOpacity>
)

//Stack
const Stack = createStackNavigator({
    root:{screen:Tab, navigationOptions:TabNavigationOptions},
    chat:{screen:ChatScreen},
    advanced:{screen:AdvancedScreen}
},{
    navigationOptions:StackNavigationOptions,
})

const Stack_Setting = createStackNavigator({
    root:{screen:SettingScreen}
},{
    navigationOptions:StackNavigationOptions,
    initialRouteName: 'root'
})

//Drawer
const Drawer = createDrawerNavigator({
    main:{
        screen:Stack
    },
    setting:{
        screen:
        Stack_Setting
    }
},{
    navigationOptions:{
        drawerLockMode:'locked-closed',
    },
    backBehavior:'none',
    initialRouteName: 'main'
})

//Modal Stack (root)
const ModalStack = createStackNavigator(
    {
    logout:{screen:LoginScreen},
    login:{screen:Drawer},
    userprofile:{screen:UserProfileScreen}
},{
    mode:'modal',
    headerMode:'none'
})

export default createAppContainer(Stack_Setting);
