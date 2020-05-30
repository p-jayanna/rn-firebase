import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import AppCamera from '../../components/AppCamera';

const CameraPresenter = props => {
  console.log(props);
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
  } = props;
  const styles = _styles(colors, fontSize);
  return (
    <View style={styles.container}>
      <AppCamera />
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
  });

export default withBrandSettings(CameraPresenter);
