import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';
import { Placeholder } from '../../../../assets/Placeholder';

type Props = {
  size?: 'small' | 'large';
  direction?: 'left' | 'right';
  image?: string | null;
};

const sm = '16px';
const lg = '60px';

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

type ContainerProps = Pick<Props, 'size'> & {
  hasImage: boolean;
};

const Container = styled.View<ContainerProps>`
  ${({ theme, size, hasImage }) => css`
    background-color: ${hasImage ? 'transparent' : theme.colors.gray100};
    width: ${size === 'small' ? `${sm}` : `${lg}`};
    height: ${size === 'small' ? `${sm}` : `${lg}`};
    border-radius: 50%;
  `}
`;
