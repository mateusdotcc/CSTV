import styled from 'styled-components/native';

type Props = {
  text: string;
};

const Container = styled.View``;

const Title = styled.Text`
  color: #ffffff;
  font-size: 32px;
  line-height: 40px;
`;

export function Heading({ text }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}
