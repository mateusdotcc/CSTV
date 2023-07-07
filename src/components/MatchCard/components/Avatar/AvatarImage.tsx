import styled, { css } from 'styled-components/native';

type Props = {
  size?: 'small' | 'large';
  image?: string;
};

const sm = '16px';
const lg = '60px';

const Container = styled.View<Pick<Props, 'size'>>`
  ${({ theme, size }) => css`
    background-color: ${theme.colors.gray100};
    width: ${size === 'small' ? `${sm}` : `${lg}`};
    height: ${size === 'small' ? `${sm}` : `${lg}`};
    border-radius: 50%;
  `}
`;

export function AvatarImage({ image, size = 'small' }: Props) {
  return <Container size={size}>{image}</Container>;
}
