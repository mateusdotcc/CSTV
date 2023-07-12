import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { rgba } from 'polished';
import dayjs from 'dayjs';
import { useNav } from '@hooks/useNav';
import { Vs } from '@components/Vs';
import { MatchProps } from '@hooks/services/useGetMatches';
import { Avatar } from './components/Avatar';

require('dayjs/locale/pt-br');
let utc = require('dayjs/plugin/utc');
dayjs.extend(utc).locale('pt-br');

type Props = {
  index: number;
  match: MatchProps;
};

export function MatchCard({ index, match }: Props) {
  const navigation = useNav();
  const league = `${match?.league?.name} ${
    Boolean(match?.serie?.name) ? ` | ${match?.serie?.name}` : ''
  }`;
  const isRunning = match?.status === 'running';
  // @ts-ignore
  const beginAt = dayjs.utc(match?.begin_at).format('ddd, hh:mm');

  function handlePress() {
    navigation.navigate('matchDetails', {
      league: { name: league },
      beginAt: match?.begin_at ?? '-',
      opponents: match?.opponents,
    });
  }

  return (
    <Container entering={FadeInDown.delay(index * 100)} onPress={handlePress}>
      <Date isLive={isRunning}>{<DateText>{isRunning ? 'AGORA' : beginAt}</DateText>}</Date>
      <Content>
        <Avatar.Container direction={'vertical'}>
          <Avatar.Image
            direction={'left'}
            size={'large'}
            image={match?.opponents?.[0]?.opponent?.image_url}
          />
          <Avatar.Title title={match?.opponents?.[0]?.opponent?.name} />
        </Avatar.Container>
        <Vs />
        <Avatar.Container>
          <Avatar.Image
            size={'large'}
            direction={'right'}
            image={match?.opponents?.[1]?.opponent?.image_url}
          />
          <Avatar.Title title={match?.opponents?.[1]?.opponent?.name} />
        </Avatar.Container>
      </Content>
      <Footer>
        <Avatar.Container direction={'horizontal'}>
          <Avatar.Image image={match?.league?.image_url} />
          <Avatar.Title size={'sm'} title={league} />
        </Avatar.Container>
      </Footer>
    </Container>
  );
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const Container = styled(TouchableOpacityAnimated).attrs<TouchableOpacityProps>({
  activeOpacity: 0.85,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};
    margin-bottom: 23px;
    padding: 8px 16px;
    border-radius: 16px;
    width: 100%;
    height: 176px;
    overflow: hidden;
  `}
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Date = styled.View<{ isLive?: boolean }>`
  ${({ theme, isLive }) => css`
    background-color: ${isLive ? theme.colors.red : rgba(theme.colors.gray100, 0.2)};
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    border-bottom-left-radius: 16px;
    min-width: 52px;
  `}
`;

const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    text-align: center;
    text-transform: capitalize;
  `}
`;
