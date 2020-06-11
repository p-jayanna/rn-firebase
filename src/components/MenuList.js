import React from 'react';
import {withBrandSettings} from '../styles/withBrandSettings';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {translate} from '../i18n/i18n';

const MenuList = props => {
  const {
    title,
    colors,
    brandStyle: {sharedStyle},
    name,
    id,
    selectedItem = -1,
    onCategorySelected,
  } = props;

  const isSelected = selectedItem === id;
  const styles = _styles(colors, sharedStyle);
  return (
    <TouchableOpacity
      onPress={() => {
        onCategorySelected(id);
      }}>
      <View style={isSelected ? styles.selectedContainer : styles.container}>
        <MaterialCommunityIcons
          name={name}
          size={30}
          color={isSelected ? colors.surface : colors.primary}
        />
        <Text style={isSelected ? styles.menuTextSelected : styles.menuText}>
          {translate(title)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      margin: sharedStyle.spacing.xs,
      padding: sharedStyle.spacing.xs,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedContainer: {
      flexDirection: 'column',
      margin: sharedStyle.spacing.xs,
      padding: sharedStyle.spacing.xs,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: sharedStyle.borderRadius.xs,
      backgroundColor: colors.secondaryVariant,
    },
    menuText: {
      padding: sharedStyle.spacing.xs,
      fontSize: sharedStyle.fontSize.md,
    },
    menuTextSelected: {
      padding: sharedStyle.spacing.xs,
      fontSize: sharedStyle.fontSize.md,
      color: colors.surface,
    },
  });
export default withBrandSettings(MenuList);
