<template>
  <v-container fluid class="pricing-wrapper" id="pricing">
    <HeaderSection :header="pricingHeader" />
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
        v-for="(pack, i) in packs"
        :key="i"
        :class="[
          'mt-5',
          {
            'sm-padding-col': $vuetify.breakpoint.smAndDown,
          },
        ]"
      >
        <v-card class="pricing-card hover-effect" elevation="1">
          <v-card-title class="d-flex flex-column">
            <h4 class="pricing-title-item pt-4">{{ pack.title }}</h4>
            <h1 class="my-5">{{ pack.price }}</h1>
          </v-card-title>
          <v-card-subtitle class="helper-text">
            <p class="helper-text">
              {{ pack.helperText }}
            </p>
          </v-card-subtitle>

          <v-divider class="mx-8 my-6"></v-divider>
          <v-card-text>
            <p>
              Bandwidth: <b>{{ pack.content.bandwidth }}</b>
            </p>
            <p>
              Onlinespace: <b>{{ pack.content.onlinespace }}</b>
            </p>
            <p>
              Support: <b>{{ pack.content.support }}</b>
            </p>
            <p>
              <b>{{ pack.content.domain }}</b> Domain
            </p>
            <p>
              <b>{{ pack.content.hiddenFees }}</b> Hidden Fees
            </p>
            <v-btn text class="pricing-btn hover-effect-btn">Join Now</v-btn>
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
      pricingHeader: {
        title: "OUR PRICING",
        subtitle:
          "Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.",
        haveDivider: true,
      },
      packs: [
        {
          title: "ECONOMY",
          price: "$9.90",
          helperText: "BILLING PER MONTH",
          content: {
            bandwidth: "1GB",
            onlinespace: "50MB",
            support: "No",
            domain: "1",
            hiddenFees: "No",
          },
        },
        {
          title: "DELUXE",
          price: "$19.90",
          helperText: "BILLING PER MONTH",
          content: {
            bandwidth: "10GB",
            onlinespace: "500MB",
            support: "Yes",
            domain: "10",
            hiddenFees: "No",
          },
        },
        {
          title: "ULTIMATE",
          price: "$29.90",
          helperText: "BILLING PER MONTH",
          content: {
            bandwidth: "100GB",
            onlinespace: "2GB",
            support: "Yes",
            domain: "Unlimited",
            hiddenFees: "No",
          },
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.pricing-wrapper
  background-color: #f8f9fa
  margin-bottom: 20px
  padding: 10px 30px 30px 30px
  margin-top: 12px

.pricing-text
  font-weight: 500
  width: 100%
  text-align: center

.pricing-card
  background-color: #fff
  text-align: center

.pricing-card-title
  display: flex
  flex-direction: column

.pricing-title-item
  font-weight: 600
  font-size: 17px

.pricing-btn
  background-color: #FB3E3E
  color: #fff
  font-size: 12px
  padding: 10px 25px !important
  margin-top: 20px
  margin-bottom: 10px

b
  color: #FB3E3E

p
  padding-top: 5px
  font-weight: 600

.hover-effect:hover
  transform: translateY(-1rem)

.hover-effect-btn:hover
  background-color: #dc3545

// sm and down
.sm-padding-col
  padding: 10px 20px
</style>
