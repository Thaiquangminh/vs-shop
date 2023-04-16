<template>
  <HeaderSection :header="bannerStartHeader" />
</template>

<script>
import HeaderSection from "@/ui/HeaderSection.vue";

export default {
  components: { HeaderSection },
  data() {
    return {
      bannerStartHeader: {
        title: "Let's Get Started",
        subtitle:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        isBanner: true,
        backgroundBanner: true,
      },
    };
  },
};
</script>
