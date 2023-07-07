import styled, { css } from 'styled-components/native';

type Props = {
  text: string;
};

const Container = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spaces.gutter}px;
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

export function Heading({ text }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}
