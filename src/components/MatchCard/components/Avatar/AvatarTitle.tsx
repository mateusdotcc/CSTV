import styled, { css } from 'styled-components/native';
import { myTheme } from '@themes/index';

type SizeProps = (typeof myTheme)['fontSize'];

type Props = {
  title: string;
  size?: SizeProps;
};

const defaultSize = 'md';

const Title = styled.Text<Pick<Props, 'size'>>`
  ${({ theme, size = defaultSize }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize[size]}px;
  `}
`;

export function AvatarTitle({ title, size = defaultSize }: Props) {
  return <Title size={size}>{title}</Title>;
}
