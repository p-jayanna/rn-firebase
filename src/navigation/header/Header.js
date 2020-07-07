import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchView from '../../components/SearchView';
import Icon from 'react-native-vector-icons/Ionicons';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AppHeader = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    navigation,
  } = props;
  const styles = _styles(colors, sharedStyle);

  const drawSideMenu = () => {
    navigation.openDrawer();
  };

  const onSearch = searchKey => {
    navigation.navigate('search', searchKey);
  };

  const onLocationPress = searchKey => {
    navigation.navigate('map');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={drawSideMenu}>
        <Icon name="ios-menu" size={30} color={colors.onPrimary} />
      </TouchableOpacity>
      <SearchView onSearch={onSearch} onLocationPress={onLocationPress} />
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: sharedStyle.spacing.md,
    },
  });
export default withBrandSettings(AppHeader);
