import styled, { css } from 'styled-components/native';
import { DirectionProps } from '@components/PlayerCard/components/PlayerContainer';

type Props = {
  title: string;
  direction: DirectionProps;
};

const Title = styled.Text<Pick<Props, 'direction'>>`
  ${({ theme, direction }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    text-align: ${direction};
  `}
`;

export function PlayerNickname({ title, direction }: Props) {
  return <Title direction={direction}>{title}</Title>;
}
