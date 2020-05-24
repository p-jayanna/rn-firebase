import React, {useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {withBrandSettings} from '../../styles/withBrandSettings';
import MenuList from '../../components/MenuList';
import {menu_data} from '../../utils/data/menu_data';
import MenuCard from '../../components/MenuCard';
import {card_data} from '../../utils/data/card_data';
import AppFloatingButton from '../../components/AppFloatingButton';

const HomePresenter = props => {
  const {
    colors,
    brandStyle: {
      sharedStyle: {fontSize},
    },
    onArticlePress,
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
      <View style={styles.menuContainer}>
        <FlatList
          data={menu_data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <MenuList title={item.title} name={item.name} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={card_data}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={[colors.primary, colors.onPrimary]}
              refreshing={isLoading}
              onRefresh={() => onListRefresh}
            />
          }
          renderItem={({item}) => (
            <MenuCard onArticlePress={onArticlePress} article={item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <AppFloatingButton />
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
    menuContainer: {
      backgroundColor: colors.surface,
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

export default withBrandSettings(HomePresenter);
