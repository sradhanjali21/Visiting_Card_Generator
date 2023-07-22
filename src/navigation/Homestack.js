import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Page_1 from '../screens/Pages/Page_1';
import Page_2 from '../screens/Pages/Page_2';
import Page_3 from '../screens/Pages/Page_3';
import ScanQR from '../screens/Drawerpages/ScanQR';
import GenerateQR from '../screens/Drawerpages/GenerateQR';
import Developers from '../screens/Drawerpages/Developers';
import AboutUs from '../screens/Drawerpages/AboutUs';
// import Page_4 from '../screens/Pages/Page_4';

export default Homestack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Page_1">
      {/* <Stack.Screen name="QRscanner" component={QRscanner} /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="Page_1"
        component={Page_1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Page_2"
        component={Page_2}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Page_3"
        component={Page_3}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Page_4"
        component={Page_4}
      /> */}
      {/* <Stack.Screen options={{ headerShown: false }} name="Drawernavigation" component={Drawernavigation} /> */}
      {/* <Stack.Screen options={{ headerShown: false }} name="GenerateQR" component={GenerateQR} /> */}
                <Stack.Screen options={{ headerShown: false }} name="ScanQR" component={ScanQR} />
                <Stack.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUs} />
                <Stack.Screen options={{ headerShown: false }} name="Developers" component={Developers} />
                <Stack.Screen options={{ headerShown: false }} name="GenerateQR" component={GenerateQR} />
    </Stack.Navigator>
  );

};
