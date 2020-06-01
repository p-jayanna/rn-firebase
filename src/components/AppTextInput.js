import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {translate} from '../i18n/i18n';
import {withBrandSettings} from '../styles/withBrandSettings';

const AppTextInput = props => {
  const {
    placeHolderKey,
    colors,
    brandStyle: {sharedStyle},
    keyboardType,
    multiline,
    onChangeText,
    iconName,
  } = props;
  const [isFocused, setFocused] = useState(false);

  const styles = _styles(colors, sharedStyle);
  return (
    <View style={styles.container}>
      <TextInput
        style={isFocused ? styles.textViewOnFocus : styles.textView}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={translate(placeHolderKey)}
        keyboardType={keyboardType}
        multiline={multiline}
        onChangeText={onChangeText}
      />
      {iconName && <Icon name={'rupee'} color={colors.onSurfaceVariant} />}
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: sharedStyle.borderRadius.default,
      padding: sharedStyle.spacing.md,
      marginHorizontal: sharedStyle.spacing.xs,
    },
    textStyle: {
      paddingLeft: sharedStyle.spacing.md,
      fontSize: sharedStyle.fontSize.md,
      color: colors.onPrimary,
    },
    textView: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.background,
    },
    textViewOnFocus: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
  });

export default withBrandSettings(AppTextInput);
