import React from 'react';
import Animation from 'lottie-react-native';
import { View, StyleSheet, Animated } from 'react-native';

type Props = {
   anim: {},
   width: number,
   height: number,
   duration: number,
   loop: bool;
}

type State = {
 progress: number;
}

export default class LottieWrapper extends React.Component<Props, State> {
 constructor(props:Props) {
   super(props);
   this.state = {
     progress: new Animated.Value(0),
   };
 }

 componentDidMount() {
   this.animation.play();
 }

 animatedProgressive() {
   const { progress } = this.state;
   const { duration } = this.props;
   Animated.timing(progress, {
     toValue: 1,
     duration,
   }).start();
 }

 render() {
   const {
     width, height, anim, loop,
   } = this.props;
   return (
     <View style={styles.container}>
       <View>
         <Animation
           ref={(animation) => {
             this.animation = animation;
           }}
           style={{
             width: width || 380,
             height: height || 380,
           }}
           loop={loop || true}
           source={anim}
         />
       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ffffff'
 },
});