import styled, { css } from 'styled-components/native';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  position?: 'vertical' | 'horizontal';
};

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

export function AvatarContainer({ children, position = 'vertical' }: Props) {
  return <Container position={position}>{children}</Container>;
}
