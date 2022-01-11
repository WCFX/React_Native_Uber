import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: Props) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export { Button };
