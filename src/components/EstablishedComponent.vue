<template>
  <v-container fluid class="establish-wrapper">
    <HeaderSection :header="establishHeader" />
    <v-row>
      <v-col
        cols="12"
        md="3"
        sm="6"
        xs="12"
        v-for="(member, i) in establishMembers"
        :key="i"
      >
        <v-card elevation="0" class="establish-card-wrapper hover-effect">
          <v-img>
            <img class="establish-img" :src="member.img" />
          </v-img>
          <v-card-title class="establish-card-title text-center">
            <h4 class="establish-card-name">{{ member.name }}</h4>
          </v-card-title>
          <v-card-subtitle class="text-center">
            <p class="establish-card-position">{{ member.position }}</p>
          </v-card-subtitle>
          <v-divider></v-divider>
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
      establishHeader: {
        title: "BEHIND THE PEOPLE",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        haveDivider: true,
      },
      establishMembers: [
        {
          img: "teams/img-1.jpg",
          name: "Frank Johnson",
          position: "CEO",
        },
        {
          img: "teams/img-2.jpg",
          name: "Elaine Stclair",
          position: "DESIGNER",
        },
        {
          img: "teams/img-3.jpg",
          name: "Wanda Arthur",
          position: "DEVELOPER",
        },
        {
          img: "teams/img-4.jpg",
          name: "Joshua Stemple",
          position: "MANAGER",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.establish-wrapper
  background-color: #f8f9fa
  margin-top: -15px
  margin-bottom: 20px
  padding: 10px 30px 40px 30px

.establish-card-wrapper
  background-color: #f8f9fa

.establish-card-title
  padding: 16px 2px

.establish-card-name
  font-size: 17px
  width: 100%
  text-align: center

.establish-card-position
  font-size: 12px

.establish-img
  object-fit: cover
  max-width: 100%

.hover-effect:hover
  transform: translateY(-2rem)
</style>
