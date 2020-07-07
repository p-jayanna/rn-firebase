import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import AppCamera from '../../components/AppCamera';

const CameraPresenter = props => {
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
    onImageCapture,
  } = props;
  const styles = _styles(colors, fontSize);
  return (
    <View style={styles.container}>
      <AppCamera onImageCapture={onImageCapture} />
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
