<template>
  <div id="FatherOne">
    <h1>{{msg}}</h1>
    <ChildOne></ChildOne>
  </div>
</template>

<script>
import ChildOne from "../components/ChildOne";
export default {
  name: "FatherOne",
  components: {
    ChildOne
  },
  data() {
    return {
        msg: "这是父组件 one ."
    };
  },
  methods: {}
};
</script>

<style>
</style>
