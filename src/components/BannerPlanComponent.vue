<template>
  <HeaderSection :header="header" />
</template>

<script>
import HeaderSection from "@/ui/HeaderSection.vue";

export default {
  components: { HeaderSection },
  data() {
    return {
      header: {
        title: "Build your dream website today",
        subtitle:
          "But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.",
        isBanner: true,
        haveBtn: true,
        haveDivider: false,
        textBtn: "View Plan & Pricing",
      },
    };
  },
};
</script>
