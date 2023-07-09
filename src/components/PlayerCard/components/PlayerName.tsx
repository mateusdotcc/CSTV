import styled, { css } from 'styled-components/native';
import { DirectionProps } from '@components/PlayerCard/components/PlayerContainer';

type Props = {
  title: string;
  direction: DirectionProps;
};

export function PlayerName({ title, direction }: Props) {
  return <Title direction={direction}>{title}</Title>;
}

const Title = styled.Text<Pick<Props, 'direction'>>`
  ${({ theme, direction }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    text-align: ${direction};
    color: ${theme.colors.gray300};
    margin-top: 1px;
  `}
`;
