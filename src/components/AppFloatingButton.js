import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withBrandSettings} from '../styles/withBrandSettings';

const AppFloatingButton = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
  } = props;
  const styles = _styles(colors, sharedStyle);
  return (
    <TouchableOpacity style={styles.floatingButton}>
      <Icon name="ios-add" size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};
const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    floatingButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: sharedStyle.fontSize.xl * 2,
      position: 'absolute',
      bottom: sharedStyle.spacing.md,
      right: sharedStyle.spacing.md,
      height: sharedStyle.fontSize.xl * 2,
      backgroundColor: colors.surface,
      borderRadius: 100,
    },
  });
export default withBrandSettings(AppFloatingButton);
