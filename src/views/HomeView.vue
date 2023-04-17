<template>
  <v-container fluid>
    <ServicesComponent />
    <FeaturesComponent />
    <BannerPlanComponent />
    <PricingComponent />
    <EstablishedComponent />
    <BannerStartComponent />
    <BlogComponent />
    <ContactComponent />
    <FooterComponent />
  </v-container>
</template>

<script>
import ServicesComponent from "@/components/ServicesComponent.vue";
import FeaturesComponent from "@/components/FeaturesComponent.vue";
import PricingComponent from "@/components/PricingComponent.vue";
import EstablishedComponent from "@/components/EstablishedComponent.vue";
import BannerStartComponent from "@/components/BannerStartComponent.vue";
import BannerPlanComponent from "@/components/BannerPlanComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    ContactComponent,
    BlogComponent,
    BannerPlanComponent,
    BannerStartComponent,
    EstablishedComponent,
    PricingComponent,
    FeaturesComponent,
    ServicesComponent,
  },
};
</script>
