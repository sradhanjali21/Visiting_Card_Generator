import React, {useState} from 'react';
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
  ImageBackground
} from 'react-native';
import {HEIGHT, WIDTH} from '../../src/constants/Configs';
import {
  ADDRESSCARD,
  EMAILCARD,
  FLIP,
  IMAGE,
  LINES,
  PHONECARD,
  PROFILEIMAGE,
  QRGENERATOR,
  QRSCANNER,
  THREELINE,
} from '../../src/constants/ImagePath';
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
} from '../../src/constants/Colors';

export default Page_3 = ({navigation, route}) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <View style={{...styles.main}}>
        {/* upper card start */}
        <View style={{...styles.upperCard, ...styles.overlay1}}>
          {/*  LOGOS START  */}
          <View style={{...styles.div}}>
            <View style={styles.threeline}>
              <Pressable onPress={() => navigation.openDrawer()}>
                <Image source={THREELINE} style={{...styles.threelinelogo}} />
              </Pressable>
            </View>

            <View style={styles.qrgenerator}>
              <Pressable>
                <Image source={QRGENERATOR} style={{...styles.qr}} />
              </Pressable>
            </View>

            <View style={styles.qrscanner}>
              <Pressable onPress={() => navigation.navigate('QRscanner')}>
                <Image source={QRSCANNER} style={{...styles.qr}} />
              </Pressable>
            </View>
          </View>
        </View>
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
  imageee: {
    width: WIDTH * 0.08,
    height: HEIGHT * 0.04,
  },
  card: {
    flexDirection: 'row',
    height: HEIGHT * 0.25,
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
  press: {
    height: '100%',
    width: WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 20,
  },
  qrcontainer: {
    flex: 6 / 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrview: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.19,
    backgroundColor: white,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgflip: {
    height: HEIGHT * 0.032,
    width: WIDTH * 0.057,
    marginLeft: 2,
    marginTop: 4,
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
  overlay1: {
    top: 0,
    left: 0,
    zIndex: 1,
  },
  overlay2: {
    top: 60,
    left: 20,
    zIndex: 2,
  },
});
