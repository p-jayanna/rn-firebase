import React, {useState} from 'react';
import MapView, {Marker, Circle} from 'react-native-maps';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withBrandSettings} from '../styles/withBrandSettings';

const AppMapView = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
  } = props;

  const [radius, setRadius] = useState(1);
  const styles = _styles(colors, sharedStyle);

  const onMapPress = coordinate => {
    console.log(coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 15.3327856,
          longitude: 76.4577355,
          latitudeDelta: 0.042 * radius,
          longitudeDelta: 0.042,
        }}
        onPress={coordinate => {
          onMapPress(coordinate);
        }}>
        <Marker
          coordinate={{
            latitude: 15.3327856,
            longitude: 76.4577355,
          }}
        />
        <Circle
          center={{
            latitude: 15.3327856,
            longitude: 76.4577355,
          }}
          radius={radius * 1000}
          fillColor={colors.info + '70'}
          strokeWidth={1}
          strokeColor={colors.primary}
        />
      </MapView>
      <View style={styles.inputArea}>
        <View style={styles.searchArea}>
          <Icon
            active
            name="search"
            color={colors.onSurfaceVariant}
            size={sharedStyle.fontSize.md}
          />
          <TouchableOpacity>
            <TextInput
              style={styles.textView}
              placeholder="Search the place here"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.radiusArea}>
          <Text style={styles.rangeText}>Range: {radius} Km</Text>
          <Slider
            style={styles.rangeSlider}
            minimumValue={0}
            maximumValue={300}
            step={1}
            onValueChange={value => setRadius(value)}
            minimumTrackTintColor={colors.primary}
            thumbTintColor={colors.primary}
            maximumTrackTintColor={colors.backgroundColor}
          />
        </View>
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    inputArea: {
      flex: 1,
      width: '100%',
      position: 'absolute',
      padding: sharedStyle.spacing.lg,
      flexDirection: 'column',
      justifyContent: 'center',
      borderColor: 'red',
    },
    searchArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: sharedStyle.spacing.md,
      marginVertical: sharedStyle.spacing.xs,
      backgroundColor: colors.surface,
      borderRadius: sharedStyle.spacing.xs,
    },
    radiusArea: {
      flexDirection: 'column',
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.xs,
      borderRadius: sharedStyle.spacing.xs,
    },
    textView: {paddingLeft: sharedStyle.spacing.md},
    rangeSlider: {
      flex: 1,
      height: 50,
    },
    rangeText: {paddingLeft: 10, paddingTop: 10},
  });
export default withBrandSettings(AppMapView);
