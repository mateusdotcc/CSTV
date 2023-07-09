import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { myTheme } from '@themes/index';
import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { MatchCard } from '@components/MatchCard/MatchCard';
import { useGetMatches } from '@hooks/useGetMatches';
import { Loading } from '@components/Loading';
import { RefreshLoader } from '@components/RefreshLoader';

export function Feed() {
  const { matches, isLoading, mutate } = useGetMatches();
  const [refreshing, setRefreshing] = useState(false);

  async function onRefresh() {
    setRefreshing(true);
    await mutate();
    setRefreshing(false);
  }

  return (
    <Container>
      <Heading text={'Partidas'} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
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
