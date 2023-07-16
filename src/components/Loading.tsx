import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';

type Props = ActivityIndicatorProps & {};

export function Loading(props: Props) {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator size={'large'} color={colors.white} {...props} />
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
