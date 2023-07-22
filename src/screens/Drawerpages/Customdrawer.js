import React from 'react';
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {HEIGHT, WIDTH} from '../../constants/Configs';
import {PERSONLOGO} from '../../constants/ImagePath';
import {black, white} from '../../constants/Colors';
import GenerateQR from './GenerateQR';
import ScanQR from './ScanQR';
import AboutUs from './AboutUs';
import Developers from './Developers';
// const [show, sethow] = useState('');
const data = [
  {
    name: 'GenerateQR',
    img: require('../../assest/images/qrgeneratorW.png'),
    component: GenerateQR,
  },

  {
    name: 'ScanQR',
    img: require('../../assest/images/qrscanW.png'),
    component: ScanQR,
  },
  {
    name: 'AboutUs',
    img: require('../../assest/images/info.png'),
    component: AboutUs,
  },
  {
    name: 'Developers',
    img: require('../../assest/images/developer.png'),
    component: Developers,
  },
];

export default Customdrawer = ({navigation}) => {
  const DrawerNavigationScreen = () => {
    const renderItem = ({item}) => {
      return (
        <Pressable
          onPress={() => {
            navigation.navigate(item.component);
          }}
          style={styles.lowerDrawerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.img}
              style={{width: 23, height: 23, marginLeft: 10}}
            />
            <Text style={{color: white, paddingLeft: 10, fontSize: 15}}>
              {item.name}
            </Text>
          </View>
        </Pressable>
      );
    };

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    );
  };

  return (
    <View style={styles.lowerDrawer}>
      <View style={styles.upperDrawer}>
        <View style={styles.personlogoContainer}>
          <View style={styles.personlogoImgContainer}>
            <Image source={PERSONLOGO} style={styles.personlogoImg} />
          </View>
          <Text style={styles.personlogoTxt}>login</Text>
        </View>
      </View>
      <View>
        <DrawerNavigationScreen />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  lowerDrawerContainer: {
    marginLeft: 15,
    height: HEIGHT * 0.06,
    width: '100%',
  },
  upperDrawer: {
    height: HEIGHT * 0.23,
    width: '100%',
    backgroundColor: 'black',
  },
  lowerDrawer: {
    flex: 1,
    backgroundColor: 'black',
    alignItem: 'center',
  },
  personlogoContainer: {
    marginLeft: 15,
    flexDirection: 'row',
    height: HEIGHT * 0.2,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: white,
    justifyContent: 'center',
  },
  personlogoImgContainer: {
    marginVertical: 60,
    justifyContent: 'center',
    height: HEIGHT*0.104,
    width: WIDTH*0.3,
  },
  personlogoImg: {
    marginLeft: 10,
    marginTop: 0,
    height: '92%',
    width: '71%',
    borderRadius: 2,
  },
  personlogoTxt: {
    marginRight: 50,
    marginTop: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: white,
  },
});
