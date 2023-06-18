<template>
  <div class="home">
    <h1>this is home page</h1>
    <h2>My Name is {{ this.$store.state.name }}</h2>
    <h2>My Age is {{ this.$store.state.age }}</h2>
    <input type="text" name="name" v-model="this.$store.state.name" />
    <h3>{{ this.$store.getters.yourData }}</h3>
    <button @click="changname()">change name</button>
  </div>
</template>

<script setup>
const changname = () => {
  this.$store.commit("changeTitle");
};
</script>
