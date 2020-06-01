import React from 'react';
import {withBrandSettings} from '../styles/withBrandSettings';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuCardSearch = props => {
  const {
    article,
    colors,
    brandStyle: {sharedStyle},
    onArticlePress,
  } = props;
  const {title, price, place, quantity, imagePath} = article;
  const styles = _styles(colors, sharedStyle);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onArticlePress(article);
        }}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: `data:image/jpeg;base64,${imagePath}`}}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View>
              <Text numberOfLines={2} style={styles.titleText}>
                {title}
              </Text>
            </View>
            <View style={styles.detailsArea}>
              <Text style={styles.priceTag}>{price}</Text>
              <Text>{quantity}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon
                name="map-marker"
                color={colors.onSurfaceVariant}
                size={sharedStyle.fontSize.default}
              />
              <Text numberOfLines={1} style={styles.locationText}>
                {place}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: sharedStyle.spacing.xs,
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 180,
      borderRadius: sharedStyle.borderRadius.xs,
      backgroundColor: colors.surface,
    },
    image: {flex: 1, height: undefined, width: undefined},
    imageContainer: {
      flex: 1,
    },
    detailsContainer: {
      flex: 1,
      flexDirection: 'column',
      overflow: 'hidden',
      justifyContent: 'space-between',
      padding: sharedStyle.spacing.xs,
    },
    locationContainer: {
      alignItems: 'center',
      flexDirection: 'row-reverse',
    },
    locationText: {
      color: colors.onSurfaceVariant,
      paddingRight: sharedStyle.spacing.xs,
      fontSize: sharedStyle.fontSize.default,
    },
    titleText: {fontSize: sharedStyle.fontSize.sm, fontWeight: 'bold'},
    detailsArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    priceTag: {
      fontSize: sharedStyle.fontSize.sm,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });
export default withBrandSettings(MenuCardSearch);
