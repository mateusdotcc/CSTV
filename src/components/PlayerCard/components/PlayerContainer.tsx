import styled, { css } from 'styled-components/native';
import { ReactNode } from 'react';

export type DirectionProps = 'left' | 'right';

type Props = {
  children: ReactNode;
  direction: DirectionProps;
};

const Container = styled.View<Pick<Props, 'direction'>>`
  ${({ theme, direction }) => css`
    background-color: ${theme.colors.gray200};
    margin-bottom: 13px;
    padding: 8px 11px;
    width: 50%;
    max-height: 54px;

    ${direction === 'left' &&
    css`
      align-items: flex-start;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
    `}

    ${direction === 'right' &&
    css`
      align-items: flex-end;
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
    `}
  `}
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  position: relative;
  top: -12px;
`;

export function PlayerContainer({ children, direction }: Props) {
  return (
    <Container direction={direction}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
