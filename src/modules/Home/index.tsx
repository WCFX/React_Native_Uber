import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Button } from '~/components';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Title>Hello Motherfuckers</S.Title>
      <S.Description>Wagnifico SHEIPADO</S.Description>
      <Button onPress={() => console.log('Matue')}>
        <Icon name="home" size={24} color="#fff" />
      </Button>
    </S.Container>
  );
};
export { Home };
