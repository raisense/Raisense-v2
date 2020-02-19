<template>
  <div>
    <div id="scroll-area">
      <smooth-scrollbar>
        <div class="cursor" ref="cursor"></div>
        <Navbar></Navbar>
        <nuxt />
        <Footer></Footer>
      </smooth-scrollbar>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { gsap } from "gsap";

export default {
  components: {
    Navbar,
    Footer
  },

  methods: {
    moveCursor(e) {
      gsap.to(this.$refs.cursor, 0.5, {
        x: e.clientX,
        y: e.clientY,
        ease: "power1.ease-in"
      });
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.cursor {
  position: relative;
  z-index: 9999;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  pointer-events: none;
}

#scroll-area {
  width: 100%;
  height: 100vh;
}
</style>
