<template>
  <v-row
    justify="center"
    :class="[
      'header-wrapper',
      {
        'background-banner': header.backgroundBanner,
      },
    ]"
  >
    <v-col md="8">
      <v-card
        align="center"
        :class="[
          'elevation-0',
          'header-card',
          {
            'text-banner': header.isBanner,
            'background-banner': header.backgroundBanner,
          },
        ]"
      >
        <v-card-title class="header-card-title">
          <h2 class="header-text">{{ header.title }}</h2>
        </v-card-title>
        <v-divider
          :class="[
            'my-5',
            'divider-width',
            {
              'text-banner': header.isBanner,
            },
          ]"
        ></v-divider>
        <v-card-text class="helper-text">
          <p>
            {{ header.subtitle }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    header: {
      title: String,
      subtitle: String,
      isBanner: {
        type: Boolean,
        default: false,
      },
      haveDivider: {
        type: Boolean,
        default: false,
      },
      backgroundBanner: {
        type: Boolean,
        default: false,
      },
    },
  },
};
</script>

<style lang="sass" scoped>

.header-wrapper
  margin-bottom: 20px

.header-card
  margin-top: 20px
  background-color: #f8f9fa
  margin-bottom: 20px

.header-text
  font-weight: 500
  font-size: 30px
  width: 100%
  text-align: center
  letter-spacing: 0.1px

.divider-width
  width: 80px
  background-color:  #FB3E3E

// type banner
.text-banner
  color: #fff
  background-color: #fff

.background-banner
  background: linear-gradient(to right, #512DA8, #711e72)
  opacity: 0.9
</style>
