import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import AppMapView from '../../components/MapView';

const MapPresenter = props => {
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
  } = props;
  const styles = _styles(colors, fontSize);
  return (
    <View style={styles.container}>
      <AppMapView />
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

export default withBrandSettings(MapPresenter);
