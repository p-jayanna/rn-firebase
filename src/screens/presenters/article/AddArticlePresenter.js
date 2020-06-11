import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTextInput from '../../../components/AppTextInput';
import {translationKeys} from '../../../services/constants';
import {translate} from '../../../i18n/i18n';
import {menu_data} from '../../../utils/data/menu_data';
import MenuList from '../../../components/MenuList';

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
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [description, setDescription] = useState('');

  const styles = _styles(colors, sharedStyle);

  const onPublishPress = () => {
    if (title.length > 2 && description.length > 2) {
      onPublishArticlePress({
        title,
        price,
        description,
      });
    }
  };

  const onCategorySelected = selectedIndex => {
    setSelectedCategory(selectedIndex);
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardContainer} behavior="height">
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
        <View style={styles.categoryArea}>
          <Text>Select Category</Text>
          <FlatList
            data={menu_data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <MenuList
                title={item.title}
                name={item.name}
                id={item.id}
                selectedItem={selectedCategory}
                onCategorySelected={onCategorySelected}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.detailsArea}>
          <AppTextInput
            placeHolderKey={translationKeys.price}
            keyboardType={'decimal-pad'}
            onChangeText={number => setPrice(number)}
            iconName={'rupee'}
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
        <View style={styles.bottomFixed}>
          <AppTouchableOpacity
            name={translate(translationKeys.publish)}
            icon={'upload'}
            onPress={() => {
              onPublishPress();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    keyboardContainer: {
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
    categoryArea: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: sharedStyle.spacing.default,
      padding: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
    },
    descriptionArea: {
      marginTop: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
    userArea: {
      marginVertical: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
    bottomFixed: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: sharedStyle.spacing.default,
      backgroundColor: colors.surface,
      padding: sharedStyle.spacing.md,
    },
  });

export default withBrandSettings(AddArticlePresenter);
