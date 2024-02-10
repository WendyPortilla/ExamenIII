import React from 'react' 
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native' 

import { TouchableOpacity } from 'react-native-gesture-handler'; 
import { styles } from '../Theme/AppTheme';

export const Screen2 = () => { 
  return ( 
    <View> 
        <Image style={styles.avatar} 
            source={{ 
                uri:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/02/85813-fondo-pantalla-iphone-6.jpg?tf=1920x", 
 
            }} 
                 
            /> 
 
 
        </View> 
  ) 
}