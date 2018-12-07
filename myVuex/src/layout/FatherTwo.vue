<template>
  <div id="FatherTwo">
    <h1>{{msg}}</h1>
    <ChildTwo></ChildTwo>
  </div>
</template>

<script>
import ChildTwo from "../components/ChildTwo";
export default {
  name: "FatherTwo",
  components: {
      ChildTwo
  },
  data() {
    return {
        msg: "这是父组件 two ."
    };
  },
  methods: {}
};
</script>

<style>
</style>
