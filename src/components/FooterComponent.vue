<template>
  <v-row class="footer-wrapper">
    <v-col cols="12" md="3" sm="6" xs="12">
      <v-card
        :class="[
          'wrapper-card',
          {
            'wrapper-sm': $vuetify.breakpoint.smAndDown,
          },
        ]"
        elevation="0"
      >
        <v-card-title>
          <h4>VSTECH</h4>
        </v-card-title>
        <v-card-subtitle class="d-flex flex-column">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="">Contact us</a>
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" sm="6" xs="12">
      <v-card
        :class="[
          'wrapper-card',
          {
            'wrapper-sm': $vuetify.breakpoint.smAndDown,
          },
        ]"
        elevation="0"
      >
        <v-card-title>
          <h4>Information</h4>
        </v-card-title>
        <v-card-subtitle class="d-flex flex-column">
          <a href="">Terms & Condition</a>
          <a href="">About us</a>
          <a href="">Jobs</a>
          <a href="">Bookmarks</a>
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" sm="6" xs="12">
      <v-card
        :class="[
          'wrapper-card',
          {
            'wrapper-sm': $vuetify.breakpoint.smAndDown,
          },
        ]"
        elevation="0"
      >
        <v-card-title>
          <h4>Support</h4>
        </v-card-title>
        <v-card-subtitle class="d-flex flex-column">
          <a href="">FAQ</a>
          <a href="">Contact</a>
          <a href="">Discussion</a>
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" sm="6" xs="12">
      <v-card
        :class="[
          'wrapper-card',
          {
            'wrapper-sm': $vuetify.breakpoint.smAndDown,
          },
        ]"
        elevation="0"
      >
        <v-card-title>
          <h4>Subscribe</h4>
        </v-card-title>
        <v-card-subtitle class="d-flex flex-column">
          <p>
            In an ideal world this text wouldn’t exist, a client would
            acknowledge the importance of having web copy before the design
            starts.
          </p>
          <!--          <v-text-field-->
          <!--            outlined-->
          <!--            placeholder="Email"-->
          <!--            class="footer-text-field"-->
          <!--          ></v-text-field>-->
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>
.footer-wrapper
  background-color: #212529

.wrapper-card
  background-color: #212529
  width: 100%
  min-height: 200px

h4
  color: #fff

a, p
  padding: 6px 0
  text-decoration: none
  color: #a8aeb4 !important

a
  transition: all 0.3s ease-in-out

a:hover
  color: #fff !important

h4
  margin: 20px 0

input::placeholder
  //background-color: #2e313a !important
  //color: #a8aeb4 !important
  color: #fff !important

// sm and down
//.wrapper-sm
//  display: flex
//  flex-direction: column
//  align-items: center
//  justify-content: center
</style>
