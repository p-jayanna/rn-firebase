import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArticleDetails from './ArticleDetails';
import UserCard from '../../../components/UserCard';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import {translate} from '../../../i18n/i18n';
import {translationKeys} from '../../../services/constants';

const ArticlePresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    article = {},
    onUserCardPressed,
  } = props;

  const styles = _styles(colors, sharedStyle);
  const {title, imagePath, description} = article;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View horizontal={true} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: `data:image/gif;base64,${imagePath}`}}
          />
        </View>
        <View style={styles.detailsArea}>
          <ArticleDetails article={article} />
        </View>
        <View style={styles.descriptionArea}>
          <Text style={styles.titleText}>
            {translate(translationKeys.description)}
          </Text>

          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.userArea}>
          <Text style={styles.titleText}>
            {translate(translationKeys.provider)}
          </Text>
          <TouchableOpacity
            style={styles.userBody}
            onPress={() => onUserCardPressed(article.user)}>
            <UserCard user={article.user} />
            <Icon
              name="angle-right"
              size={sharedStyle.fontSize.xl}
              color={colors.onSurfaceVariant}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomFixed}>
        <AppTouchableOpacity
          name={'Call'}
          onPress={() => {
            Linking.openURL('tel:22222');
          }}
          icon={'phone'}
        />
        <AppTouchableOpacity name={'Message'} icon={'envelope'} />
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
    userBody: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bottomFixed: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
  });

export default withBrandSettings(ArticlePresenter);
