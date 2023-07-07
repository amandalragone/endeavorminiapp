/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const App = props => {
  // const {buttonText, buttonColor} = props;

  useEffect(() => {
    console.log('props is', props);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const [text, onChangeText] = useState('');

  const onButtonPress = () => {
    const input =
      text.length === 0
        ? 'No text has been entered.'
        : `The text entered is: '${text}'.`;
    console.log(input);
    Alert.alert(input);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[styles.innerView]}>
        <Pressable style={styles.buttonStyle} onPress={onButtonPress}>
          <Text
            style={styles.buttonText}
            color={props.buttonColor ?? '#536040'}>
            {props.buttonText ?? 'Press Me!'}
          </Text>
        </Pressable>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Text"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  innerView: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    borderColor: '#0000ff',
    borderWidth: 2,
    borderRadius: 16,
  },
  buttonStyle: {
    padding: 16,
    marginHorizontal: 16,
    borderColor: '#000000',
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 12,
  },
});

export default App;
