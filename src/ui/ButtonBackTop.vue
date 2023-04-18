<template>
  <v-row class="wrapper-back-top">
    <v-col cols="12">
      <v-btn
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="handleBackToTop"
        v-if="activeBtn"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    activeBtn: Boolean,
  },
  methods: {
    handleBackToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-scroll
  position: absolute
  bottom: 20px
  right: 20px
</style>
