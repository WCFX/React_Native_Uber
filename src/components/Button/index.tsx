import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: Props) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export { Button };
