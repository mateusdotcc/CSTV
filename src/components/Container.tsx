import { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <Box>{children}</Box>;
}

const Box = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.black};
  `}
`;
