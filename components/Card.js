import { SafeAreaView, View, Pressable, Image, Text } from 'react-native';
import { stylesCard as styles } from '../style/styles';
import { formatPrice } from '../utils/helper';

export default function Card({ id, nome, restaurante, preco, image, onPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.txtContainer}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.rest}>{restaurante}</Text>
        <Text style={styles.preco}>R$ {formatPrice(preco)}</Text>
        <Pressable style={styles.btn} onPress={onPress}>
          <Text style={styles.btnTxt}>COMPRAR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
