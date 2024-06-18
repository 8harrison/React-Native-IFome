import { Text, View } from 'react-native';
import { stylesCartCard as styles } from '../style/styles';
import { formatPrice } from '../utils/helper';
export default function CartCard({ nome, restaurante, preco, id }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.rest}>{restaurante}</Text>
      </View>
      <Text style={styles.preco}>R$ {formatPrice(preco)}</Text>
    </View>
  );
}
