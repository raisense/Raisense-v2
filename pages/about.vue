<template>
  <Hero :data="hero"></Hero>
</template>

<script>
import Hero from "~/components/Hero";

export default {
  components: {
    Hero
  },
  computed: {
    hero() {
      return this.$store.state.hero.hero.about;
    }
  }
};
</script>
