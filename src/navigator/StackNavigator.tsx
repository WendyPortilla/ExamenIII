import { createStackNavigator } from '@react-navigation/stack';

//import { Screen3 } from '../screens/Screen3';
import { Screen2 } from '../screens/Screen2';
import { Screen1 } from '../screens/Screen1';
import { Screen3 } from '../screens/Screen3';
import { Screen4 } from '../screens/Screen4';

export type RootStackParamList = {
    Screens: undefined;
    Screen1: undefined;
    Screen2: undefined;
    Screen3: undefined;
    Screen4: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=> { 
    return ( 
        <Stack.Navigator screenOptions={{ 
            cardStyle:{ 
            }}}> 
   
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}