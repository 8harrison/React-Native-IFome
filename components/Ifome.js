import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useContext } from 'react';
import { ValueContext } from './ContextValue';
import { foods } from '../fakeDatabase/database';
import Card from './Card';
import { stylesIfome as styles } from '../style/styles';
import { toCart, addCart } from '../utils/helper';

export default function Ifome({ navigation }) {
  const { cart, setCart } = useContext(ValueContext);
  const props = [cart, setCart, navigation];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Foundation
          name="shopping-cart"
          size={26}
          color="red"
          onPress={() => toCart(navigation)}
        />
        <Text style={styles.txtQtd}>{cart.length} itens</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            nome={item.nome}
            restaurante={item.restaurante}
            preco={item.preco}
            image={item.image}
            onPress={() => addCart(...props, item)}
          />
        )}
      />
    </SafeAreaView>
  );
}
