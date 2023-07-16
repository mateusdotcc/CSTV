import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';
import { Placeholder } from '../../../../assets/Placeholder';

type Props = {
  size?: 'small' | 'large';
  direction?: 'left' | 'right';
  image?: string | null;
};

const sm = 16;
const lg = 60;

export function AvatarImage({ image, direction, size = 'small' }: Props) {
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
        <>
          {size === 'large' && (
            <BoxPlaceholder direction={direction}>
              <Placeholder />
            </BoxPlaceholder>
          )}
        </>
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
    width: ${size === 'small' ? `${sm}` : `${lg}`}px;
    height: ${size === 'small' ? `${sm}` : `${lg}`}px;
    border-radius: ${size === 'small' ? Math.round(sm / 2) : Math.round(lg / 2)}px;
  `}
`;

const BoxPlaceholder = styled.View<Pick<Props, 'direction'>>`
  ${({ direction }) => css`
    width: 100%;
    height: 100%;
    
    ${direction === 'left' &&
    css`
      transform: scaleX(-1);
    `}
  `}
`;
