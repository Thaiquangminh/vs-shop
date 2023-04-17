<template>
  <v-container fluid class="features-wrapper">
    <v-row>
      <v-col md="6" sm="12" xs="12">
        <v-card elevation="0" class="features-card">
          <v-card-title>
            <h3>
              A digital web design studio creating modern &amp; engaging online
              experiences
            </h3>
          </v-card-title>
          <v-card-text class="helper-text">
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul>
              <li>
                <p>We put a lot of effort in design.</p>
              </li>
              <li>
                <p>The most important ingredient of successful website.</p>
              </li>
              <li>
                <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
              </li>
              <li>
                <p>Submit Your Orgnization.</p>
              </li>
            </ul>
            <v-btn text class="features-btn hover-effect"
              >Learn More
              <v-icon right size="small">fa-thin fa-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col offset-md="1" v-if="!$vuetify.breakpoint.smAndDown">
        <v-card elevation="0" class="features-wrapper-image">
          <img class="features-image" src="online-world.svg" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass" scoped>
.features-wrapper, .features-card
  background-color: #fff

.features-wrapper
  margin-top: 70px
  margin-bottom: 70px

li
  color: #dc3545

.features-wrapper-image
  height: 100%
  display: flex

.features-image
  max-width: 100%
  height: auto

.features-btn
  margin-top: 30px
  margin-left: 10px
  background-color:  #FB3E3E
  color: #fff
  letter-spacing: 0.5px
  padding: 22px 16px !important

.hover-effect:hover
  transform: translateY(-0.4rem)
  background-color: #dc3545
</style>
