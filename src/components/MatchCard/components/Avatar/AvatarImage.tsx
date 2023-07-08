import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';
import { Placeholder } from '@components/Placeholder';

type Props = {
  size?: 'small' | 'large';
  direction?: 'left' | 'right';
  image?: string | null;
};

type ContainerProps = Pick<Props, 'size'> & {
  hasImage: boolean;
};

const sm = '16px';
const lg = '60px';

const Container = styled.View<ContainerProps>`
  ${({ theme, size, hasImage }) => css`
    background-color: ${hasImage ? 'transparent' : theme.colors.gray100};
    width: ${size === 'small' ? `${sm}` : `${lg}`};
    height: ${size === 'small' ? `${sm}` : `${lg}`};
    border-radius: 50%;
    overflow: hidden;
  `}
`;

export function AvatarImage({ image, size = 'small' }: Props) {
  const hasImage = Boolean(image);

  return (
    <Container size={size} hasImage={hasImage}>
      {hasImage ? (
        <Image
          style={{ flex: 1, width: '100%' }}
          contentFit={'contain'}
          transition={1000}
          source={image}
        />
      ) : (
        <>{size === 'large' && <Placeholder />}</>
      )}
    </Container>
  );
}
