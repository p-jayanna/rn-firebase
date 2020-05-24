import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import {translate} from '../../i18n/i18n';

const SearchPresenter = props => {
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
      <View style={styles.searchContainer}>
        <Text>Search area</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text>Filter area</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Body area</Text>
      </View>
    </View>
  );
};

const _styles = (colors, fontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: colors.primary,
    },
    searchContainer: {flex: 1, backgroundColor: colors.secondary},
    filterContainer: {flex: 2, backgroundColor: colors.primaryVariant},
    bodyContainer: {flex: 12, backgroundColor: colors.secondary},
    textStyle: {
      fontSize: fontSize.xl,
      color: colors.onPrimary,
    },
  });

export default withBrandSettings(SearchPresenter);
