<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <h2>My Name is {{ getProducts.name }}</h2>
    <h2>My Age is {{ getProducts.age }}</h2>
    <input type="text" name="name" v-model="getProducts.name" />
    <h3>{{ getters.yourData }}</h3>
    <button @click="store.commit('changeTitle')">change name</button>
    <ul>
      <li v-for="product in getProducts.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <button @click="store.dispatch('getDataFromApi')">Get Products</button>
  </div>
</template>

<!-- compstion  api-->
<script setup>
import { useStore } from "vuex";
const store = useStore();
const getters = store.getters;
const getProducts = store.state.getProducts;
</script>

<!-- option api -->
<!-- <script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["getProducts"]),
    ...mapGetters(["yourData"]),
  },
  methods: {
    ...mapMutations(["changeTitle"]),
    ...mapActions(["getDataFromApi"]),
    async getProductsFun() {
      await this.getDataFromApi();
    },
    changName() {
      this.changeTitle();
    },
  },
};
</script> -->
