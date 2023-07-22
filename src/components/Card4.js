import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { HEIGHT, WIDTH } from '../constants/Configs';
import {
  white,
} from '../constants/Colors';
import {
  DESIGNBACK,
} from '../constants/ImagePath';
import QRcode from 'react-native-qrcode-svg';

export default Card4 = ({ navigation, val }) => {
  const [showModal, setshowModal] = useState(false);
  const [qrCodeRef, setQrCodeRef] = useState('');

  return (
    <>
      <View style={{ ...styles.main }}>
        <View style={{
          ...styles.card,
          ...styles.overlay2
        }}>
          <Image style={styles.designback} source={DESIGNBACK} />
          <View style={{ ...styles.qrcontainer }}>
            <View style={{ ...styles.qrview }}>
              <QRcode
                value={val}
                color={'white'}
                backgroundColor="black"
                size={145}
                getRef={ref => setQrCodeRef(ref)}
              />
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
  designback: {
    flex: 2 / 9,
    height: HEIGHT * 0.27,
    paddingLeft: 30,
    borderBottomLeftRadius: 10,
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
  qrcontainer: {
    flex: 6.9 / 9,
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
  // overlay1: {
  //   top: 0,
  //   left: 0,
  //   zIndex: 1,
  // },
  overlay2: {
    top: 100,
    left: 20,
    zIndex: 2,
  },
});
