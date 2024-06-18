import { StyleSheet } from "react-native";

const stylesIfome = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginEnd: 24,
    alignItems: "center",
    marginTop: 12,
  },
  txtQtd: {
    color: "red",
    fontSize: 18,
    marginStart: 8,
    fontWeight: "600",
  },
  container: {
    height: "100%",
  },
});

const stylesCartScreen = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    height: "100%",
    justifyContent: "space-around",
  },
  list: {
    width: "80%",
  },
  txtTotal: {
    color: "#8e8e8e",
    fontSize: 18,
    marginBottom: 10,
  },
  total: {
    fontWeight: "700",
    fontSize: 40,
  },
  btn: {
    borderWidth: 1,
    borderColor: "red",
    width: "80%",
    paddingVertical: 10,
    marginTop: "30%",
  },
  txtBtn: {
    color: "red",
    textAlign: "center",
    fontSize: 18,
  },
});

const stylesCartCard = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
    marginTop: 20,
    borderColor: "#cecece",
  },
  name: {
    fontSize: 18,
  },
  rest: {
    fontSize: 14,
    color: "#8e8e8e",
  },
  preco: {
    fontSize: 26,
  },
});

const stylesCard = StyleSheet.create({
  container: {
    width: "90%",
    height: 200,
    flexDirection: "row",
    borderWidth: 1,
    borderBottomWidth: 3,
    alignSelf: "center",
    padding: 16,
    borderColor: "#cecece",
    marginVertical: 15,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  txtContainer: {
    paddingStart: 20,
    width: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  rest: {
    marginTop: 4,
    color: "#8e8e8e",
  },
  preco: {
    fontSize: 38,
    marginTop: 12,
  },
  btn: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 16,
    width: 135,
  },
  btnTxt: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },
});

export { stylesIfome, stylesCartScreen, stylesCartCard, stylesCard };
