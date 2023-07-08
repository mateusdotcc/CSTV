import styled, { css } from 'styled-components/native';

type Props = {
  image?: string;
};

const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray100};
    width: 48px;
    height: 48px;
    border-radius: 8px;
  `}
`;

export function PlayerImage({ image }: Props) {
  return <Container>{image}</Container>;
}
