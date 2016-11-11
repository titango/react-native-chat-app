import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    marginTop: 250,
    flexDirection: "column",
    // justifyContent: 'space-between'
  },
  box: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    fontSize: 13,
    padding: 10,
    borderColor: "#c9c3c3"
  },
  loginbutton: {
    marginTop: 10,
    width: 100,
    height: 40,
    // borderWidth: 1,
    backgroundColor: "#338369",
    padding: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  textbutton: {
    color: "#FFFFFF",
    fontFamily: "Arial Hebrew"
  }
});

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.box}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.box}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginbutton}>
          <Text style={styles.textbutton}> Sign In </Text>
        </TouchableOpacity>

      </View>
    );
  }

}
