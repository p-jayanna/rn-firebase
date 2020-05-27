import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {translate} from '../../i18n/i18n';
import Video from 'react-native-video';

const VideoPresenter = props => {
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
      <Video
        source={{
          uri: 'https://ddgocbgjjnp9d.cloudfront.net/xearth.mp4',
        }}
        ref={ref => {
          this.player = ref;
        }} // Store reference
        style={styles.backgroundVideo}
        controls={true}
        resizeMode={'cover'}
      />
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
    backgroundVideo: {
      position: 'absolute',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width * (9 / 16),
    },
  });

export default withBrandSettings(VideoPresenter);
