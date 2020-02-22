<template>
  <lottie
    :options="options"
    path="~/assets/animation/loader.json"
    :height="300"
    :width="400"
    @animCreated="handleAnimation"
  />
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/animation/loader.json";

export default {
  components: {
    lottie: Lottie
  },
  data() {
    return {
      options: { animationData: animationData.default }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      console.log(anim);
      this.anim = anim;
      this.anim.play();
    }
  }
};
</script>

<style scoped></style>
