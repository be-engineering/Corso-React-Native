import { createStackNavigator, createAppContainer } from 'react-navigation';
import { UserListScreen, UserDeatilScreen, UserSettingsScreen } from './screen';


const RootNavigator = createStackNavigator({
	UserList: UserListScreen,
	UserDetail: UserDeatilScreen,
	UserSettings: UserSettingsScreen
},
{
	initialRouteName: 'UserList'
});

export default createAppContainer(RootNavigator);
