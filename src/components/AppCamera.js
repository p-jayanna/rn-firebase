import React, {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {StyleSheet} from 'react-native';
import {withBrandSettings} from '../styles/withBrandSettings';

const AppCamera = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
  } = props;
  const styles = _styles(colors, sharedStyle);

  const cameraRef = useRef();

  return (
    <RNCamera
      ref={cameraRef}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'Please give permission to take the photos',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    />
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    preview: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
  });

export default withBrandSettings(AppCamera);
