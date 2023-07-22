import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { HEIGHT, WIDTH } from '../../constants/Configs';
import {
  ADD,
  ADDRESSCARD,
  EMAILCARD,
  FLIP,
  IMAGE,
  PHONECARD,
  PROFILEIMAGE,
  QRGENERATOR,
  QRSCANNER,
  THREELINE,
} from '../../constants/ImagePath';
import {
  black,
  cyan,
  green,
  grey,
  orange,
  purple,
  red,
  transparent,
  white,
  yellow,
} from '../../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';

export default Page_1 = ({ navigation, route }) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <View style={{ ...styles.main }}>
        {/* upper card start */}
        <View style={{ ...styles.upperCard }}>
          {/*  LOGOS START  */}

          <View style={{ ...styles.div }}>
            <View style={styles.threeline}>
              <Pressable onPress={() => navigation.openDrawer()}>
                <Image source={THREELINE} style={{ ...styles.threelinelogo }} />
              </Pressable>
            </View>

            <View style={styles.qrgenerator}>
              <Pressable
                onPress={() => navigation.navigate('GenerateQR')}>
                <Image source={QRGENERATOR} style={{ ...styles.qr }} />
              </Pressable>
            </View>

            <View style={styles.qrscanner}>
              <Pressable
                // style={{ ...styles.press, marginLeft: 0 }}
                onPress={() => navigation.navigate('ScanQR')}>
                <Image source={QRSCANNER} style={{ ...styles.qr }} />
              </Pressable>
            </View>
          </View>
        </View>


        <View style={{ ...styles.card, ...styles.overlay2 }}>
          <View style={{}}>
            <Pressable
              style={{ ...styles.addpress }}
              onPress={() => {
                navigation.navigate('Page_2');
              }}>
              <Image
                source={ADD}
                style={{ width: WIDTH * 0.07, height: HEIGHT * 0.03 }}
              />
              <View>
                <Text
                  style={{
                    color: white,
                  }}>
                  ADD
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00B9BD"
          translucent={true}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperCard: {
    height: HEIGHT * 0.3,
    width: WIDTH * 1,
    alignItems: 'center',
    backgroundColor: '#00B9BD',
    position: 'absolute',
  },
  div: {
    flexDirection: 'row',
    height: HEIGHT * 0.1,
    width: WIDTH * 1,
    alignItems: 'center',
    marginTop: 25,
  },
  card: {
    flexDirection: 'row',
    height: HEIGHT * 0.27,
    width: WIDTH * 0.9,
    backgroundColor: '#313131',
    borderRadius: 10,
    elevation: 7,
    marginTop: 70,
    position: 'absolute',
  },
  threelinelogo: {
    height: HEIGHT * 0.035,
    width: WIDTH * 0.095,
  },
  qr: {
    height: HEIGHT * 0.042,
    width: WIDTH * 0.09,
  },
  addpress: {
    height: HEIGHT * 0.25,
    width: WIDTH * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  threeline: {
    position: 'absolute',
    left: '5%',
  },
  qrgenerator: {
    position: 'absolute',
    right: '20%',
  },
  qrscanner: {
    position: 'absolute',
    right: '5%',
  },
  overlay2: {
    top: 100,
    left: 20,
    zIndex: 2,
  },
});
