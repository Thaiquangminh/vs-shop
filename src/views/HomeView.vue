<template>
  <v-container>
    <ServicesComponent />
    <FeaturesComponent />
    <PricingComponent />
    <EstablishedComponent />
    <BannerStartComponent />
  </v-container>
</template>

<script>
import ServicesComponent from "@/components/ServicesComponent.vue";
import FeaturesComponent from "@/components/FeaturesComponent.vue";
import PricingComponent from "@/components/PricingComponent.vue";
import EstablishedComponent from "@/components/EstablishedComponent.vue";
import BannerStartComponent from "@/components/BannerStartComponent.vue";

export default {
  name: "HomeView",
  components: {
    BannerStartComponent,
    EstablishedComponent,
    PricingComponent,
    FeaturesComponent,
    ServicesComponent,
  },
};
</script>
