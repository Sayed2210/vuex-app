import { createStore } from "vuex";

export default createStore({
  state: {
    name: "Elsayed",
    age: 18,
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
  },
  actions: {},
  modules: {},
});
