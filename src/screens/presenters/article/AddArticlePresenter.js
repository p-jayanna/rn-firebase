import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTextInput from '../../../components/AppTextInput';
import {translationKeys} from '../../../services/constants';
import {translate} from '../../../i18n/i18n';

const AddArticlePresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onOpenCameraPress,
    onPublishArticlePress,
    imageBase64,
  } = props;

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const styles = _styles(colors, sharedStyle);

  const onPublishPress = () => {
    if (title.length > 2 && description.length > 2) {
      onPublishArticlePress({
        title,
        price,
        quantity,
        description,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {imageBase64 ? (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: `data:image/gif;base64,${imageBase64}`}}
              style={styles.image}
            />
          </View>
        ) : (
          <View style={styles.cameraContainer}>
            <TouchableOpacity onPress={onOpenCameraPress}>
              <Icon
                name="camera"
                color={colors.background}
                size={sharedStyle.fontSize.xl * 2}
              />
            </TouchableOpacity>
            <Text style={styles.iconDescriptionText}>
              {translate(translationKeys.add_photos)}
            </Text>
          </View>
        )}
        <View style={styles.titleArea}>
          <AppTextInput
            placeHolderKey={translationKeys.title}
            keyboardType={'default'}
            multiline={true}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.detailsArea}>
          <AppTextInput
            placeHolderKey={translationKeys.price}
            keyboardType={'decimal-pad'}
            onChangeText={number => setPrice(number)}
            iconName={'rupee'}
          />
          <AppTextInput
            placeHolderKey={translationKeys.quantity}
            keyboardType={'default'}
            onChangeText={text => setQuantity(text)}
          />
        </View>
        <View style={styles.descriptionArea}>
          <AppTextInput
            placeHolderKey={translationKeys.description}
            keyboardType={'default'}
            multiline={true}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomFixed}>
        <AppTouchableOpacity
          name={translate(translationKeys.publish)}
          icon={'upload'}
          onPress={() => {
            onPublishPress();
          }}
        />
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
      paddingVertical: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      paddingHorizontal: sharedStyle.spacing.xs,
    },
    titleText: {
      fontSize: sharedStyle.fontSize.md,
      color: colors.onSurface,
      fontWeight: 'bold',
    },
    cameraContainer: {
      height: 250,
      backgroundColor: colors.surface,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
      flexShrink: 1,
      height: 250,
    },
    iconDescriptionText: {
      color: colors.onSurfaceVariant,
    },
    image: {flex: 1, height: undefined, width: undefined},
    detailsArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
