import styled, { css } from 'styled-components/native';

type Props = {
  text: string;
};

export function Heading({ text }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}

const Container = styled.View`
  ${({ theme }) => css`
    padding: 10px ${theme.spaces.gutter}px ${theme.spaces.gutter}px ${theme.spaces.gutter}px;
  `}
`;

const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.medium};
    font-size: ${theme.fontSize.xl}px;
    line-height: 40px;
  `}
`;
