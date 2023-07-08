import { useEffect } from 'react';
import { Container } from '@components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@hooks/useNav';
import { BackButton } from '@components/BackButton';
import { Avatar } from '@components/MatchCard/components/Avatar';
import { Vs } from '@components/Vs';
import styled, { css } from 'styled-components/native';
import { FlatList, StyleSheet } from 'react-native';
import { PlayerCard } from '@components/PlayerCard/PlayerCard';

type Props = NativeStackScreenProps<RootStackParamList, 'matchDetails'>;

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
    margin: 20px 0;
    text-align: center;
  `}
`;

const styles = StyleSheet.create({
  list: {
    paddingTop: 6,
  },
});

const data = ['Nickname 1', 'Nickname 2', 'Nickname 3', 'Nickname 4', 'Nickname 5', 'Nickname 6'];

export function MatchDetails({ navigation }: Props) {
  useEffect(function setNavigationHeader() {
    navigation.setOptions({
      title: 'League + serie',
      headerLeft: (props) => <BackButton {...props} />,
    });
  }, []);

  return (
    <Container>
      <Header>
        <Avatar.Container>
          <Avatar.Image size={'large'} />
          <Avatar.Title title={'Time 1'} />
        </Avatar.Container>
        <Vs />
        <Avatar.Container>
          <Avatar.Image size={'large'} />
          <Avatar.Title title={'Time 2'} />
        </Avatar.Container>
      </Header>
      <Day>Hoje, 21:00</Day>
      <FlatList
        data={data}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard player={item} />}
      />
    </Container>
  );
}
