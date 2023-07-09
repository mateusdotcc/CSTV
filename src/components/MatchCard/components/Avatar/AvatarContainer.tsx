import { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';

type Props = {
  children: ReactNode;
  position?: 'vertical' | 'horizontal';
};

export function AvatarContainer({ children, position = 'vertical' }: Props) {
  return <Container position={position}>{children}</Container>;
}

const Container = styled.View<Pick<Props, 'position'>>`
  ${({ position }) => css`
    align-items: center;

    ${position === 'vertical' &&
    css`
      flex-direction: column;
      gap: 10px;
    `}

    ${position === 'horizontal' &&
    css`
      flex-direction: row;
      gap: 8px;
    `}
  `}
`;
