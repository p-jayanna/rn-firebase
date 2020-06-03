import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import UserCard from '../../components/UserCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DrawerContent = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
  } = props;
  const styles = _styles(colors, sharedStyle);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userArea}>
          <UserCard />
          <Text style={styles.emailText}>raganna@gmail.com</Text>
        </View>
        <DrawerItemList {...props} />
        <TouchableOpacity style={styles.signOutArea}>
          <Icon name="sign-out" size={20} color={colors.primary} />
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    userArea: {
      padding: sharedStyle.spacing.md,
    },
    emailText: {
      fontSize: sharedStyle.fontSize.lg,
    },
    signOutArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    signOutText: {
      padding: sharedStyle.spacing.md,
    },
  });

export default withBrandSettings(DrawerContent);
