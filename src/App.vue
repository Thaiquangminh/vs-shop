<template>
  <v-app>
    <v-main class="main-wrapper">
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
.main-wrapper
  background-color: #f8f9fa

h1, h2, h3, h4, h5, h6
  font-family: 'Poppins', sans-serif

.helper-text p
  color: #a8aeb4 !important
  font-size: 14.4px
  line-height: 24px

p
  font-family: 'Rubik', sans-serif

.hover-effect
  transition: all 0.3s ease-in-out
</style>
