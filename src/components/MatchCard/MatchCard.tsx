import styled, { css } from 'styled-components/native';
import { rgba } from 'polished';
import { Avatar } from '@components/MatchCard/components/Avatar';
import { TouchableOpacityProps } from 'react-native';
import { useNav } from '@hooks/useNav';

type Props = {
  matches: string;
};

const Container = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
  activeOpacity: 0.85,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};
    margin-bottom: 23px;
    padding: 8px 16px;
    border-radius: 16px;
    width: 100%;
    height: 176px;
    overflow: hidden;
  `}
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 177px;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Vs = styled.Text`
  ${({ theme }) => css`
    color: ${rgba(theme.colors.gray100, 0.5)};
    font-size: ${theme.fontSize.md}px;
    margin-left: 20px;
    margin-right: 20px;
  `}
`;

const Date = styled.View`
  ${({ theme }) => css`
    background-color: ${rgba(theme.colors.gray100, 0.2)};
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    border-bottom-left-radius: 16px;
  `}
`;

const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;

export function MatchCard({ matches }: Props) {
  const navigation = useNav();

  function handlePress() {
    navigation.navigate('matchDetails');
  }

  return (
    <Container onPress={handlePress}>
      <Date>
        <DateText>seg, 16:00</DateText>
      </Date>
      <Content>
        <Avatar.Container>
          <Avatar.Image size={'large'} />
          <Avatar.Title title={'Time 1'} />
        </Avatar.Container>
        <Vs>VS</Vs>
        <Avatar.Container>
          <Avatar.Image size={'large'} />
          <Avatar.Title title={'Time 1'} />
        </Avatar.Container>
      </Content>
      <Footer>
        <Avatar.Container position={'horizontal'}>
          <Avatar.Image />
          <Avatar.Title size={'sm'} title={matches} />
        </Avatar.Container>
      </Footer>
    </Container>
  );
}
