import { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';

type Props = {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
};

export function AvatarContainer({ children, direction = 'vertical' }: Props) {
  return <Container direction={direction}>{children}</Container>;
}

const Container = styled.View<Pick<Props, 'direction'>>`
  ${({ direction }) => css`
    align-items: center;

    ${direction === 'vertical' &&
    css`
      flex-direction: column;
      gap: 10px;
    `}

    ${direction === 'horizontal' &&
    css`
      flex-direction: row;
      gap: 8px;
    `}
  `}
`;
