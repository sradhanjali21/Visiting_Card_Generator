import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Appnavigator from '../navigation/Appnavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Appnavigator />
    </NavigationContainer>
  );
}
