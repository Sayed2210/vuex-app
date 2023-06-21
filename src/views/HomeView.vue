<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <h2>My Name is {{ this.$store.state.name }}</h2>
    <h2>My Age is {{ this.$store.state.age }}</h2>
    <input type="text" name="name" v-model="this.$store.state.name" />
    <h3>{{ this.$store.getters.yourData }}</h3>
    <ul>
      <li
        v-for="product in this.$store.state.getProducts.products"
        :key="product.id"
      >
        {{ product.title }}
      </li>
    </ul>
    <button @click="this.$store.dispatch('getDataFromApi')">
      Get Products
    </button>
  </div>
</template>

<script></script>
