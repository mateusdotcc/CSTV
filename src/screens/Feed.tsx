import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { MatchCard } from '@components/MatchCard/MatchCard';
import { FlatList, StyleSheet, Text } from 'react-native';
import { myTheme } from '@themes/index';
import { useGetMatches } from '@hooks/useGetMatches';

const styles = StyleSheet.create({
  list: {
    paddingRight: myTheme.spaces.gutter,
    paddingLeft: myTheme.spaces.gutter,
  },
});

export function Feed() {
  const { matches, isLoading } = useGetMatches();

  return (
    <Container>
      <Heading text={'Partidas'} />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          data={matches}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(match) => match?.league_id?.toString()}
          renderItem={({ item }) => <MatchCard match={item} />}
        />
      )}
    </Container>
  );
}
