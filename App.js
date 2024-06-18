import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ifome from './components/Ifome';
import CartScreen from './components/CartScreen';
import ValueProvider from './components/ContextValue';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ValueProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'red' },
            headerTitleStyle: { fontWeight: 700, fontSize: 22, color: 'white' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="IFome" component={Ifome} />
          <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
}
