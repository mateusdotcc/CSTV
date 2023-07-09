import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';
import { PlaceholderUser } from '../../../assets/PlaceholderUser';

type Props = {
  image?: string;
};

export function PlayerImage({ image }: Props) {
  const hasImage = Boolean(image);

  return (
    <Container hasImage={hasImage}>
      {hasImage ? (
        <Image
          style={{ flex: 1, width: '100%' }}
          contentFit={'cover'}
          contentPosition={'top center'}
          transition={1000}
          source={image}
        />
      ) : (
        <PlaceholderUser />
      )}
    </Container>
  );
}

const Container = styled.View<{ hasImage: boolean }>`
  ${({ theme, hasImage }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${hasImage ? 'transparent' : theme.colors.gray100};
    width: 48px;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
  `}
`;
