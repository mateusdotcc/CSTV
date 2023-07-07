import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { MatchCard } from '@components/MatchCard/MatchCard';
import { FlatList, StyleSheet } from 'react-native';
import { myTheme } from '@themes/index';

const data = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

const styles = StyleSheet.create({
  list: {
    paddingRight: myTheme.spaces.gutter,
    paddingLeft: myTheme.spaces.gutter,
  },
});

export function Feed() {
  return (
    <Container>
      <Heading text={'Partidas'} />

      <FlatList
        data={data}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <MatchCard matches={item} />}
      />
    </Container>
  );
}
