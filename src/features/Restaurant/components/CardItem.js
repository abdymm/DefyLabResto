import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@Components';
import { Colors } from '@Constants';
import { String } from '@Utils';
import Icon from 'react-native-vector-icons/Ionicons';

const CardItem = ({ item, isFavItem, onPressDetail, onPressDetailMap }) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: isFavItem ? Colors.primary : Colors.tertiary,
          borderBottomWidth: 6,
        },
      ]}>
      <View style={styles.content}>
        <Text h5 b>
          {item?.title}{' '}
          {isFavItem && (
            <Icon
              name="star"
              size={20}
              color={Colors.primary}
              style={styles.favIcon}
            />
          )}
        </Text>
        <Text style={styles.textName}>
          {String.reformatVicinity(item?.vicinity)}
        </Text>
        <View style={styles.metersContainer}>
          <Text tiny>{item?.distance} meters from your place</Text>
        </View>
      </View>

      <View style={styles.action}>
        <Button
          onPress={onPressDetail}
          containerStyle={styles.actionBtn}
          icon={
            <Icon name="information-circle-outline" size={18} color="white" />
          }></Button>
        <Button
          onPress={onPressDetailMap}
          containerStyle={styles.actionBtn}
          icon={<Icon name="pin-outline" size={18} color="white" />}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: Colors.light,
    padding: 16,
    borderRadius: 8,
  },
  metersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    marginVertical: 4,
    fontSize: 12,
  },
  content: {
    flex: 0.65,
  },
  action: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  actionBtn: {
    marginLeft: 6,
  },
  favIcon: {
    position: 'absolute',
    left: 12,
  },
});

export default CardItem;
