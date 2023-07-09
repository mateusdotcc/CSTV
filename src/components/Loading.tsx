import { ActivityIndicator } from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';

export function Loading() {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator size={'large'} color={colors.white} />
    </Container>
  );
}

const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`;
