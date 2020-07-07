import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withBrandSettings} from '../styles/withBrandSettings';

const AppTouchableOpacity = props => {
  const {
    name,
    icon,
    colors,
    brandStyle: {sharedStyle},
    onPress,
  } = props;

  const styles = _styles(colors, sharedStyle);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={20} color={colors.onPrimary} />
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      borderRadius: sharedStyle.borderRadius.default,
      padding: sharedStyle.spacing.md,
      marginHorizontal: sharedStyle.spacing.xs,
    },
    textStyle: {
      paddingLeft: sharedStyle.spacing.md,
      fontSize: sharedStyle.fontSize.md,
      color: colors.onPrimary,
    },
  });

export default withBrandSettings(AppTouchableOpacity);
