import React from 'react';
import {withBrandSettings} from '../styles/withBrandSettings';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserCard = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    user: {name = '', about = ''} = {},
  } = props;

  const styles = _styles(colors, sharedStyle);
  return (
    <View style={styles.userDetails}>
      <Icon
        name="user-circle"
        color={colors.primary}
        size={sharedStyle.fontSize.xl * 2}
      />
      <View style={styles.userBio}>
        <Text style={styles.userName}>{name}</Text>
        <Text>{about}</Text>
      </View>
    </View>
  );
};
const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    userName: {
      fontSize: sharedStyle.fontSize.md,
      color: colors.onSurface,
      fontWeight: 'bold',
    },
    userDetails: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userBio: {
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  });

export default withBrandSettings(UserCard);
