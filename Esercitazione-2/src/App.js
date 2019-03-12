import React from "react";
import { View, StyleSheet } from 'react-native';
import PostList from "./components/PostList";
import LottieWrapper from "./core/LottieWrapper";
import anim from './assets/anim.json';

class PostListApp extends React.Component {
  render() {
    return (
        <PostList {...this.props}/>
    );
  }
}

export default PostListApp;
