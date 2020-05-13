<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
export default {
  name: "nav-home",
  components: {
    NavHeader
  },
  data() {
    return {
      x: "123"
    };
  }
};
</script>