<template>
  <v-container class="services-wrapper">
    <HeaderSection :header="servicesHeader" />
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
        v-for="(service, i) in services"
        :key="i"
        class="mt-5"
      >
        <v-card class="services-card hover-effect elevation-0">
          <v-avatar class="services-avatar">
            <v-icon class="services-avatar-icon">{{ service.icon }}</v-icon>
          </v-avatar>
          <v-card-title>
            <h4 class="services-title-item pt-4">{{ service.title }}</h4>
          </v-card-title>
          <v-card-text class="helper-text">
            <p class="helper-text">
              {{ service.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderSection from "@/ui/HeaderSection.vue";

export default {
  components: { HeaderSection },
  data() {
    return {
      servicesHeader: {
        title: "OUR SERVICES",
        subtitle:
          "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.",
      },
      services: [
        {
          icon: "fa-thin fa-gem",
          title: "Digital Design",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
        },
        {
          icon: "fa-thin fa-display",
          title: "Unlimited Colors",
          text: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
        },
        {
          icon: "fa-thin fa-piggy-bank",
          title: "Strategy Solutions",
          text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
        },
        {
          icon: "fa-sharp fa-light fa-headset",
          title: "Awesome Support",
          text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
        },
        {
          icon: "fa-thin fa-newspaper",
          title: "Truly Multipurpose",
          text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        },
        {
          icon: "fa-thin fa-plane",
          title: "Easy to customize",
          text: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.services-wrapper
  background-color: #f8f9fa

.services-card
  background-color: #f8f9fa
  text-align: center

.services-card-title
  display: flex
  flex-direction: column

.services-avatar
  background-color: #fff
  height: 60px !important
  width: 60px !important

.services-avatar-icon
  color: #dc3545

.services-title-item
  text-align: center
  width: 100%

.hover-effect
  transition: all 0.3s ease-in-out

.hover-effect:hover
  transform: translateY(-0.6rem)
  .services-avatar
    background-color: #dc3545
  .services-avatar-icon
    color: #fff
</style>
