import { View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Player } from '@components/PlayerCard/components';
import { PlayerProps } from '@hooks/services/useGetTeam';

type Props = {
  index: number;
  player: PlayerProps;
  direction: 'left' | 'right';
};

export function PlayerCard({ index, player, direction = 'left' }: Props) {
  const animateIn =
    direction === 'left' ? FadeInRight.delay(index * 100) : FadeInLeft.delay(index * 100);

  return (
    <Container entering={animateIn}>
      <Player.Container direction={direction}>
        {direction === 'left' && <Player.Image image={player?.image_url} />}
        <BoxInfo>
          <Player.Nickname direction={direction} title={player?.name} />
          <Player.Name direction={direction} title={player?.first_name} />
        </BoxInfo>
        {direction === 'right' && <Player.Image image={player?.image_url} />}
      </Player.Container>
    </Container>
  );
}

const ViewAnimated = Animated.createAnimatedComponent(View);

const Container = styled(ViewAnimated)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

const BoxInfo = styled.View`
  flex-direction: column;
`;
