import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import { HEIGHT, WIDTH } from '../../constants/Configs';
import LinearGradient from 'react-native-linear-gradient';
import { YELLOW, red } from './src/constants/Colors';
import { QRGENERATOR, QRSCANNER, THREELINE } from '../../constants/ImagePath';
import { isValidEmail, isValidName, isValidPhoneNumber, isValidPosition } from '../../components/Validation';

export default Page_2 = ({ navigation }) => {
  const [nam, setNam] = useState('');
  const [ema, setEma] = useState('');
  const [pos, setPos] = useState('');
  const [org, setOrg] = useState('');
  const [add, setAdd] = useState('');
  const [pho, setPho] = useState('');

  const detail = [
    { id: 1, autoCapitalize: true, place: 'Name', state: setNam, val: nam, keytype: 'default', regex: isValidName, maxLength: 25 },
    { id: 2, autoCapitalize: false, place: 'Email', state: setEma, val: ema, keytype: 'default', regex: isValidEmail, maxLength: null },
    { id: 3, autoCapitalize: false, place: 'Position', state: setPos, val: pos, keytype: 'default', regex: isValidPosition, maxLength: null },
    { id: 4, autoCapitalize: false, place: 'Organisation', state: setOrg, val: org, keytype: 'default', regex: null, maxLength: null },
    { id: 5, autoCapitalize: false, place: 'Address', state: setAdd, val: add, keytype: 'default', regex: null, maxLength: null },
    { id: 6, autoCapitalize: false, place: 'Phone', state: setPho, val: pho, keytype: 'number-pad', regex: isValidPhoneNumber, maxLength: 10 },
  ];

  const renderItem = ({ item }) => {
    const isValid = item.regex ? item.regex(item.val) : true;
    return (
      <LinearGradient
        colors={['#696969', 'black']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          justifyContent: 'center',
          borderRadius: 10,
          margin: 10,
          color: 'white',
        }}>
        <TextInput
          style={{
            justifyContent: 'center',
            borderRadius: 10,
            height: HEIGHT * 0.055,
            width: WIDTH * 0.8,
            fontSize: 17,
            color: 'white',

            borderColor: isValid ? 'white' : 'red',
            borderWidth: isValid ? 0 : 1,
          }}
          // autoCapitalize={item.autoCapitalize}
          maxLength={item.maxLength}
          onChangeText={item.state}
          value={item.val}
          placeholder={item.place}
          placeholderTextColor={'#E4E4E4'}
          keyboardType={item.keytype}
        />
      </LinearGradient>
    );
  };
  return (
    <>
      <View style={{ ...styles.main }}>
        {/* upper card start */}
        <View style={{ ...styles.upperCard }}>
          <View style={{ ...styles.div }}>
            <View style={{ ...styles.threeline }}>
              <Pressable onPress={() => navigation.openDrawer()}>
                <Image source={THREELINE} style={styles.threelinelogo} />
              </Pressable>
            </View>

            <View style={{ ...styles.qrgenerator }}>
              <Pressable onPress={() => navigation.navigate('GenerateQR')}>
                <Image source={QRGENERATOR} style={{ ...styles.qr }} />
              </Pressable>
            </View>

            <View style={{ ...styles.qrscanner }}>
              <Pressable onPress={() => navigation.navigate('ScanQR')}>
                <Image source={QRSCANNER} style={{ ...styles.qr }} />
              </Pressable>
            </View>
          </View>
        </View>
        {/* LOWER CARD START  */}

        <View style={{ ...styles.card, ...styles.overlay2 }}>
          <Text style={{ ...styles.textarea, ...styles.textAddDetails }}>
            Add Details
          </Text>

          {/* ...............................FlatList..................................... */}
          <FlatList
            data={detail}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          {/* ADD & DATA PASS */}
          <View
            style={{
              marginTop: 30,
              width: '90%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              style={styles.pressableStyle}
              onPress={() =>
                navigation.navigate('Page_3', {
                  paramKey1: nam,
                  paramKey2: ema,
                  paramKey3: pos,
                  paramKey4: org,
                  paramKey5: add,
                  paramKey6: pho,
                })
              }>
              <View>
                <Text style={{ ...styles.txtAdd }}>ADD</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* lOWER CARD ENDS */}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00B9BD"
          translucent={true}
        />
      </View>
      {/* upper card  end*/}
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
  textAddDetails: {
    marginTop: 20,
    fontWeight: '800',
    fontSize: 25,
    color: 'white',
    marginRight: 30,
  },
  card: {
    height: HEIGHT * 0.65,
    width: WIDTH * 0.9,
    backgroundColor: '#313131',
    borderRadius: 10,
    elevation: 7,
    marginTop: 40,
    alignItems: 'center',
    position: 'absolute',
  },
  pressableStyle: {
    height: HEIGHT * 0.055,
    width: WIDTH * 0.8,
    backgroundColor: '#FDC200BD',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 25,
  },
  textarea: {
    justifyContent: 'center',
    borderRadius: 10,
    height: HEIGHT * 0.055,
    width: WIDTH * 0.7,
    fontSize: 17,
    color: 'white',
  },
  txtAdd: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
  },
  threelinelogo: {
    height: HEIGHT * 0.035,
    width: WIDTH * 0.095,
  },
  qr: {
    height: HEIGHT * 0.042,
    width: WIDTH * 0.09,
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
