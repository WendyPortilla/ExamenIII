import React from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from '../Theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'Screens'>{};

export const Screen1 = ({ navigation }:Props) => {
  return (
    <View>
        <Text style={styles.bienvenidos}>BIENVENIDOS</Text>
      <Button
        title="Imagen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Imagen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Mayor o Igual"
        onPress={() => navigation.navigate('Screen3')}
      />
      <Button
        title="Menor o Igual"
        onPress={() => navigation.navigate('Screen4')}
      />
      
    
    </View>
    

  );
  
  
}


