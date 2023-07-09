import styled from 'styled-components/native';
import { Player } from '@components/PlayerCard/components';
import { PlayerProps } from '@hooks/useGetTeam';

type Props = {
  player: PlayerProps;
  direction: 'left' | 'right';
};

export function PlayerCard({ player, direction }: Props) {
  return (
    <Container>
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

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

const BoxInfo = styled.View`
  flex-direction: column;
`;
