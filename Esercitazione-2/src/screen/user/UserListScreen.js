//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import LottieWrapper from '../../core/LottieWrapper';

import anim from '../assets/anim.json';

class UserListScreen extends Component {

    static navigationOptions = {
        title: 'User App'
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false, // inizialmente a false 
            data: [], // array vuoto
            page: 1, // parametri servizio paginato
            seed: 1, // parametri servizio paginato
            error: null, // parametri servizio paginato
            refreshing: false
        };
    }

    makeAsyncRequest(url: string) {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    // gestisce il refresh dei dati con una nuova chiamta al servizio dopo lo swipe dall alto
    handleRefresh = () => {
        this.setState({
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },() => { this.makeAsyncRequest(); }
        );
    };

    // gestisce il refresh dei dati con una nuova chiamta al servizio dopo lo swipe dal basso (like infintescrolling)
    handleOnNeedMoreData = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeAsyncRequest();
            }
        );
    };


    // quesri metodi sono necessari per la visualizzazione di parti grafiche
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => { // non ha business logic
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };


    render() {
        const { data } = this.state;
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ListItem
                        leftAvatar={{ source: { uri:  item.picture.large } }}
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}
                        avatar={{ uri: item.picture.thumbnail }}
                        containerStyle={{ borderBottomWidth: 0 }}
                    />
                )}
                keyExtractor={item => item.login.uuid}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this.handleOnNeedMoreData}
                onEndReachedThreshold={50}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default UserListScreen;
