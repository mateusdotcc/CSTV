import { TouchableOpacity } from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Path, Svg } from 'react-native-svg';

type Props = HeaderBackButtonProps;

export function BackButton(props: Props) {
  return (
    <TouchableOpacity {...props} hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967C11.2374 5.17678 10.7626 5.17678 10.4697 5.46967L4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L10.4697 18.5303C10.7626 18.8232 11.2374 18.8232 11.5303 18.5303C11.8232 18.2374 11.8232 17.7626 11.5303 17.4697L6.81066 12.75L19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25L6.81066 11.25L11.5303 6.53033Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
}
