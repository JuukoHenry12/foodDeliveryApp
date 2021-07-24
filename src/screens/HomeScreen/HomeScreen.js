import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../../components/HomeHeader';
import {colors, parameters} from '../../../global/styles';
import {filterData, restaurantsData} from '../../../global/Data';
import FoodCard from '../../components/FoodCard';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = React.useState(true);
  const [indexCheck, setIndexCheck] = React.useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.cardbackground, paddingBottom: 10}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('ResturantMapScreen');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon type="material-community" name="map-marker" size={26} />
              <Text>22 Bessie street</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                size={26}
              />
              <Text>Now</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Icon type="material-community" name="tune" size={26} />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image source={item.image} style={{width: 50, height: 50}} />
                </View>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallTextSelected}
                      : {...styles.smallText}
                  }>
                  <Text>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery now</Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={restaurantsData}
            renderItem={({item}) => (
              <View style={{marginTop: 10, marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAdress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberofReviews={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotion Available</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: 10,
                marginRight: 15,
              }}>
              Options Chaning In
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: colors.lightGreen}}
              digitTxtStyle={{color: colors.cardbackground}}
              timeToSehow={['M', 'S']}
              timeLabels={{m: 'MM', s: 'SS'}}
            />
          </View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={restaurantsData}
            renderItem={({item}) => (
              <View style={{marginTop: 10, marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAdress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberofReviews={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Resturants in your Area</Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: 20}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingTop: 10}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.89}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAdress={item.businessAddress}
                averageReview={item.averageReview}
                numberofReviews={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {delivery && (
        <View style={styles.floatbutton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResturantMapScreen');
            }}>
            <Icon
              name="place"
              type="material"
              size={25}
              style={{marginTop: 10, alignItems: 'center'}}
              color={colors.buttons}
            />
            <Text styles={{color: colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 5,
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: colors.grey1,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 60,
    margin: 10,
    height: 80,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 60,
    margin: 10,
    height: 60,
  },
  smallTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  smallText: {
    fontWeight: 'bold',
    color: colors.grey5,
  },
  floatbutton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
  },
});
