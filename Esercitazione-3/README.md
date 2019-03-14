# react-navigation-sample
Sample App for react-navigation


<img src="https://github.com/benevbright/react-navigation-sample/blob/master/docs/react-navigation-sample.gif?raw=true">


# Usage
```
npm install
react-native run-ios 
react-native run-android
```

# Hierarchy
App(Modal Stack)  
├─ Signed Out Page  
├─ Signed in Page(Tab)  
│ ├─ Friend List Page  
│ └─ Chat List Page ─> Chat Room Page ─> Advanced Page  
└─ Photo Viewer Page  

# Advanced Technique

## Pop to Root
See `src/AdvancedScreen.js`
