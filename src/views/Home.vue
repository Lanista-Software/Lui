<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <top-section />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopSection from "@/components/Header/TopSection.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    TopSection
  }
};
</script>
