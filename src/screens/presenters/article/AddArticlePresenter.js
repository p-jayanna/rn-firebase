import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../../styles/withBrandSettings';

const AddArticlePresenter = props => {
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
      <Text style={styles.textStyle}> AddArticlePresenter </Text>
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

export default withBrandSettings(AddArticlePresenter);
