import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import { store} from "./src/store/Store";

import React from "react";

import {Navig} from "./src/Navig";
export let {width,height}=Dimensions.get('screen')

export default function App() {

  return (
    <Provider store={store}>
         <Navig/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width:width-10,

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
