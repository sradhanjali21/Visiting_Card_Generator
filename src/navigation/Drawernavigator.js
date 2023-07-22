import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {INFO, QRGENERATOR, QRSCANNER, THREELINE} from '../constants/ImagePath';
import Homestack from './Homestack';
import Customdrawer from '../screens/Drawerpages/Customdrawer';
import GenerateQR from '../screens/Drawerpages/GenerateQR';
import ScanQR from '../screens/Drawerpages/ScanQR';

const Drawer = createDrawerNavigator();

const Drawernavigator = ({}) => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <Customdrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea', 
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Homestack}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default Drawernavigator;
