import React, {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {withBrandSettings} from '../styles/withBrandSettings';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppCamera = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onImageCapture,
  } = props;
  const styles = _styles(colors, sharedStyle);

  const cameraRef = useRef();

  const takePicture = async camera => {
    const options = {quality: 0.2, height: 400, width: 800, base64: true};
    const data = await camera.takePictureAsync(options);
    onImageCapture(data);
    console.log(data);
  };

  return (
    <RNCamera
      ref={cameraRef}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.off}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'Please give permission to take the photos',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      {({camera}) => {
        return (
          <View style={styles.bottomFixed}>
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.capture}>
              <Icon
                name="camera"
                color={colors.background}
                size={sharedStyle.fontSize.xl}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    </RNCamera>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    preview: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    bottomFixed: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: sharedStyle.spacing.md,
    },
  });

export default withBrandSettings(AppCamera);
