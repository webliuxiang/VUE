<template>
  <div id="ChildTwo">
    <h3>{{msg}}</h3>
    <router-link to="/FatherOne">Go to FatherOne</router-link>
  </div>
</template>

<script>
export default {
  name: "ChildTwo",
  components: {},
  data() {
    return {
        msg: "这是子组件 two ."
    };
  },
  methods: {}
};
</script>

<style>
</style>
