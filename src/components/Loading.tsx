import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator size={'large'} />
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
