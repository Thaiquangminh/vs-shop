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
  mounted() {
    this.handleSetNavHeight();
    console.log(this.navigationHeight);
  },
  data: () => ({
    navigationHeight: null,
  }),

  methods: {
    handleSetNavHeight() {
      this.navigationHeight = document.querySelector("#nav-bar").offsetHeight;
      console.log(this.navigationHeight);
    },
  },
};
</script>

<style lang="sass">
$scroll-padding: 100px
@mixin scroll-padding($scroll-padding)
  scroll-padding-top: $scroll-padding

.main-wrapper
  background-color: #f8f9fa

h1, h2, h3, h4, h5, h6
  font-family: 'Poppins', sans-serif

.helper-text p
  color: #a8aeb4 !important
  font-size: 14.4px
  line-height: 24px

html
  scroll-behavior: smooth
  //scroll-padding-top: #{$scroll-padding}
  @include scroll-padding(56px)

p
  font-family: 'Rubik', sans-serif

.hover-effect
  transition: all 0.4s ease-in-out
  transition-property: unset !important
</style>
