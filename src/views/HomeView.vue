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
    <ButtonBackTop :activeBtn="activeBtn" />
    <!--    <ButtonBackTop :activeBtn="activeBtn" />-->
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
import ButtonBackTop from "@/ui/ButtonBackTop.vue";

export default {
  name: "HomeView",
  components: {
    ButtonBackTop,
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
  data() {
    return {
      activeBtn: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 500) {
        this.activeBtn = true;
      } else {
        this.activeBtn = false;
      }
    },
    handleBackToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper-back-top
  //position: absolute
</style>
