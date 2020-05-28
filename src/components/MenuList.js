import React from 'react';
import {withBrandSettings} from '../styles/withBrandSettings';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { translate } from '../i18n/i18n';

const MenuList = props => {
  const {
    title,
    colors,
    brandStyle: {sharedStyle},
    name,
  } = props;

  const styles = _styles(colors, sharedStyle);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={name}
          size={30}
          color={colors.primaryVariant}
        />
        <Text style={styles.menuText}>{translate(title)} </Text>
      </View>
    </TouchableOpacity>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      margin: sharedStyle.spacing.xs,
      padding: sharedStyle.spacing.xs,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuText: {
      padding: sharedStyle.spacing.xs,
      fontSize: sharedStyle.fontSize.md,
    },
  });
export default withBrandSettings(MenuList);
