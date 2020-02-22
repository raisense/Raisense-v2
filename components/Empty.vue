<template>
  <div>
    <h5 align="center">Sorry, this category is empty!</h5>
    <lottie
      :options="options"
      path="~/assets/animation/empty.json"
      :height="300"
      :width="300"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/animation/empty.json";

export default {
  components: {
    lottie: Lottie
  },
  data() {
    return {
      options: { animationData: animationData.default, loop: false }
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
