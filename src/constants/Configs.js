import { useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    ToastAndroid,
    Platform,
    Alert
} from 'react-native';
import { Dimensions } from "react-native";
// Dimension Configuration
//----> Use HEIGHT & WIDTH for dynamic height & width throughout your code.
export const { width: WIDTH, height: HEIGHT, } = Dimensions.get('screen');
