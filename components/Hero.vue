<template>
  <div id="hero">
    <b-container>
      <div class="hero-content">
        <h1 class="hero__title">
          {{ data.title }}
          <img v-if="logo" class="logo-full" src="../assets/images/logo-full.svg" />
        </h1>
        <p class="hero__desc">{{ data.desc }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: ["data", "logo"],
  mounted() {
    let tl = gsap.timeline();

    tl.from(".hero__title", 1, { y: 20, opacity: 0 });
    tl.from(".hero__desc", 1, { y: 20, opacity: 0 });
  }
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background-color: rgba(93, 197, 197, 0.05);
}

#hero .container {
  height: 100%;
}
.hero-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.hero__title {
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
  color: #010101;
}

.hero__desc {
  color: #757575;
  width: 70%;
  font-size: 2rem;
  text-align: left;
  text-transform: inherit;
}
</style>
