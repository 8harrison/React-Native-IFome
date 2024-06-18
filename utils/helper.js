const formatPrice = (preco) => {
  preco = preco.toFixed(2);
  return preco.replace('.', ',');
};

const somar = (setTotal, cart) => {
  const total = cart.reduce((acc, ele) => acc + ele.preco, 0);
  setTotal(total);
};

const buy = (setCart) => {
  setCart([]);
};

const toCart = (navigation) => {
  navigation.navigate('Carrinho');
};

const addCart = (cart, setCart, navigation, item) => {
  const novoItem = {...item}
  novoItem.id = Date.now()
  setCart([...cart, novoItem]);
  navigation.navigate('Carrinho');
};

export { formatPrice, somar, buy, toCart, addCart };
