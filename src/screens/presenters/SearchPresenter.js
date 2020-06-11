import React, {useState} from 'react';
import {View, Text, StyleSheet, RefreshControl, FlatList} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import MenuCardSearch from '../../components/MenuCardSearch';

const SearchPresenter = props => {
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
    onArticlePress,
    articles,
    searchKey,
  } = props;
  const [isLoading, setLoading] = useState(false);

  const styles = _styles(colors, fontSize);

  const onListRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={{color: colors.onPrimary}}>{searchKey}</Text>
      </View>
      <View style={styles.bodyContainer}>
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

const _styles = (colors, fontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: colors.primary,
    },
    filterContainer: {
      backgroundColor: colors.primaryVariant,
      padding: 20,
    },
    bodyContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    textStyle: {
      fontSize: fontSize.xl,
      color: colors.onPrimary,
    },
  });

export default withBrandSettings(SearchPresenter);
