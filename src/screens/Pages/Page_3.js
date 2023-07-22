import React, { useState, useEffect, useRef } from 'react';
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
  TouchableOpacity,
  Animated,
} from 'react-native';
import { HEIGHT, WIDTH } from '../../constants/Configs';
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
import {
  ADDRESSCARD,
  EMAILCARD,
  FLIP,
  IMAGE,
  PHONECARD,
  APPTIMATEQR,
  DESIGNBACK,
  PROFILEIMAGE,
  QRGENERATOR,
  QRSCANNER,
  THREELINE,
} from '../../constants/ImagePath';
import Uppercard from '../../components/Uppercard';
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';

export default Page_3 = ({ navigation, route }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState(0);
  const [mer, setMer] = useState('');
  const { paramKey5 } = route.params;
  const { paramKey6 } = route.params;


  useEffect(() => {
    animatedValue.addListener(({ value }) => {
      setValue(value);
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue]);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    //when animatedValue is 89, frontOpacity will be 1 (fully opaque),
    //when animatedValue is 90, frontOpacity will be 0 (fully transparent).
    outputRange: [1, 0],
  });

  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  const flipCard = () => {
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0, //rotate
        friction: 8, //rotation speed
        tension: 10, //smoothness
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <>
      <View style={styles.main}>
        <View>
          <View style={{ ...styles.upperCard, ...styles.overlay1 }}>
            {/*  LOGOS START  */}


            <View style={{ ...styles.div }}>
              <View style={styles.threeline}>
                <Pressable onPress={() => navigation.openDrawer()}>
                  <Image source={THREELINE} style={{ ...styles.threelinelogo }} />
                </Pressable>
              </View>

              <View style={styles.qrgenerator}>
                <Pressable onPress={() => navigation.navigate('GenerateQR')}>
                  <Image source={QRGENERATOR} style={{ ...styles.qr }} />
                </Pressable>
              </View>

              <View style={styles.qrscanner}>
                <Pressable onPress={() => navigation.navigate('ScanQR')}>
                  <Image source={QRSCANNER} style={{ ...styles.qr }} />
                </Pressable>
              </View>
            </View>
          </View>

          {/* ------------CARD3--------------------------------------------------------------------------- */}

          <Animated.View style={[frontAnimatedStyle, { opacity: frontOpacity }]}>
            <View
              style={{
                ...styles.card,
                flexDirection: 'row',
                ...styles.overlay2,
              }}>
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
                  <Text style={styles.nameTxt}>{route.params.paramKey1}</Text>
                </View>

                {/* POSITION  */}
                <View style={styles.positionView}>
                  <Text style={styles.positionTxt}>
                    {route.params.paramKey3}
                  </Text>
                </View>

                {/* ORGANISATION */}
                <View style={styles.organisationView}>
                  <Text style={styles.organisationTxt}>
                    {route.params.paramKey4}
                  </Text>
                </View>

                {/* PHONE NUMBER  */}
                <View style={styles.phoneView}>
                  <View style={{}}>
                    <Image style={styles.phoneImg} source={PHONECARD} />
                  </View>

                  <View>
                    <Text style={styles.phoneTxt}>
                      {route.params.paramKey6}
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
                      {route.params.paramKey2}
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
                      {route.params.paramKey5}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>



          {/* -------------CARD4------------------------------------------------------------------------------- */}
          <Animated.View style={[backAnimatedStyle, { opacity: backOpacity }]}>
            <Card4

              val={[
                { data: route.params.paramKey1, mode: 'alphannumeric' },
                { data: "\n", mode: 'alphannumeric' },
                { data: route.params.paramKey2, mode: 'alphannumeric' },
                { data: "\n", mode: 'alphannumeric' },
                { data: route.params.paramKey3, mode: 'alphannumeric' },
                { data: "\n", mode: 'alphannumeric' },
                { data: route.params.paramKey4, mode: 'alphannumeric' },
                { data: "\n", mode: 'alphannumeric' },
                { data: route.params.paramKey5, mode: 'alphannumeric' },
                { data: "\n", mode: 'alphannumeric' },
                { data: route.params.paramKey6, mode: 'alphannumeric' }
              ]} />

          </Animated.View>
        </View>
        <TouchableOpacity onPress={flipCard} style={styles.flipcontainer}>
          <Image style={{ ...styles.imgflip }} source={FLIP} />
          <Text style={{ color: '#313131', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Tap to Flip</Text>
        </TouchableOpacity>
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
    height: HEIGHT * 0.27,
    width: WIDTH * 1,
    alignItems: 'center',
    backgroundColor: '#00B9BD',
    position: 'absolute',
  },
  threelinelogo: {
    height: HEIGHT * 0.035,
    width: WIDTH * 0.095,
  },
  flipcontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 400,
    borderColor: 'black',
    height: HEIGHT * 0.1,
    width: WIDTH * 0.3,
  },
  overlay1: {
    top: 25,
  },
  overlay2: {
    top: 100,
    left: 20,
    zIndex: 2,
  },
  pic: {
    height: HEIGHT * 0.27,
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
    marginVertical: 15,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  phoneImg: {
    height: HEIGHT * 0.025,
    width: WIDTH * 0.055,
    marginHorizontal: 5,
  },
  emailView: {
    marginVertical: 10,
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
    marginVertical: 12,
    paddingLeft: 5,
    flexDirection: 'row',
    height: HEIGHT * 0.065,
  },
  addressImg: {
    height: HEIGHT * 0.029,
    width: WIDTH * 0.05,
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
    height: HEIGHT * 0.27,
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
    marginTop: 30,
    alignSelf: 'center',
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
});
