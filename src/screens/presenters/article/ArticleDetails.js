import React from 'react';
import {View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import {withBrandSettings} from '../../../styles/withBrandSettings';

const ArticleDetails = props => {
  const {
    colors,
    place,
    price,
    quantity,
    brandStyle: {sharedStyle},
  } = props;
  const styles = _styles(colors, sharedStyle);

  return (
    <View>
      <View style={styles.topTagInfo}>
        <View style={styles.topTagContents}>
          <Icon
            name="calendar"
            color={colors.onSurfaceVariant}
            size={sharedStyle.fontSize.default}
          />
          <Text numberOfLines={1} style={styles.locationText}>
            22 May
          </Text>
        </View>
        <View style={styles.topTagContents}>
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
      <View style={styles.priceArea}>
        <Text style={styles.priceTag}>{price}</Text>
        <Text>{quantity}</Text>
      </View>
      <View style={styles.bottomTagInfo}>
        <View style={styles.badge}>
          <Text numberOfLines={1} style={styles.badgeText}>
            Organic
          </Text>
        </View>
        <View style={styles.badge}>
          <Text numberOfLines={1} style={styles.badgeText}>
            Fresh
          </Text>
        </View>
        <View style={styles.badgeDanger}>
          <Text numberOfLines={1} style={styles.badgeText}>
            Limited
          </Text>
        </View>
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    topTagInfo: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    topTagContents: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    bottomTagInfo: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    locationText: {
      color: colors.onSurfaceVariant,
      paddingHorizontal: sharedStyle.spacing.default,
      fontSize: sharedStyle.fontSize.default,
    },
    priceTag: {
      fontSize: sharedStyle.fontSize.md,
      fontWeight: 'bold',
      color: colors.primary,
    },
    priceArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: sharedStyle.spacing.xs,
    },
    badge: {
      padding: sharedStyle.spacing.xs,
      backgroundColor: colors.success,
      borderRadius: sharedStyle.spacing.xs,
      marginHorizontal: sharedStyle.spacing.xs,
    },
    badgeDanger: {
      padding: sharedStyle.spacing.xs,
      backgroundColor: colors.warning,
      borderRadius: sharedStyle.spacing.xs,
      marginHorizontal: sharedStyle.spacing.xs,
    },
    badgeText: {
      color: colors.onPrimary,
      paddingHorizontal: sharedStyle.spacing.default,
      fontSize: sharedStyle.fontSize.default,
    },
  });

export default withBrandSettings(ArticleDetails);
