<template>
  <div id="ChildOne">
    <h3>{{msg}}</h3>
    <router-link to="/FatherTwo">Go to FatherTwo</router-link>
  </div>
</template>

<script>
export default {
  name: "ChildOne",
  components: {},
  data() {
    return {
        msg: "这是子组件 one ."
    }
  },
  methods: {}
};
</script>

<style>
</style>
