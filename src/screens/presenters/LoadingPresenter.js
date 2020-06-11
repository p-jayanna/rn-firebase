import React from 'react';
import {View, Text, StyleSheet, Clipboard} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {translate} from '../../i18n/i18n';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoadingPresenter = props => {
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
    fcmToken,
  } = props;

  const copyToken = () => {
    Clipboard.setString(fcmToken);
  };

  const styles = _styles(colors, fontSize);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={copyToken}>
        <Text style={styles.textStyle}> {translate('welcome')} </Text>
      </TouchableOpacity>
    </View>
  );
};

const _styles = (colors, fontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },
    textStyle: {
      fontSize: fontSize.xl,
      color: colors.onPrimary,
    },
  });

export default withBrandSettings(LoadingPresenter);
