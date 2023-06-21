export default {
  state: {
    name: "Elsayed",
    age: 18,
    products: "",
  },
  getters: {
    yourData(state) {
      return "Name " + state.name + " Age " + state.age;
    },
  },
  mutations: {
    changeTitle(state) {
      state.name = "Ahmed";
    },
    getProducts(state, products) {
      state.products = products;
      console.log(products);
    },
  },
  actions: {
    async getDataFromApi(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("getProducts", data.products);
        });
    },
  },
};
