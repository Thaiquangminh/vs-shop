<template>
  <v-row
    justify="center"
    :class="[
      'header-wrapper',
      {
        'background-banner': header.isBanner,
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
            'background-banner': header.isBanner,
            'min-height-banner': header.isBanner,
          },
        ]"
      >
        <v-card-title class="header-card-title">
          <h2
            :class="[
              'header-text',
              {
                'margin-bottom-title': !header.haveDivider,
              },
            ]"
          >
            {{ header.title }}
          </h2>
        </v-card-title>
        <v-divider
          v-if="header.haveDivider"
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
        <v-btn
          v-if="header.haveBtn"
          class="header-btn-text hover-effect"
          elevation="0"
          >{{ header.textBtn }}</v-btn
        >
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
      textBtn: {
        type: String,
        default: "",
      },
      isBanner: {
        type: Boolean,
        default: false,
      },
      haveDivider: {
        type: Boolean,
        default: true,
      },
      haveBtn: {
        type: Boolean,
        default: false,
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.header-wrapper

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
  //background: url("")
  opacity: 0.9

.min-height-banner
  min-height: 300px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

// have button
.header-btn-text
  font-size: 13px
  width: 160px
  letter-spacing: 0.2px
  padding: 20px !important

.hover-effect:hover
  transform: translateY(-0.5rem)

// haven't divider
.margin-bottom-title
  margin-bottom: 25px
</style>
