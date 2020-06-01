import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import ArticleDetails from './ArticleDetails';
import UserCard from '../../../components/UserCard';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {withBrandSettings} from '../../../styles/withBrandSettings';

const ArticlePresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    article,
  } = props;
  console.log(article);
  const styles = _styles(colors, sharedStyle);
  const {title, price, place, quantity, imagePath} = article;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: `data:image/gif;base64,${imagePath}`}}
          />
        </View>
        <View style={styles.detailsArea}>
          <ArticleDetails price={price} quantity={quantity} place={place} />
        </View>
        <View style={styles.descriptionArea}>
          <Text style={styles.titleText}>Description</Text>

          <Text style={styles.descriptionText}>
            {
              'Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. The alternate definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.'
            }
          </Text>
        </View>
        <View style={styles.userArea}>
          <Text style={styles.titleText}>Provider</Text>
          <UserCard />
        </View>
      </ScrollView>
      <View style={styles.bottomFixed}>
        <AppTouchableOpacity name={'Message'} icon={'envelope'} />
        <AppTouchableOpacity name={'Call'} icon={'phone'} />
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
      flex: 1,
      flexShrink: 1,
      height: 250,
    },
    image: {flex: 1, height: undefined, width: undefined},
    detailsArea: {
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

export default withBrandSettings(ArticlePresenter);
