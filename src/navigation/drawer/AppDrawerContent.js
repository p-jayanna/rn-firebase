import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {store} from '../../store';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DrawerContent = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
  } = props;
  const {
    user: {user: {name = 'Sign In', email = '', about = ''} = {}} = {},
  } = store.getState();
  const styles = _styles(colors, sharedStyle);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userArea}>
          <TouchableOpacity>
            <View style={styles.userDetails}>
              <Icon
                name="user-circle"
                color={colors.primary}
                size={sharedStyle.fontSize.xl * 2}
              />
              {name ? (
                <View style={styles.userBio}>
                  <Text style={styles.userName}>{name}</Text>
                  <Text>{about}</Text>
                </View>
              ) : (
                <View style={styles.userBio}>
                  <Text style={styles.userName}>Sign In</Text>
                </View>
              )}
            </View>
            {email ? <Text style={styles.emailText}>{email}</Text> : null}
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
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
      borderBottomColor: colors.background,
      borderBottomWidth: 2,
    },
    emailText: {
      fontSize: sharedStyle.fontSize.lg,
    },
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

export default withBrandSettings(DrawerContent);
