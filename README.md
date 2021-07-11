# README

A small demo that illustrates a navigation-based app that uses the React "Context" API to share state between two sibling components, a switch and a navigation bar button.

![<Display Name>](<Website URL>)

#### Installing dependencies 

At the time of this writing, the project was based off of the React Native navigation tutorial:

https://reactnavigation.org/docs/getting-started

These instructions are for iOS. Following the first two pages of the above tutorial, dependencies should be installed as follows:

```
$ npm install @react-navigation/native
$ npm install react-native-reanimated \
    react-native-gesture-handler \
    react-native-screens \
    react-native-safe-area-context \
    @react-native-community/masked-view
$ npm install @react-navigation/stack
```

Then, install the pods via CocoaPods:

```
$ npx pod-install ios
```

Build the project by running:

```
$ npx react-native run-ios
```

#### Acknowledgments

The project was written with help from this [entry on Stack Overflow.](https://stackoverflow.com/q/68237687/155167)

Additional guidance was gleaned from the article ["Application State Management with React."](https://kentcdodds.com/blog/application-state-management-with-react)

###### Touched: 2021-07-10
