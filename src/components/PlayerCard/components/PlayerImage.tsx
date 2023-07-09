import styled, { css } from 'styled-components/native';
import { Image } from 'expo-image';
import { PlaceholderUser } from '@components/PlaceholderUser';

type Props = {
  image?: string;
};

type ContainerProps = {
  hasImage: boolean;
};

const Container = styled.View<ContainerProps>`
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
