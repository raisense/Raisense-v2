<template>
  <div id="about">
    <Hero :data="heroMessage" :logo="true"></Hero>
    <div class="about-list mt-5">
      <b-container>
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="about-item">
              <p class="pretitle">What we do</p>
              <h3 class="title">Reimagine your business through a digital lens</h3>
              <p
                class="desc"
              >Our software engineering heritage combined with our strategic business and innovation consulting, design thinking, and physical-digital capabilities provide real business value to our customers through human-centric innovation.</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="about-item">
              <h3 class="title">Win by converting breakthrough ideas to real outcomes</h3>
              <p
                class="desc"
              >Our end-to-end services combine business and innovation strategy, experience design, technology consulting and best-in-class software engineering to deliver results on a global scale. Are we enlightened builders or practical visionaries?</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="about-item">
              <h3 class="title">Faster, at scale, with no handoffs.</h3>
              <p
                class="desc"
              >The answer is, both. Either way, we bring the skills to position you for the future and build the platforms to take you there. From strategic consulting to engineering at scale, we work across the full digital transformation spectrum to give you the right services at the right time. The result? A smooth flow from the right ideas to real results — faster, at scale, with no handoffs.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Capabilities></Capabilities>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import Capabilities from "~/components/Capabilities";

export default {
  components: {
    Hero,
    Capabilities
  },
  computed: {
    heroMessage() {
      const lang = this.$i18n;
      return lang.messages[lang.locale].hero.about;
    }
  }
};
</script>

<style scoped>
.about-item {
  margin-bottom: 12rem;
}

.about-item .pretitle {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.about-item .title {
  font-size: 45px;
  font-weight: bold;
  line-height: 54px;
  margin-bottom: 24px;
}

.about-item .desc {
  font-size: 18px;
}
</style>