import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import colors from '../misc/colors'

export default function RoundIconButton({antIconName, size, color}) {
  return <AntDesign name={antIconName} size={size || 24} color={color || colors.PRIMARY} />
}
