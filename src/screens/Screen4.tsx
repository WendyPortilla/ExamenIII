import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const Screen4 = ({ navigation }:any) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const MenorMayor = () => {
    const numero1 = parseInt(num1);
    const numero2 = parseInt(num2);

    if (numero1 <= numero2) {
      setResultado('Menor: ${num1Int}');
    } else {
      setResultado('Menor: ${num2Int}');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Primer Numero"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        placeholder="Segundo Numero"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <Button title="MenorMayor" onPress={MenorMayor} />
      <Text>{resultado}</Text>
    </View>
  );
}



