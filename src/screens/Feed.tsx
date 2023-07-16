import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { myTheme } from '@themes/index';
import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { useGetMatches } from '@hooks/services/useGetMatches';
import { Loading } from '@components/Loading';
import { useFirstRender } from '@hooks/useFirstRender';
import { RefreshLoader } from '@components/RefreshLoader';
import MatchCard from '@components/MatchCard/MatchCard';

export function Feed() {
  const isFirstRender = useFirstRender();
  const { matches, isLoading, mutate, setPage, dispose } = useGetMatches();
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function onRefresh() {
    setIsRefreshing(true);
    dispose();
    await mutate();
    setIsRefreshing(false);
  }

  async function fetchMore() {
    setPage((prev) => prev + 1);
    await mutate();
  }

  return (
    <Container>
      <Heading text={'Partidas'} />
      {isLoading && isFirstRender ? (
        <Loading />
      ) : (
        <FlatList
          data={matches}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(match, index) => `${match?.league_id}-${index}`}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          refreshControl={<RefreshLoader refreshing={isRefreshing} onRefresh={onRefresh} />}
          renderItem={({ item, index }) => <MatchCard index={index} match={item} />}
          ListFooterComponent={<Loading size={'small'} />}
          onEndReached={fetchMore}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    paddingRight: myTheme.spaces.gutter,
    paddingLeft: myTheme.spaces.gutter,
  },
});
