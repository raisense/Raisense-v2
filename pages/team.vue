<template>
  <div id="team">
    <Hero :data="hero"></Hero>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
export default {
  components: {
    Hero
  },
  computed: {
    hero() {
      return this.$store.state.hero.hero.team;
    }
  }
};
</script>