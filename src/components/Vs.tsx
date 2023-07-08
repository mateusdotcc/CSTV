import styled, { css } from 'styled-components/native';
import { rgba } from 'polished';

const VS = styled.Text`
  ${({ theme }) => css`
    color: ${rgba(theme.colors.gray100, 0.5)};
    font-size: ${theme.fontSize.md}px;
    margin-left: 20px;
    margin-right: 20px;
  `}
`;

export function Vs() {
  return <VS>VS</VS>;
}
