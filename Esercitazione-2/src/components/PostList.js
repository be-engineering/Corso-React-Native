import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import LottieWrapper from "../core/LottieWrapper";

import anim from '../assets/pin.json';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.makeRemoteRequest();
        }, 5000);
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=5`;
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

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CCC",
                    marginLeft: "14%",
                }}
            />
        );
    };

    renderHeader = () => {
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
        return (data.length > 0) ? (
            <FlatList style={style.container}
                data={this.state.data}
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
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
            />
        ) : <LottieWrapper
              width={80}
              height={80}
              anim={anim}/>;
    }
}
const style = StyleSheet.create({
    container: {
        marginTop: 36
    }
});
