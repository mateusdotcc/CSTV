import { useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled, { css } from 'styled-components/native';
import dayjs from 'dayjs';
import { Container } from '@components/Container';
import { RootStackParamList } from '@hooks/useNav';
import { BackButton } from '@components/BackButton';
import { Avatar } from '@components/MatchCard/components/Avatar';
import { PlayerCard } from '@components/PlayerCard/PlayerCard';
import { MatchProps } from '@hooks/services/useGetMatches';
import { useGetTeam } from '@hooks/services/useGetTeam';
import { Vs } from '@components/Vs';
import { Loading } from '@components/Loading';

interface Props extends NativeStackScreenProps<RootStackParamList, 'matchDetails'> {}

export function MatchDetails({ navigation, route }: Props) {
  const { league, begin_at: beginAt, opponents } = route.params as MatchProps;

  const { team: leftTeam, isLoading: isLoadingLeftTeam } = useGetTeam({
    teamId: opponents[0].opponent.id,
  });
  const { team: rightTeam, isLoading: isLoadingRightTeam } = useGetTeam({
    teamId: opponents[1].opponent.id,
  });

  useEffect(function setNavigationHeader() {
    navigation.setOptions({
      title: league.name,
      headerLeft: (props) => <BackButton {...props} />,
    });
  }, []);

  if (isLoadingLeftTeam && isLoadingRightTeam) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Avatar.Container>
          <Avatar.Image size={'large'} image={opponents?.[0]?.opponent?.image_url} />
          <Avatar.Title title={opponents?.[0]?.opponent?.name} />
        </Avatar.Container>
        <Vs />
        <Avatar.Container>
          <Avatar.Image
            size={'large'}
            direction={'right'}
            image={opponents?.[1]?.opponent?.image_url}
          />
          <Avatar.Title title={opponents?.[1]?.opponent?.name} />
        </Avatar.Container>
      </Header>
      {}
      <Day>{dayjs(beginAt).format('dddd, hh:mm')}</Day>
      <ScrollView contentContainerStyle={styles.scrollList}>
        <FlatList
          style={styles.list}
          data={leftTeam?.players}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(player, index) => `${player?.id}-${index}`}
          renderItem={({ item }) => <PlayerCard direction={'right'} player={item} />}
        />
        <FlatList
          style={styles.list}
          data={rightTeam?.players}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(player, index) => `${player?.id}-${index}`}
          renderItem={({ item }) => <PlayerCard direction={'left'} player={item} />}
        />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollList: {
    flex: 1,
    gap: 13,
    flexDirection: 'row',
  },
  list: {
    maxWidth: '50%',
  },
});

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const Day = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.white};
    margin: 30px 0;
    text-align: center;
  `}
`;
