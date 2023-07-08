import styled from 'styled-components/native';
import { Player } from '@components/PlayerCard/components';

type Props = {
  player: string;
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 13px;
`;

const BoxInfo = styled.View<{}>`
  flex-direction: column;
`;

export function PlayerCard({ player }: Props) {
  return (
    <Container>
      <Player.Container direction={'right'}>
        <BoxInfo>
          <Player.Nickname direction={'right'} title={player} />
          <Player.Name direction={'right'} title={'Nome do Jogador'} />
        </BoxInfo>
        <Player.Image />
      </Player.Container>
      <Player.Container direction={'left'}>
        <Player.Image />
        <BoxInfo>
          <Player.Nickname direction={'left'} title={player} />
          <Player.Name direction={'left'} title={'Nome do Jogador'} />
        </BoxInfo>
      </Player.Container>
    </Container>
  );
}
