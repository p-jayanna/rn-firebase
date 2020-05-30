import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddArticlePresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onOpenCameraPress,
  } = props;
  const styles = _styles(colors, sharedStyle);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={onOpenCameraPress}>
            <Icon
              name="camera"
              color={colors.background}
              size={sharedStyle.fontSize.xl * 2}
            />
          </TouchableOpacity>
          <Text style={styles.iconDescriptionText}>
            Add photos or 30 seconds video
          </Text>
        </View>
        <View style={styles.detailsArea}>
          <Text>Add title amd select category</Text>
        </View>
        <View style={styles.detailsArea}>
          <Text>Add some details here</Text>
        </View>
        <View style={styles.descriptionArea}>
          <Text style={styles.titleText}>Description</Text>

          <Text style={styles.descriptionText}>
            {
              'Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. The alternate definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.'
            }
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomFixed}>
        <AppTouchableOpacity name={'Publish Article'} icon={'upload'} />
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: colors.background,
    },
    titleArea: {
      justifyContent: 'flex-start',
      backgroundColor: colors.surface,
      paddingVertical: sharedStyle.spacing.md,
      paddingHorizontal: sharedStyle.spacing.xs,
    },
    titleText: {
      fontSize: sharedStyle.fontSize.md,
      color: colors.onSurface,
      fontWeight: 'bold',
    },
    imageContainer: {
      height: 250,
      backgroundColor: colors.surface,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconDescriptionText: {
      color: colors.onSurfaceVariant,
    },
    image: {flex: 1, height: undefined, width: undefined},
    detailsArea: {
      marginTop: sharedStyle.spacing.default,
      paddingVertical: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      paddingHorizontal: sharedStyle.spacing.xs,
    },
    descriptionArea: {
      marginTop: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
    descriptionText: {
      textAlign: 'justify',
    },
    userArea: {
      marginVertical: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
    bottomFixed: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
  });

export default withBrandSettings(AddArticlePresenter);
