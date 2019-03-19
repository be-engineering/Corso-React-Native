# Corso di Formazione Professionale su React Native
### A cura di [Be Engineering srl](https://www.linkedin.com/company/be-engineering-srl/about/?viewAsMember=true), Docente [Christian Chiama](https://www.linkedin.com/in/christian-chiama/) ##
### per [Innovaformazione](https://www.innovaformazione.net) di Dario Carrassi ###


### [Esercitazione 1](https://github.com/be-engineering/Corso-React-Native/tree/master/Esercitazione-1) ###
* Prima App con React Native

### [Esercitazione 2](https://github.com/be-engineering/Corso-React-Native/tree/master/Esercitazione-2) ###
> L App utilizza le RESTful API online disonibili al seguente indirizzo: https://randomuser.me , utilizzando il metodo fetch semplice, e visualizza l insimee dei dati in una FlatList. Sono utiizzati anche i metodi che implementano il pull-to-refresh, e l infinite-scrolling grazie alla possibilità di paginare le richieste.

##### Componenti Utilizzati:
  * FlatList ([React Native](https://facebook.github.io/react-native/))
  * ListItem ([React Native Elements](https://react-native-training.github.io/react-native-elements/))
  * Animazioni con Lottie Arbnb ([Lottie](https://github.com/airbnb/lottie-react-native#readme))

### [Esercitazione 3](https://github.com/be-engineering/Corso-React-Native/tree/master/Esercitazione-3) ###
> L App utilizza le RESTful API online disonibili al seguente indirizzo: https://randomuser.me , utilizzando il metodo fetch semplice, e visualizza l insimee dei dati in una FlatList. Sono utiizzati anche i metodi che implementano il pull-to-refresh, e l infinite-scrolling grazie alla possibilità di paginare le richieste. Implemenetazione della navigazione con React Navigation, utilizzando il Drawer, Tab e BottomTab navigation con stack.

##### Componenti Utilizzati e argomenti trattati per l esercitazione
  * FlatList ([React Native](https://facebook.github.io/react-native/))
  * ListItem ([React Native Elements](https://react-native-training.github.io/react-native-elements/))
  * Animazioni con Lottie Arbnb ([Lottie](https://github.com/airbnb/lottie-react-native#readme))
  * React Navigation ([React Navigation](https://reactnavigation.org))
    * Tab Navigation ([doc](https://reactnavigation.org/docs/en/tab-based-navigation.html))
    * Drawer Navigation ([doc](https://reactnavigation.org/docs/en/drawer-based-navigation.html))
    * BottomTab Navigation ([doc](https://reactnavigation.org/docs/en/bottom-tab-navigator.html))
    * Material BottomTab Navigation ([doc](https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html))
    * Material Top Tab Navigation ([doc](https://reactnavigation.org/docs/en/material-top-tab-navigator.html))

### [Esercitazione Module Nativi](https://github.com/be-engine4ering/Corso-React-Native/tree/master/Esercitazione-4) ###
* Implemenetazione di moduli nativi attraverso il bridge di React -native. La lezione verte sulla creazione di due mudili scritti in java, e la scrittura di una semplice App che li utilizza. E' una delle parti più complicate, ma allo stesso tempo interessante, rispetto ad i classici argomenti trattati nei corsi precedenti. E' necessario avere dei rudimenti di sviluppo Android.

### Link Uili
* [Redux](https://redux.js.org/introduction/examples)
* [Expo](https://docs.expo.io/versions/v32.0.0/introduction/installation/)
* [React Navigation](https://reactnavigation.org)
* [React Native Navigation](https://github.com/wix/react-native-navigation)
* [App Expo React Navigation](https://expo.io/@react-navigation/NavigationPlayground)


### Alias da insere nella sezione script del package.json
* "start": "node ./script/start.js"  -> da terminale ```yarn start oppure npm start```
* "android": "react-native run-android"  -> da terminale ```yarn android oppure npm run android```
* "ios": "react-native run-ios"  -> da terminale ```yarn ios oppure npm run ios```
* "emu:android": "node ./script/emulator.js"  -> da terminale ```yarn emu:android oppure npm run emu:android```
* "xcode": "open ios/[nome progetto].xcworkspace/"  -> da terminale ```yarn android oppure npm run android```
* "build:ios": ". ./script/ios/build.sh"  -> da terminale ```yarn build:android oppure npm run build:android```
* "build:android": ". ./script/ios/build.sh"  -> da terminale ```yarn build:ios oppure npm run build:ios```
* "clean": "node ./script/clean.js"  -> da terminale ```yarn clean oppure npm run clean```

### [Procedura di Release](https://github.com/be-engineering/Corso-React-Native/blob/master/docs/Release.md)

