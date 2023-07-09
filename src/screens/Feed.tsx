import { FlatList, StyleSheet } from 'react-native';
import { myTheme } from '@themes/index';
import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { MatchCard } from '@components/MatchCard/MatchCard';
import { useGetMatches } from '@hooks/useGetMatches';
import { Loading } from '@components/Loading';

export function Feed() {
  const { matches, isLoading } = useGetMatches();

  return (
    <Container>
      <Heading text={'Partidas'} />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          refreshing={isLoading}
          data={matches}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(match, index) => `${match?.league_id}-${index}`}
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
