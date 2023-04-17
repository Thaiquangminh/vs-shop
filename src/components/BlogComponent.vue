<template>
  <v-container fluid class="blog-wrapper">
    <HeaderSection :header="blogHeader" />
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
        v-for="(item, i) in blogItems"
        :key="i"
      >
        <v-card
          elevation="0"
          :class="[
            'blog-card-wrapper',
            'hover-effect',
            {
              'blog-card-wrapper-sm': $vuetify.breakpoint.smAndDown,
            },
          ]"
        >
          <v-img>
            <img :src="item.img" class="blog-card-img" />
          </v-img>
          <v-card-subtitle class="helper-text">
            <p>{{ item.field }}</p>
          </v-card-subtitle>
          <v-card-title class="blog-card-title">
            <h4>{{ item.title }}</h4>
          </v-card-title>
          <v-card-text class="helper-text">
            <p>{{ item.subtitle }}</p>
          </v-card-text>
          <v-btn text class="text-btn"
            >Read More<v-icon small class="ml-1"
              >fa-light fa-arrow-right</v-icon
            >
          </v-btn>
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
      blogHeader: {
        title: "BLOG",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        haveDivider: true,
      },
      blogItems: [
        {
          img: "/blog/img-1.jpg",
          field: "UI & UX Design",
          title: "Doing a cross country road trip",
          subtitle:
            "She packed her seven versalia, put her initial into the belt and made herself on the way.",
        },
        {
          img: "/blog/img-2.jpg",
          field: "Digital Marketing",
          title: "New exhibition at our Museum",
          subtitle:
            "Pityful a rethoric question ran over her cheek, then she continued her way.",
        },
        {
          img: "/blog/img-3.jpg",
          field: "Travelling",
          title: "Why are so many people",
          subtitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.blog-wrapper
  margin-top: 30px
  margin-bottom: 50px

.blog-card-wrapper
  min-height: 530px

.blog-card-img
  width: 100%
  object-fit: contain

.blog-card-title
  word-break: normal

.text-btn
  text-transform: capitalize
  color:  #FB3E3E

.text-btn::before
  color: transparent

.text-btn:hover
  background: #fff !important
  color: #000000

.hover-effect:hover
  transform: translateY(-1rem)

// sm and down
.blog-card-wrapper-sm
  margin-bottom: 5px
  padding-bottom: 25px
</style>
