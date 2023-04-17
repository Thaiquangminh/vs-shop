<template>
  <v-container fluid class="wrapper-contact">
    <HeaderSection :header="contactHeader" />
    <v-row
      :class="{
        'wrapper-contact-row': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-col offset-md="1" cols="12" md="4" sm="12" xs="12">
        <v-card
          elevation="0"
          :class="[
            'wrapper-card',
            {
              'wrapper-card-sm': $vuetify.breakpoint.smAndDown,
            },
          ]"
        >
          <v-card-title>
            <h4 class="contact-card-title">Office Address 1:</h4>
          </v-card-title>
          <v-card-subtitle class="helper-text">
            <p>4461 Cedar Street Moro, AR 72368</p>
          </v-card-subtitle>
        </v-card>
        <v-card
          elevation="0"
          :class="[
            'wrapper-card',
            {
              'wrapper-card-sm': $vuetify.breakpoint.smAndDown,
            },
          ]"
        >
          <v-card-title>
            <h4 class="contact-card-title">Office Address 2:</h4>
          </v-card-title>
          <v-card-subtitle class="helper-text">
            <p>2467 Swick Hill Street New Orleans, LA 70171</p>
          </v-card-subtitle>
        </v-card>
        <v-card
          elevation="0"
          :class="[
            'wrapper-card',
            {
              'wrapper-card-sm': $vuetify.breakpoint.smAndDown,
            },
          ]"
        >
          <v-card-title>
            <h4 class="contact-card-title">Working Hours:</h4>
          </v-card-title>
          <v-card-subtitle class="helper-text">
            <p>9:00AM To 6:00PM</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="8" xs="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field placeholder="Your name*" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field placeholder="Your email*" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field placeholder="Your Subject..." outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea placeholder="Your Message..." outlined></v-textarea>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-end">
          <v-btn text class="contact-card-btn">Send Message</v-btn>
        </v-row>
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
      contactHeader: {
        title: "GET IN TOUCH",
        subtitle:
          "We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.",
        haveDivider: true,
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.wrapper-contact
  margin-top: -15px
  margin-bottom: 70px

.wrapper-card
  background-color: #f8f9fa

.contact-card-title
  font-size: 15px

.contact-card-btn
  background-color: #FB3E3E
  margin-right: 12px
  margin-top: -10px
  padding: 25px 15px !important
  color: #fff
  font-size: 14px !important
  letter-spacing: 0.5px
  text-transform: capitalize

.contact-card-btn:hover
  transform: translateY(-0.5rem)

// sm and down
.wrapper-contact-row
  display: flex
  flex-direction: column
  align-items: center

.wrapper-card-sm
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
</style>
