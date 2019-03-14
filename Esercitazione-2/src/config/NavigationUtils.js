import { withNavigation } from 'react-navigation';
export const StackNavigationOptions = () => ({
    headerStyle: { backgroundColor: '#29609b' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
});

export const TabNavigationOptions = () => ({
    title:'Sample App',
    headerStyle:{backgroundColor:'#4d3241', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
})

const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('./../res/icon_hamburger.png')}/>
    </TouchableOpacity>
)

export withNavigation(DrawerOpenButton) // HOC