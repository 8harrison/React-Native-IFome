import { Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { useContext, useState, useEffect } from "react";
import { ValueContext } from "./ContextValue";
import CartCard from "./CartCard";
import { stylesCartScreen as styles } from "../style/styles";
import { formatPrice, somar, buy } from "../utils/helper";

export default function CartScreen() {
  const { cart, setCart } = useContext(ValueContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    somar(setTotal, cart);
  }, [total, cart]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({ item }) => (
          <CartCard
            nome={item.nome}
            restaurante={item.restaurante}
            preco={item.preco}
            id={item.id}
          />
        )}
      />
      <Text style={styles.txtTotal}>Total do Pedido</Text>
      <Text style={styles.total}>R$ {formatPrice(total)}</Text>
      <Pressable style={styles.btn} onPress={() => buy(setCart)}>
        <Text style={styles.txtBtn}>COMPRAR</Text>
      </Pressable>
    </SafeAreaView>
  );
}
