import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors} from '../../global/styles';
import {Icon} from 'react-native-elements';
const FoodCard = ({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountPresent,
  numberofReviews,
  businessAdress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}}
        />
        <View>
          <View>
            <Text style={styles.resturantName}>{restaurantName}</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.grey2}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.minutes}>{farAway} Min</Text>
            </View>
            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>{businessAdress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberofReview}>{numberofReviews} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};
export default FoodCard;
const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 20,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  resturantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey,
    marginTop: 10,
    marginLeft: 10,
  },
  distance: {
    flexDirection: 'row',
    flex: 4,
    borderRightColor: colors.grey1,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  minutes: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey1,
    paddingHorizontal: 5,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderTopRightRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberofReview: {
    color: 'white',
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0,
  },
});
