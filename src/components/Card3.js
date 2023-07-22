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
import { HEIGHT, WIDTH } from '../constants/Configs';
import {
  ADDRESSCARD,
  EMAILCARD,
  FLIP,
  IMAGE,
  PHONECARD,
  PROFILEIMAGE,
  QRGENERATOR,
  QRSCANNER,
  THREELINE,
} from '../constants/ImagePath';
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
} from '../constants/Colors';

export default Card3 = ({ navigation, route }) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <View style={{ ...styles.main }}>
        <View
          style={{ ...styles.card, flexDirection: 'row', ...styles.overlay2 }}>
          <View style={{ ...styles.cardimage }}>
            <Image source={PROFILEIMAGE} style={styles.pic} />
          </View>

          <View
            style={{
              flex: 5 / 9,
              marginLeft: 45,
            }}>
            {/* NAME */}
            <View style={styles.nameView}>
              <Text style={styles.nameTxt}>
                {/* {route.params.paramKey1} */}
              </Text>
            </View>

            {/* POSITION  */}
            <View style={styles.positionView}>
              <Text style={styles.positionTxt}>
                {/* {route.params.paramKey3} */}
              </Text>
            </View>

            {/* ORGANISATION */}
            <View style={styles.organisationView}>
              <Text style={styles.organisationTxt}>
                {/* {route.params.paramKey4} */}
              </Text>
            </View>

            {/* PHONE NUMBER  */}
            <View style={styles.phoneView}>
              <View style={{}}>
                <Image style={styles.phoneImg} source={PHONECARD} />
              </View>

              <View>
                <Text style={styles.phoneTxt}>
                  {/* {route.params.paramKey6} */}
                </Text>
              </View>
            </View>

            {/* EMAIL */}
            <View style={styles.emailView}>
              <View style={{}}>
                <Image style={styles.emailImg} source={EMAILCARD} />
              </View>

              <View>
                <Text style={styles.emailTxt}>
                  {/* {route.params.paramKey2} */}
                </Text>
              </View>
            </View>

            {/* ADDRESS  */}
            <View style={styles.addressView}>
              <View style={{}}>
                <Image style={styles.addressImg} source={ADDRESSCARD} />
              </View>

              <View>
                <Text style={styles.addressTxt}>
                  {/* {route.params.paramKey5} */}
                </Text>
              </View>
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
    backgroundColor: white,
  },

  upperCard: {
    height: HEIGHT * 0.3,
    width: WIDTH * 1,
    alignItems: 'center',
    backgroundColor: '#00B9BD',
    position: 'absolute',
  },
  pic: {
    height: HEIGHT * 0.25,
    width: WIDTH * 0.365,

    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  nameView: {
    marginVertical: 5,
    paddingLeft: 5,
  },
  nameTxt: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  positionView: {
    marginVertical: 2,
    paddingLeft: 5,
  },
  positionTxt: {
    color: white,
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'flex-start',
  },
  organisationView: {
    paddingLeft: 5,
  },
  organisationTxt: {
    color: white,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  phoneView: {
    marginVertical: 12,

    paddingLeft: 5,
    flexDirection: 'row',
  },
  phoneImg: {
    height: HEIGHT * 0.025,
    width: WIDTH * 0.055,

    marginHorizontal: 5,
  },
  emailView: {
    marginVertical: 7,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  emailImg: {
    height: HEIGHT * 0.025,
    width: WIDTH * 0.065,
    marginHorizontal: 5,
  },
  emailTxt: {
    color: white,
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  phoneTxt: {
    color: white,
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  addressView: {
    marginVertical: 8,

    paddingLeft: 5,
    flexDirection: 'row',
    height: HEIGHT * 0.065,
  },
  addressImg: {
    height: HEIGHT * 0.029,
    width: WIDTH * 0.050,

    marginHorizontal: 5,
  },
  addressTxt: {
    color: white,
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  div: {
    flexDirection: 'row',
    height: HEIGHT * 0.1,
    width: WIDTH * 1,
    marginTop: 25,
  },
  threelinelogo: {
    height: HEIGHT * 0.035,
    width: WIDTH * 0.095,
  },
  qr: {
    height: HEIGHT * 0.042,
    width: WIDTH * 0.09,
  },
  card: {
    height: HEIGHT * 0.25,
    width: WIDTH * 0.9,
    backgroundColor: '#313131',
    borderRadius: 10,
    elevation: 7,
    marginTop: 70,
    position: 'absolute',
  },
  press: {
    height: '100%',
    width: WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 20,
  },
  cardimage: {
    flex: 3 / 9,
  },

  imgflip: {
    height: HEIGHT * 0.032,
    width: WIDTH * 0.06,

    marginTop: 5,
    alignSelf: 'center',
  },

  // overlay1: {
  //   top: 0,
  //   left: 0,
  //   zIndex: 1,
  // },
  // overlay2: {
  //   top: 60,
  //   left: 20,
  //   zIndex: 2,
  // },
});
