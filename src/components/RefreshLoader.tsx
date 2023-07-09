import { RefreshControl, RefreshControlProps } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Props extends RefreshControlProps {}

export function RefreshLoader(props: Props) {
  const { colors } = useTheme();

  return <RefreshControl tintColor={colors.white} {...props} />;
}
