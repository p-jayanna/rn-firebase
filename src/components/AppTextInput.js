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
    <View style={isFocused ? styles.containerOnFocus : styles.container}>
      <TextInput
        style={styles.textView}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={translate(placeHolderKey)}
        keyboardType={keyboardType}
        multiline={multiline}
        onChangeText={onChangeText}
      />
      {iconName && (
        <Icon
          name={iconName}
          color={colors.onSurfaceVariant}
          size={sharedStyle.fontSize.md}
        />
      )}
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: sharedStyle.borderRadius.default,
      padding: sharedStyle.spacing.md,
      marginHorizontal: sharedStyle.spacing.xs,
      borderBottomWidth: 1,
      borderBottomColor: colors.background,
    },
    containerOnFocus: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: sharedStyle.borderRadius.default,
      padding: sharedStyle.spacing.md,
      marginHorizontal: sharedStyle.spacing.xs,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
    textStyle: {
      paddingLeft: sharedStyle.spacing.md,
      fontSize: sharedStyle.fontSize.md,
      color: colors.onPrimary,
    },
    textView: {
      flex: 1,
    },
  });

export default withBrandSettings(AppTextInput);
