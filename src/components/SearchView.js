import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {withBrandSettings} from '../styles/withBrandSettings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {translate} from '../i18n/i18n';

const SearchView = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onSearch,
    onLocationPress,
  } = props;

  const [searchKey, setSearchKey] = useState();

  const styles = _styles(colors, sharedStyle);
  return (
    <View style={styles.container}>
      <View style={styles.itemArea}>
        <View style={styles.iconSearchStyle}>
          <Icon
            active
            name="search"
            color={colors.onSurfaceVariant}
            size={sharedStyle.fontSize.md}
          />
        </View>
        <TextInput
          style={styles.textView}
          placeholder={translate('search_main')}
          onChangeText={input => setSearchKey(input)}
          onSubmitEditing={() => {
            onSearch(searchKey);
          }}
        />
        <TouchableOpacity
          onPress={onLocationPress}
          style={styles.iconLocationStyle}>
          <Icon
            active
            name="map-marker"
            color={colors.onSurfaceVariant}
            size={sharedStyle.fontSize.lg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: sharedStyle.spacing.md,
    },
    itemArea: {
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: sharedStyle.borderRadius.xs,
      flex: 1,
    },
    iconLocationStyle: {
      paddingHorizontal: sharedStyle.spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomRightRadius: sharedStyle.borderRadius.xs,
      borderTopRightRadius: sharedStyle.borderRadius.xs,
      borderColor: colors.onSurfaceVariant,
      backgroundColor: colors.background,
    },
    iconSearchStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sharedStyle.spacing.default,
    },
    textView: {flex: 1},
  });

export default withBrandSettings(SearchView);