import * as React from 'react';

import { StyleSheet, SafeAreaView, Switch, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SwitchContextProvider, useSwitchState } from './switch-context';

const HomeScreen = () => {
  const switchState = useSwitchState();

  return (
    <SafeAreaView>
      <Switch
        style={styles.switch}
        ios_backgroundColor="#3e3e3e"
        onValueChange={switchState.toggle}
        value={switchState.isOn}
      />
    </SafeAreaView>
  );
};

const AwayScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.centeredText}>Hello, World!</Text>
    </SafeAreaView>
  );
};

const LoginButton = (): JSX.Element => {
  const navigation = useNavigation();
  const switchState = useSwitchState();

  const handleClick = () => {
    navigation.navigate('Away');
  };

  return (
    <Button title="Login"
            color="white"
            disabled={!switchState.isOn}
            onPress={handleClick} />
  );
};

const MainStack = createStackNavigator();

const MainStackScreen = (): JSX.Element => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        }, 
        headerTintColor: 'white',
      }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerRight: LoginButton}} />
      <MainStack.Screen name="Away" component={AwayScreen} options={{title: "Hello"}} />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <SwitchContextProvider>
      <NavigationContainer>
        {MainStackScreen()}
      </NavigationContainer>
    </SwitchContextProvider>
  );
};

const styles = StyleSheet.create({
  switch: {
    margin: 20,
  },
  centeredText: {
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
  },
});

export default App;
