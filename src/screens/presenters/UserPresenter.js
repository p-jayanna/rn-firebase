import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {withBrandSettings} from '../../styles/withBrandSettings';
import MenuCardSearch from '../../components/MenuCardSearch';
import UserCard from '../../components/UserCard';

const UserPresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    articles,
    user,
    onArticlePress,
  } = props;

  const [isLoading, setLoading] = useState(false);

  const styles = _styles(colors, sharedStyle);

  const onListRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <UserCard user={user} />
        <View style={styles.userDetails}>
          <View style={styles.iconName}>
            <Text style={styles.userText}>Active: </Text>
            <Text>05.06.2010</Text>
          </View>
          <View style={styles.iconName}>
            <Text style={styles.userText}>Sold: </Text>
            <Text>500</Text>
          </View>
          <View style={styles.iconName}>
            <Text style={styles.userText}>Followers: </Text>
            <Text>2</Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={articles}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={[colors.primary, colors.onPrimary]}
              refreshing={isLoading}
              onRefresh={() => onListRefresh}
            />
          }
          renderItem={({item}) => (
            <MenuCardSearch article={item} onArticlePress={onArticlePress} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    userArea: {
      backgroundColor: colors.surface,
      justifyContent: 'flex-start',
      padding: sharedStyle.spacing.lg,
    },
    userDetails: {
      borderTopWidth: 2,
      borderTopColor: colors.background,
      paddingTop: sharedStyle.spacing.md,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    iconName: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    articleDetails: {
      flex: 1,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    userText: {
      fontSize: sharedStyle.fontSize.sm,
      color: colors.onSurface,
      fontWeight: 'bold',
    },
  });

export default withBrandSettings(UserPresenter);
