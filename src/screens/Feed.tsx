import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { myTheme } from '@themes/index';
import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { useGetMatches } from '@hooks/services/useGetMatches';
import { Loading } from '@components/Loading';
import { useFirstRender } from '@hooks/useFirstRender';
import { RefreshLoader } from '@components/RefreshLoader';
import { MatchCard } from '@components/MatchCard/MatchCard';

export function Feed() {
  const isFirstRender = useFirstRender();
  const { matches, isLoading, mutate, setPage } = useGetMatches();
  const [refreshing, setRefreshing] = useState(false);

  async function onRefresh() {
    setRefreshing(true);
    setPage((prev) => prev + 1);
    await mutate();
    setRefreshing(false);
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
          refreshing={refreshing}
          onRefresh={onRefresh}
          refreshControl={<RefreshLoader refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => <MatchCard match={item} />}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingRight: myTheme.spaces.gutter,
    paddingLeft: myTheme.spaces.gutter,
  },
});
